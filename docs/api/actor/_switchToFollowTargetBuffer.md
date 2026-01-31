---
sidebar_position: 1
title: _switchToFollowTargetBuffer 切换到跟随缓冲模式，如果是跟随一次则停止移动
---

## _switchToFollowTargetBuffer

**类型**: `MethodDeclaration`

**所属类**: `ActorNavigator`

**定义位置**: [`actor.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts)

### 描述

切换到跟随缓冲模式，如果是跟随一次则停止移动

### 返回值

类型: `void`

### 源代码

**位置**: [第 2484 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts#L2484)

```typescript
private _switchToFollowTargetBuffer(): void {
		if (this.followOnce) {
			this.stopMoving();
		} else {
			this.update = this._followTargetBuffer;
			this.animBufferTime = 100;
		}
	}
```

---



文档生成时间：2026/1/31 13:13:58
