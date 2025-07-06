import * as ts from 'typescript';
import type {
    Node,
    SourceFile,
    ParameterDeclaration,
    SyntaxKind,
    ClassDeclaration,
    InterfaceDeclaration,
    FunctionDeclaration,
    MethodDeclaration,
    HeritageClause,
    Expression,
    Type,
    ExpressionWithTypeArguments
} from 'typescript';
const fs = require('fs');
const path = require('path');

interface DocItem {
    name: string;
    kind: SyntaxKind;
    description: string;
    parameters?: {
        name: string;
        type: string;
        description: string;
        initializer?: Expression;
    }[];
    returnType?: string;
    returnDescription?: string;
    examples?: string[];
    references?: { name: string; path: string; }[];
    notes?: string[];
    node?: Node;
    heritageClauses?: HeritageClause[];
    parentClass?: string;  // 添加父类信息
}

interface CommentRange {
    pos: number;
    end: number;
}

function extractJSDocComment(node: Node, sourceFile: SourceFile): string {
    const commentRanges = ts.getLeadingCommentRanges(sourceFile.text, node.getFullStart());
    if (!commentRanges) return '';

    const comments = commentRanges
        .map((range: CommentRange) => sourceFile.text.substring(range.pos, range.end))
        .filter((comment: string) => comment.startsWith('/**'))
        .map((comment: string) => {
            return comment
                .replace(/\/\*\*|\*\//g, '')
                .split('\n')
                .map((line: string) => line.replace(/^\s*\*\s?/, ''))
                .join('\n')
                .trim();
        });

    return comments.join('\n');
}

function getParameterInfo(parameter: ParameterDeclaration, sourceFile: SourceFile): { name: string; type: string; description: string } {
    const name = parameter.name.getText(sourceFile);
    const type = parameter.type ? parameter.type.getText(sourceFile) : 'any';
    const description = extractJSDocComment(parameter, sourceFile);
    return { name, type, description };
}

function sanitizeMarkdown(text: string): string {
    if (!text) return '';

    // 移除或替换可能导致问题的特殊字符
    return text
        // 基本清理
        .replace(/[""]/g, '"')  // 替换特殊引号
        .replace(/['']/g, "'")  // 替换特殊单引号
        .replace(/[—–]/g, "-")  // 替换特殊破折号
        .replace(/[…]/g, "...")  // 替换省略号
        .replace(/[®]/g, "(R)")  // 替换注册商标符号
        .replace(/[™]/g, "(TM)")  // 替换商标符号
        .replace(/[•]/g, "*")  // 替换项目符号
        .replace(/[\u200B-\u200D\uFEFF]/g, '')  // 移除零宽字符
        // MDX 特殊处理
        .replace(/[<>]/g, '')  // 移除尖括号
        .replace(/\{([^}]*)\}/g, '\\{$1\\}')  // 转义对象字面量
        .replace(/\|/g, '\\|')  // 转义表格分隔符
        .replace(/([^\\])\[/g, '$1\\[')  // 转义左方括号
        .replace(/([^\\])\]/g, '$1\\]')  // 转义右方括号
        .replace(/([^\\])\*/g, '$1\\*')  // 转义星号
        .replace(/([^\\])_/g, '$1\\_')  // 转义下划线
        .replace(/([^\\])`/g, '$1\\`')  // 转义反引号
        .replace(/^\d+/, 'n$&')  // 如果以数字开头，添加前缀
        // 格式化
        .replace(/\s+/g, ' ')  // 合并多个空格
        .trim();  // 移除首尾空白
}

function sanitizeType(type: string): string {
    if (!type) return '';

    return type
        .replace(/\|/g, '\\|')  // 转义联合类型分隔符
        .replace(/</g, '&lt;')  // 转义泛型左尖括号
        .replace(/>/g, '&gt;')  // 转义泛型右尖括号
        .replace(/\[/g, '\\[')  // 转义数组左括号
        .replace(/\]/g, '\\]')  // 转义数组右括号
        .replace(/\{/g, '\\{')  // 转义对象左括号
        .replace(/\}/g, '\\}')  // 转义对象右括号
        .replace(/\*/g, '\\*')  // 转义星号
        .replace(/\$/g, '\\$')  // 转义美元符号
        .replace(/`/g, '\\`')  // 转义反引号
        .replace(/~/g, '\\~')  // 转义波浪号
        .replace(/\?/g, '\\?')  // 转义问号
        .replace(/:/g, '\\:')  // 转义冒号
        .replace(/\+/g, '\\+')  // 转义加号
        .replace(/-/g, '\\-');  // 转义减号
}

function sanitizeJSDoc(text: string): string {
    if (!text) return '';

    return text
        .split('\n')
        .map(line => line.trim())
        .filter(line => line)
        .map(line => {
            return line
                .replace(/@param\s+\{([^}]+)\}\s+(\w+)/g, '参数 `$2` (类型: `$1`):')
                .replace(/@param\s+(\w+)/g, '参数 `$1`:')
                .replace(/@returns?\s+\{([^}]+)\}/g, '返回值 (类型: `$1`):')
                .replace(/@returns?\s*/g, '返回值:')
                .replace(/@example\s*/g, '示例:')
                .replace(/@deprecated\s*/g, '已废弃:')
                .replace(/@throws?\s*/g, '异常:')
                .replace(/@type\s*\{([^}]+)\}/g, '类型: `$1`')
                .replace(/@see\s*/g, '参见:')
                .replace(/@since\s*/g, '起始版本:')
                .replace(/@default\s*/g, '默认值:')
                .replace(/\{@link\s+([^}]+)\}/g, '`$1`')  // 处理内联链接
                .replace(/\[\[([^\]]+)\]\]/g, '`$1`')  // 处理双括号引用
                .replace(/\{([^}]*)\}/g, '\\{$1\\}');  // 转义对象字面量（放在最后）
        })
        .join('\n\n');
}

