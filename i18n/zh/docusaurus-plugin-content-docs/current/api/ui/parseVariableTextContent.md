---
sidebar_position: 1
title: parseVariableTextContent 解析变量文本内容
---

## parseVariableTextContent

**类型**: `MethodDeclaration`

**所属类**: `TextElement`

**定义位置**: [`ui.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts)

### 描述

解析变量文本内容

参数 `content`: 输入文本内容

返回值:替换全局变量后的输出文本内容

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `content` | `string` | - | - |

### 返回值

类型: `string`

替换全局变量后的输出文本内容

### 源代码

**位置**: [第 2227 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts#L2227)

```typescript
private static parseVariableTextContent(content: string): string {
    return content.replace(this.globalVarRegexp, this.variableTextReplacer)
  }
```

---



文档生成时间：2026/1/31 13:13:59
