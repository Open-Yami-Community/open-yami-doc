---
sidebar_position: 1
title: get 获取上一次入栈的指令上下文
---

## get

**类型**: `MethodDeclaration`

**所属类**: `CompileTimeCommandStack`

**定义位置**: [`command.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts)

### 描述

获取上一次入栈的指令上下文

### 返回值

类型: `void`

### 源代码

**位置**: [第 44 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts#L44)

```typescript
public get() {
		return this[this.length - 1];
	}
```

---



文档生成时间：2026/1/31 13:13:58