function generateMarkdown(items: DocItem[], sourceFile: SourceFile): string {
    let markdown = '';

    for (const item of items) {
        const kindStr = ts.SyntaxKind[item.kind];
        const safeName = sanitizeMarkdown(item.name);
        const sourceLocation = sourceFile.fileName;

        // 添加标题和类型信息
        markdown += `## ${safeName}\n\n`;
        markdown += `**类型**: \`${kindStr}\`\n\n`;

        // 添加所属类信息（如果有）
        if (item.parentClass) {
            markdown += `**所属类**: \`${item.parentClass}\`\n\n`;
        }

        markdown += `**定义位置**: \`${sourceLocation}\`\n\n`;

        // 添加继承信息（如果是类或接口）
        if (item.heritageClauses && item.heritageClauses.length > 0) {
            const heritage = item.heritageClauses.map(clause =>
                clause.types.map((t: ExpressionWithTypeArguments) => t.getText(sourceFile)).join(', ')
            ).join(', ');

            if (heritage) {
                markdown += `**继承**: \`${heritage}\`\n\n`;
            }
        }

        // 添加描述
        if (item.description) {
            const desc = sanitizeJSDoc(item.description);
            markdown += `### 描述\n\n${desc}\n\n`;
        }

        // 添加参数信息
        if (item.parameters && item.parameters.length > 0) {
            markdown += '### 参数\n\n';
            markdown += '| 参数名 | 类型 | 描述 | 默认值 |\n';
            markdown += '|:-------|:-----|:------|:-------|\n';
            for (const param of item.parameters) {
                const paramName = sanitizeMarkdown(param.name);
                const paramType = sanitizeType(param.type);
                const paramDesc = sanitizeJSDoc(param.description || '');
                const defaultValue = param.initializer ?
                    sanitizeMarkdown(param.initializer.getText(sourceFile)) : '-';
                markdown += `| \`${paramName}\` | \`${paramType}\` | ${paramDesc || '-'} | ${defaultValue} |\n`;
            }
            markdown += '\n';
        }

        // 添加返回值信息
        if (item.returnType) {
            const safeReturnType = sanitizeType(item.returnType);
            markdown += `### 返回值\n\n类型: \`${safeReturnType}\`\n\n`;

            // 如果有返回值描述
            if (item.returnDescription) {
                markdown += `${sanitizeJSDoc(item.returnDescription)}\n\n`;
            }
        }

        // 添加代码示例（如果有）
        if (item.examples && item.examples.length > 0) {
            markdown += '### 示例\n\n';
            for (const example of item.examples) {
                markdown += '```typescript\n';
                markdown += example;
                markdown += '\n```\n\n';
            }
        }

        // 添加相关引用
        if (item.references && item.references.length > 0) {
            markdown += '### 相关引用\n\n';
            for (const ref of item.references) {
                markdown += `- [${sanitizeMarkdown(ref.name)}](${ref.path})\n`;
            }
            markdown += '\n';
        }

        // 添加注意事项（如果有）
        if (item.notes && item.notes.length > 0) {
            markdown += '### 注意事项\n\n';
            for (const note of item.notes) {
                markdown += `- ${sanitizeJSDoc(note)}\n`;
            }
            markdown += '\n';
        }

        // 添加源代码位置
        if (item.node) {
            const { line, character } = sourceFile.getLineAndCharacterOfPosition(item.node.getStart());
            markdown += `### 源代码\n\n`;
            markdown += `**位置**: 第 ${line + 1} 行, 第 ${character + 1} 列\n\n`;

            // 添加相关代码片段
            const start = item.node.getStart();
            const end = item.node.getEnd();
            const code = sourceFile.text.substring(start, end);

            markdown += '```typescript\n';
            markdown += code;
            markdown += '\n```\n\n';
        }

        markdown += '---\n\n';
    }

    return markdown;
}

