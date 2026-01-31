---
sidebar_position: 1
title: setPartyMember 设置队伍成员
---

## setPartyMember

**类型**: `MethodDeclaration`

**所属类**: `CommandFunctionList`

**定义位置**: [`command.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts)

### 描述

设置队伍成员

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `\{ operation, actor, \}` | `\{
		operation\: "add" \| "remove";
		actor\: ActorGetter;
	\}` | - | - |

### 返回值

类型: `CommandFunction`

### 源代码

**位置**: [第 6874 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts#L6874)

```typescript
protected setPartyMember({
		operation,
		actor,
	}: {
		operation: "add" | "remove";
		actor: ActorGetter;
	}): CommandFunction {
		const getActor = Command.compileActor(actor);
		switch (operation) {
			case "add":
				return () => {
					const actor = getActor();
					if (actor instanceof GlobalActor) {
						Party.addMember(actor);
					}
					return true;
				};
			case "remove":
				return () => {
					const actor = getActor();
					if (actor instanceof GlobalActor) {
						Party.removeMember(actor);
					}
					return true;
				};
		}
	}
```

---



文档生成时间：2026/1/31 13:13:58
