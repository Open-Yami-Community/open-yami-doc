---
sidebar_position: 1
title: transferToScene 转移到场景中的指定位置
---

## transferToScene

**类型**: `MethodDeclaration`

**所属类**: `GlobalActor`

**定义位置**: [`actor.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts)

### 描述

转移到场景中的指定位置

参数 `x`: 场景坐标X

参数 `y`: 场景坐标Y

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `x` | `number` | - | - |
| `y` | `number` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 1401 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts#L1401)

```typescript
public transferToScene(x: number, y: number): void {
		if (Scene.binding && !this.destroyed) {
			this.parent?.remove(this);
			this.target.reset();
			this.setPosition(x, y);
			this.updateSceneActorData();
			Scene.actor.append(this);
		}
	}
```

---



文档生成时间：2026/1/31 13:13:58
