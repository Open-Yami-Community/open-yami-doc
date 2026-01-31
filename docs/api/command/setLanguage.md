---
sidebar_position: 1
title: setLanguage 设置语言
---

## setLanguage

**类型**: `MethodDeclaration`

**所属类**: `CommandFunctionList`

**定义位置**: [`command.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts)

### 描述

设置语言

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `\{ language \}` | `\{ language\: string \}` | - | - |

### 返回值

类型: `CommandFunction`

### 源代码

**位置**: [第 8968 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts#L8968)

```typescript
protected setLanguage({ language }: { language: string }): CommandFunction {
		return () => {
			Local.setLanguage(language);
			return true;
		};
	}
```

---



文档生成时间：2026/1/31 13:13:58
