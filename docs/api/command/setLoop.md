---
sidebar_position: 1
title: setLoop 设置循环
---

## setLoop

**类型**: `MethodDeclaration`

**所属类**: `CommandFunctionList`

**定义位置**: [`command.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts)

### 描述

设置循环

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `\{ type, loop, \}` | `\{
		type\: Exclude&lt;AudioType, "se"&gt;;
		loop\: boolean;
	\}` | - | - |

### 返回值

类型: `CommandFunction`

### 源代码

**位置**: [第 6242 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts#L6242)

```typescript
protected setLoop({
		type,
		loop,
	}: {
		type: Exclude<AudioType, "se">;
		loop: boolean;
	}): CommandFunction {
		return () => {
			AudioManager[type].setLoop(loop);
			return true;
		};
	}
```

---



文档生成时间：2026/1/31 13:13:58
