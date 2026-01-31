---
sidebar_position: 1
title: translate 角色朝指定角度位移一段距离
---

## translate

**类型**: `MethodDeclaration`

**所属类**: `Actor`

**定义位置**: [`actor.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts)

### 描述

角色朝指定角度位移一段距离

参数 `angle`: 位移角度(弧度)

参数 `distance`: 位移距离(单位:图块)

参数 `easingId`: 过渡曲线ID

参数 `duration`: 持续时间(毫秒)

参数 `key`: 位移更新器的键(指定以避免冲突)

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `angle` | `number` | - | - |
| `distance` | `number` | - | - |
| `easingId` | `string` | - | "" |
| `duration` | `number` | - | n0 |
| `key` | `string` | - | "translate" |

### 返回值

类型: `void`

### 源代码

**位置**: [第 690 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts#L690)

```typescript
public translate(
		angle: number,
		distance: number,
		easingId: string = "",
		duration: number = 0,
		key: string = "translate"
	): void {
		const distX = distance * Math.cos(angle);
		const distY = distance * Math.sin(angle);
		if (duration > 0) {
			// 创建过渡更新器，使用set方法:
			// 如果已有同名更新器，则替换
			let elapsed = 0;
			let lastTime = 0;
			const easing = Easing.get(easingId);
			this.updaters.set(key, {
				protected: true,
				update: deltaTime => {
					// 更新中不断设置角色位置
					elapsed += deltaTime;
					const time = easing.get(elapsed / duration);
					const increase = time - lastTime;
					const x = distX * increase;
					const y = distY * increase;
					this.move(x, y);
					lastTime = time;
					// 过渡结束，延迟删除更新器
					if (elapsed >= duration) {
						this.updaters.deleteDelay(key);
					}
				},
			});
		} else {
			// 立即执行
			this.updaters.deleteDelay(key);
			const x = this.x + distX;
			const y = this.y + distY;
			this.setPosition(x, y);
		}
	}
```

---



文档生成时间：2026/1/31 13:13:57
