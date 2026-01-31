---
sidebar_position: 1
title: push 推入事件指令的执行状态
---

## push

**类型**: `MethodDeclaration`

**所属类**: `CommandStack`

**定义位置**: [`command.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts)

### 描述

推入事件指令的执行状态

参数 `commands`: 事件指令列表

参数 `index`: 事件指令索引

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `commands` | `CommandFunctionList` | - | - |
| `index` | `number` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 16 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts#L16)

```typescript
public push(commands: CommandFunctionList, index: number): void {
		this.commandArray[this.index] = commands;
		this.indexArray[this.index] = index;
		this.index++;
	}
```

---



文档生成时间：2026/1/31 13:13:58