// 扩展 DocItem 接口
interface DocItem {
    name: string;
    kind: ts.SyntaxKind;
    description: string;
    parameters?: {
        name: string;
        type: string;
        description: string;
        initializer?: ts.Expression;
    }[];
    returnType?: string;
    returnDescription?: string;
    examples?: string[];
    references?: { name: string; path: string; }[];
    notes?: string[];
    node?: ts.Node;
    heritageClauses?: ts.HeritageClause[];
    parentClass?: string;  // 添加父类信息
}

function extractDocItems(sourceFile: SourceFile): DocItem[] {
    const items: DocItem[] = [];
    let currentClass: string | undefined;

    function visit(node: Node) {
        if (ts.isClassDeclaration(node)) {
            currentClass = node.name?.getText(sourceFile) || 'Anonymous';
            // 不再为类本身创建文档项
        } else if (ts.isMethodDeclaration(node)) {
            const declaration = node as MethodDeclaration;
            const jsDoc = extractJSDocComment(declaration, sourceFile);

            items.push({
                name: declaration.name?.getText(sourceFile) || 'Anonymous',
                kind: declaration.kind,
                description: jsDoc,
                parameters: declaration.parameters.map(param => ({
                    name: param.name.getText(sourceFile),
                    type: param.type ? param.type.getText(sourceFile) : 'any',
                    description: extractParamDescription(jsDoc, param.name.getText(sourceFile)),
                    initializer: param.initializer || undefined
                })),
                returnType: declaration.type ? declaration.type.getText(sourceFile) : 'void',
                returnDescription: extractReturnDescription(jsDoc),
                examples: extractExamples(jsDoc),
                notes: extractNotes(jsDoc),
                references: extractReferences(jsDoc),
                node: declaration,
                parentClass: currentClass
            });
        } else if (ts.isFunctionDeclaration(node)) {
            const declaration = node as FunctionDeclaration;
            const jsDoc = extractJSDocComment(declaration, sourceFile);

            items.push({
                name: declaration.name?.getText(sourceFile) || 'Anonymous',
                kind: declaration.kind,
                description: jsDoc,
                parameters: declaration.parameters.map(param => ({
                    name: param.name.getText(sourceFile),
                    type: param.type ? param.type.getText(sourceFile) : 'any',
                    description: extractParamDescription(jsDoc, param.name.getText(sourceFile)),
                    initializer: param.initializer || undefined
                })),
                returnType: declaration.type ? declaration.type.getText(sourceFile) : 'void',
                returnDescription: extractReturnDescription(jsDoc),
                examples: extractExamples(jsDoc),
                notes: extractNotes(jsDoc),
                references: extractReferences(jsDoc),
                node: declaration
            });
        }

        ts.forEachChild(node, visit);
    }

    visit(sourceFile);
    return items;
}

// 辅助函数：从JSDoc中提取参数描述
function extractParamDescription(jsDoc: string, paramName: string): string {
    const paramRegex = new RegExp(`@param\\s+{[^}]+}\\s+${paramName}\\s+([^\\n]+)`, 'i');
    const match = jsDoc.match(paramRegex);
    return match ? match[1].trim() : '';
}

