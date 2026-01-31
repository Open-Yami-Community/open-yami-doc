---
sidebar_position: 1
title: rotate 角色旋转指定的角度
---

## rotate

**类型**: `MethodDeclaration`

**所属类**: `Actor`

**定义位置**: [`actor.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts)

### 描述

角色旋转指定的角度

参数 `angle`: 旋转角度(弧度)

参数 `easingId`: 过渡曲线ID

参数 `duration`: 持续时间(毫秒)

参数 `key`: 旋转更新器的键(指定以避免冲突)

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `angle` | `number` | - | - |
| `easingId` | `string` | - | "" |
| `duration` | `number` | - | n0 |
| `key` | `string` | - | "rotate" |

### 返回值

类型: `void`

### 源代码

**位置**: [第 797 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts#L797)

```typescript
public rotate(
		angle: number,
		easingId: string = "",
		duration: number = 0,
		key: string = "rotate"
	): void {
		if (duration > 0) {
			// 创建过渡更新器，使用set方法:
			// 如果已有同名更新器，则替换
			let elapsed = 0;
			let lastTime = 0;
			const easing = Easing.get(easingId);
			this.updaters.set(key, {
				protected: true,
				update: deltaTime => {
					// 更新中不断设置角色角度
					elapsed += deltaTime;
					const time = easing.get(elapsed / duration);
					this.updateAngle(this.angle + angle * (time - lastTime));
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
			this.updateAngle(this.angle + angle);
		}
	}
```

---



文档生成时间：2026/1/31 13:13:57
