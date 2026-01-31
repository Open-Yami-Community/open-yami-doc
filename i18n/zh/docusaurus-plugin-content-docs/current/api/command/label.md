---
sidebar_position: 1
title: label 插入标签
---

## label

**类型**: `MethodDeclaration`

**所属类**: `CommandFunctionList`

**定义位置**: [`command.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts)

### 描述

插入标签

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `\{ name \}` | `\{ name\: string \}` | - | - |

### 返回值

类型: `null`

### 源代码

**位置**: [第 4592 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts#L4592)

```typescript
protected label({ name }: { name: string }): null {
		const { commands, index } = this.stack.get();
		this.labels[name] = { commands, index };
		return null;
	}
```

---



文档生成时间：2026/1/31 13:13:58