// 辅助函数：从JSDoc中提取返回值描述
function extractReturnDescription(jsDoc: string): string {
    const returnRegex = /@returns?\s+([^@\n]+)/i;
    const match = jsDoc.match(returnRegex);
    return match ? match[1].trim() : '';
}

// 辅助函数：从JSDoc中提取示例
function extractExamples(jsDoc: string): string[] {
    const examples: string[] = [];
    const exampleRegex = /@example\s+([\s\S]+?)(?=@|$)/g;
    let match;

    while ((match = exampleRegex.exec(jsDoc)) !== null) {
        examples.push(match[1].trim());
    }

    return examples;
}

// 辅助函数：从JSDoc中提取注意事项
function extractNotes(jsDoc: string): string[] {
    const notes: string[] = [];
    const noteRegex = /@note\s+([^@\n]+)/g;
    let match;

    while ((match = noteRegex.exec(jsDoc)) !== null) {
        notes.push(match[1].trim());
    }

    return notes;
}

// 辅助函数：从JSDoc中提取相关引用
function extractReferences(jsDoc: string): { name: string; path: string; }[] {
    const references: { name: string; path: string; }[] = [];
    const seeRegex = /@see\s+{([^}]+)}\s+([^@\n]+)/g;
    let match;

    while ((match = seeRegex.exec(jsDoc)) !== null) {
        references.push({
            path: match[1].trim(),
            name: match[2].trim()
        });
    }

    return references;
}

function generateIndexMarkdown(moduleInfo: {
    [key: string]: {
        classes: string[];
        interfaces: string[];
        functions: string[];
        description?: string;
    }
}): string {
    let markdown = `---
sidebar_position: 1
---

# API 参考

本文档提供了所有可用的API参考。每个模块都有其独立的文档页面，详细说明了其功能、接口和用法。

## 模块列表

`;

    // 按类别组织模块
    const categories = {
        '核心': ['main', 'yami'],
        '渲染': ['webgl', 'scene', 'camera'],
        '交互': ['input', 'event', 'command'],
        '媒体': ['audio', 'animation'],
        '界面': ['ui', 'printer'],
        '数据': ['data', 'variable', 'local'],
        '工具': ['util', 'codec', 'filter']
    };

    // 生成分类文档
    for (const [category, modules] of Object.entries(categories)) {
        markdown += `### ${category}模块\n\n`;
        for (const moduleName of modules) {
            if (moduleInfo[moduleName]) {
                const info = moduleInfo[moduleName];
                markdown += `#### [${moduleName}](./${moduleName}/)\n\n`;

                if (info.description) {
                    markdown += `${info.description}\n\n`;
                }

                if (info.classes.length > 0) {
                    markdown += '**类**\n\n';
                    for (const className of info.classes) {
                        markdown += `- [${className}](./${moduleName}/${className})\n`;
                    }
                    markdown += '\n';
                }

                if (info.interfaces.length > 0) {
                    markdown += '**接口**\n\n';
                    for (const interfaceName of info.interfaces) {
                        markdown += `- [${interfaceName}](./${moduleName}/${interfaceName})\n`;
                    }
                    markdown += '\n';
                }

                if (info.functions.length > 0) {
                    markdown += '**函数**\n\n';
                    for (const functionName of info.functions) {
                        markdown += `- [${functionName}](./${moduleName}/${functionName})\n`;
                    }
                    markdown += '\n';
                }
            }
        }
    }

    // 添加其他未分类的模块
    const categorizedModules = new Set(Object.values(categories).flat());
    const uncategorizedModules = Object.keys(moduleInfo).filter(m => !categorizedModules.has(m));

    if (uncategorizedModules.length > 0) {
        markdown += `### 其他模块\n\n`;
        for (const moduleName of uncategorizedModules.sort()) {
            const info = moduleInfo[moduleName];
            markdown += `#### [${moduleName}](./${moduleName}/)\n\n`;

            if (info.description) {
                markdown += `${info.description}\n\n`;
            }

            if (info.classes.length > 0) {
                markdown += '**类**\n\n';
                for (const className of info.classes) {
                    markdown += `- [${className}](./${moduleName}/${className})\n`;
                }
                markdown += '\n';
            }

            if (info.interfaces.length > 0) {
                markdown += '**接口**\n\n';
                for (const interfaceName of info.interfaces) {
                    markdown += `- [${interfaceName}](./${moduleName}/${interfaceName})\n`;
                }
                markdown += '\n';
            }

            if (info.functions.length > 0) {
                markdown += '**函数**\n\n';
                for (const functionName of info.functions) {
                    markdown += `- [${functionName}](./${moduleName}/${functionName})\n`;
                }
                markdown += '\n';
            }
        }
    }

    // 添加版本信息
    const now = new Date();
    const timeZone = 'Asia/Shanghai';
    const formatter = new Intl.DateTimeFormat('zh-CN', {
        timeZone,
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: false
    });

    markdown += `## 版本信息\n\n文档生成时间：${formatter.format(now)}\n`;

    return markdown;
}

