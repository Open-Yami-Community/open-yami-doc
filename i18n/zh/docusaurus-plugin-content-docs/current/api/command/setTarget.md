---
sidebar_position: 1
title: setTarget 设置目标
---

## setTarget

**类型**: `MethodDeclaration`

**所属类**: `CommandFunctionList`

**定义位置**: [`command.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts)

### 描述

设置目标

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `\{ actor \}` | `\{ actor\: ActorGetter \}` | - | - |

### 返回值

类型: `CommandFunction`

### 源代码

**位置**: [第 7436 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts#L7436)

```typescript
protected setTarget({ actor }: { actor: ActorGetter }): CommandFunction {
		const getActor = Command.compileActor(actor);
		return () => {
			CurrentEvent.targetActor = getActor();
			return true;
		};
	}
```

---



文档生成时间：2026/1/31 13:13:58
