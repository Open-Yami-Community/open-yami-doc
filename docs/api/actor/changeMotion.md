---
sidebar_position: 1
title: changeMotion 改变角色动作
---

## changeMotion

**类型**: `MethodDeclaration`

**所属类**: `AnimationController`

**定义位置**: [`actor.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts)

### 描述

改变角色动作

参数 `type`: 动作类型

参数 `motionName`: 新的动作名称

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `type` | `string` | - | - |
| `motionName` | `string` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 3276 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts#L3276)

```typescript
public changeMotion(type: string, motionName: string): void {
		switch (type) {
			case "idle":
				this.idleMotion = motionName;
				if (this.state === "idle") {
					this.startIdle();
				}
				break;
			case "move":
				this.moveMotion = motionName;
				if (this.state === "move") {
					this.startMoving();
				}
				break;
		}
	}
```

---



文档生成时间：2026/1/31 13:13:58