// 添加清空目录的函数
function emptyDirectory(directory: string) {
    if (fs.existsSync(directory)) {
        fs.readdirSync(directory).forEach((file: string) => {
            const curPath = path.join(directory, file);
            if (fs.lstatSync(curPath).isDirectory()) {
                // 递归删除子目录
                emptyDirectory(curPath);
                fs.rmdirSync(curPath);
            } else {
                // 删除文件
                fs.unlinkSync(curPath);
            }
        });
    }
}

async function main() {
    const scriptDir = path.join(__dirname);
    const files = fs.readdirSync(scriptDir).filter((file: string) => file.endsWith('.ts') && file !== 'generateDocs.ts');

    // 清空并创建api目录
    const apiDir = path.join(__dirname, '..', 'api');
    emptyDirectory(apiDir);
    if (!fs.existsSync(apiDir)) {
        fs.mkdirSync(apiDir);
    }

    // 创建api目录的_category_.json
    const apiCategoryJson = {
        "label": "API 参考",
        "position": 5,
        "link": {
            "type": "generated-index",
            "title": "API 参考文档"
        }
    };
    fs.writeFileSync(path.join(apiDir, '_category_.json'), JSON.stringify(apiCategoryJson, null, 2));

    // 用于存储所有模块的信息，以便生成索引
    const moduleInfo: {
        [key: string]: {
            methods: { name: string; class?: string }[];
            functions: string[];
            description?: string;
        }
    } = {};

    for (const file of files) {
        console.log(`Processing ${file}...`);
        const moduleName = path.parse(file).name;
        const moduleDir = path.join(apiDir, moduleName);

        // 创建模块目录
        if (!fs.existsSync(moduleDir)) {
            fs.mkdirSync(moduleDir);
        }

        // 创建模块的_category_.json
        const categoryJson = {
            "label": `${moduleName} 模块`,
            "position": 1,
            "link": {
                "type": "generated-index",
                "title": `${moduleName} 模块 API 参考`
            }
        };
        fs.writeFileSync(path.join(moduleDir, '_category_.json'), JSON.stringify(categoryJson, null, 2));

        const filePath = path.join(scriptDir, file);
        const sourceText = fs.readFileSync(filePath, 'utf-8');
        const sourceFile = ts.createSourceFile(
            file,
            sourceText,
            ts.ScriptTarget.Latest,
            true
        );

        const docItems = extractDocItems(sourceFile);
        moduleInfo[moduleName] = {
            methods: [],
            functions: []
        };

        // 按类型分组处理文档项
        for (const item of docItems) {
            const itemName = sanitizeMarkdown(item.name);
            const markdown = generateMarkdown([item], sourceFile);
            const kind = ts.SyntaxKind[item.kind];

            if (kind === 'MethodDeclaration') {
                moduleInfo[moduleName].methods.push({
                    name: itemName,
                    class: item.parentClass
                });
            } else if (kind === 'FunctionDeclaration') {
                moduleInfo[moduleName].functions.push(itemName);
            }

            // 生成独立的文档文件
            const frontMatter = `---
sidebar_position: 1
title: ${itemName}
---

`;
            const docPath = path.join(moduleDir, `${itemName}.md`);
            fs.writeFileSync(docPath, `${frontMatter}${markdown}`);
            console.log(`Generated documentation for ${itemName} at ${docPath}`);
        }
    }

    // 生成主索引文档
    console.log('Generating API index...');
    const indexMarkdown = generateModuleIndexMarkdown(moduleInfo);
    const indexPath = path.join(apiDir, 'index.md');
    fs.writeFileSync(indexPath, indexMarkdown);
    console.log(`Generated API index at ${indexPath}`);
}

