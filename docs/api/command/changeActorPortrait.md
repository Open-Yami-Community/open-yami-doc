---
sidebar_position: 1
title: changeActorPortrait 改变角色头像
---

## changeActorPortrait

**类型**: `MethodDeclaration`

**所属类**: `CommandFunctionList`

**定义位置**: [`command.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts)

### 描述

改变角色头像

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `\{ actor, mode, portrait, clip, \}` | `\{
		actor\: ActorGetter;
		mode\: "full" \| "portrait" \| "clip";
		portrait\?\: string;
		clip\?\: ImageClip;
	\}` | - | - |

### 返回值

类型: `CommandFunction`

### 源代码

**位置**: [第 7108 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts#L7108)

```typescript
protected changeActorPortrait({
		actor,
		mode,
		portrait,
		clip,
	}: {
		actor: ActorGetter;
		mode: "full" | "portrait" | "clip";
		portrait?: string;
		clip?: ImageClip;
	}): CommandFunction {
		const getActor = Command.compileActor(actor);
		return () => {
			const actor = getActor();
			if (actor) {
				switch (mode) {
					case "full":
						actor.portrait = portrait!;
						Array.fill(actor.clip, clip!);
						break;
					case "portrait":
						actor.portrait = portrait!;
						break;
					case "clip":
						Array.fill(actor.clip, clip!);
						break;
				}
			}
			return true;
		};
	}
```

---



文档生成时间：2026/1/31 13:13:58
