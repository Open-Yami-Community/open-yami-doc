---
sidebar_position: 1
title: pop 弹出事件指令的执行状态
---

## pop

**类型**: `MethodDeclaration`

**所属类**: `CommandStack`

**定义位置**: [`command.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts)

### 描述

弹出事件指令的执行状态

返回值:事件指令状态包装器

### 返回值

类型: `CommandStackWrap \| null`

事件指令状态包装器

### 源代码

**位置**: [第 26 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts#L26)

```typescript
public pop(): CommandStackWrap | null {
		if (this.index !== 0) {
			this.index--;
			CommandStack.wrap[0] = this.commandArray[this.index];
			CommandStack.wrap[1] = this.indexArray[this.index];
			return CommandStack.wrap;
		}
		return null;
	}
```

---



文档生成时间：2026/1/31 13:13:58