// 修改索引生成函数
function generateModuleIndexMarkdown(moduleInfo: {
    [key: string]: {
        methods: { name: string; class?: string }[];
        functions: string[];
        description?: string;
    }
}): string {
    let markdown = `---
sidebar_position: 1
---

# API 参考

本文档提供了所有可用的API参考。每个模块都有其独立的文档页面，详细说明了其功能、接口和用法。

## 模块列表

`;

    // 按类别组织模块
    const categories = {
        '核心': ['main', 'yami'],
        '渲染': ['webgl', 'scene', 'camera'],
        '交互': ['input', 'event', 'command'],
        '媒体': ['audio', 'animation'],
        '界面': ['ui', 'printer'],
        '数据': ['data', 'variable', 'local'],
        '工具': ['util', 'codec', 'filter']
    };

    // 生成分类文档
    for (const [category, modules] of Object.entries(categories)) {
        markdown += `### ${category}模块\n\n`;
        for (const moduleName of modules) {
            if (moduleInfo[moduleName]) {
                const info = moduleInfo[moduleName];
                markdown += `#### [${moduleName}](./${moduleName}/)\n\n`;

                if (info.description) {
                    markdown += `${info.description}\n\n`;
                }

                // 按类分组显示方法
                const methodsByClass = info.methods.reduce((acc, method) => {
                    const className = method.class || '全局方法';
                    if (!acc[className]) {
                        acc[className] = [];
                    }
                    acc[className].push(method.name);
                    return acc;
                }, {} as { [key: string]: string[] });

                // 显示方法
                for (const [className, methods] of Object.entries(methodsByClass)) {
                    markdown += `**${className}**\n\n`;
                    for (const methodName of methods) {
                        markdown += `- [${methodName}](./${moduleName}/${methodName})\n`;
                    }
                    markdown += '\n';
                }

                // 显示独立函数
                if (info.functions.length > 0) {
                    markdown += '**独立函数**\n\n';
                    for (const functionName of info.functions) {
                        markdown += `- [${functionName}](./${moduleName}/${functionName})\n`;
                    }
                    markdown += '\n';
                }
            }
        }
    }

    // 添加其他未分类的模块
    const categorizedModules = new Set(Object.values(categories).flat());
    const uncategorizedModules = Object.keys(moduleInfo).filter(m => !categorizedModules.has(m));

    if (uncategorizedModules.length > 0) {
        markdown += `### 其他模块\n\n`;
        for (const moduleName of uncategorizedModules.sort()) {
            const info = moduleInfo[moduleName];
            markdown += `#### [${moduleName}](./${moduleName}/)\n\n`;

            if (info.description) {
                markdown += `${info.description}\n\n`;
            }

            // 按类分组显示方法
            const methodsByClass = info.methods.reduce((acc, method) => {
                const className = method.class || '全局方法';
                if (!acc[className]) {
                    acc[className] = [];
                }
                acc[className].push(method.name);
                return acc;
            }, {} as { [key: string]: string[] });

            // 显示方法
            for (const [className, methods] of Object.entries(methodsByClass)) {
                markdown += `**${className}**\n\n`;
                for (const methodName of methods) {
                    markdown += `- [${methodName}](./${moduleName}/${methodName})\n`;
                }
                markdown += '\n';
            }

            // 显示独立函数
            if (info.functions.length > 0) {
                markdown += '**独立函数**\n\n';
                for (const functionName of info.functions) {
                    markdown += `- [${functionName}](./${moduleName}/${functionName})\n`;
                }
                markdown += '\n';
            }
        }
    }

    // 添加版本信息
    const now = new Date();
    const timeZone = 'Asia/Shanghai';
    const formatter = new Intl.DateTimeFormat('zh-CN', {
        timeZone,
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: false
    });

    markdown += `## 版本信息\n\n文档生成时间：${formatter.format(now)}\n`;

    return markdown;
}

main().then(() => {
    // 清空并复制到docs/api
    const docsApiDir = path.join(__dirname, '..', '..', '..', '..', '..', 'docs', 'api');
    emptyDirectory(docsApiDir);
    fs.cpSync(
        path.join(__dirname, '..', 'api'),
        docsApiDir,
        { recursive: true }
    );
}).catch(console.error); 