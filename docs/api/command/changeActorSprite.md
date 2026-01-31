---
sidebar_position: 1
title: changeActorSprite 改变角色精灵图(动画ID参数只是在编辑器中用来辅助获取精灵ID)
---

## changeActorSprite

**类型**: `MethodDeclaration`

**所属类**: `CommandFunctionList`

**定义位置**: [`command.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts)

### 描述

改变角色精灵图(动画ID参数只是在编辑器中用来辅助获取精灵ID)

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `\{ actor, animationId, spriteId, image, \}` | `\{
		actor\: ActorGetter;
		animationId\: string;
		spriteId\: string;
		image\: string;
	\}` | - | - |

### 返回值

类型: `CommandFunction`

### 源代码

**位置**: [第 7156 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts#L7156)

```typescript
protected changeActorSprite({
		actor,
		animationId,
		spriteId,
		image,
	}: {
		actor: ActorGetter;
		animationId: string;
		spriteId: string;
		image: string;
	}): CommandFunction {
		const getActor = Command.compileActor(actor);
		return () => {
			getActor()?.setSprite(spriteId, image);
			return true;
		};
	}
```

---



文档生成时间：2026/1/31 13:13:58
