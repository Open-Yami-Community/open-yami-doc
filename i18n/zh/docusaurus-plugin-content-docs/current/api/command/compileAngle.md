---
sidebar_position: 1
title: compileAngle 编译角度对象
---

## compileAngle

**类型**: `MethodDeclaration`

**所属类**: `CommandFunctionList`

**定义位置**: [`command.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts)

### 描述

编译角度对象

参数 `angle`: 角度访问器

返回值:角度访问器函数(弧度)

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `angle` | `AngleGetter` | - | - |

### 返回值

类型: `(origin\?\: any) =&gt; number`

角度访问器函数(弧度)

### 源代码

**位置**: [第 707 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts#L707)

```typescript
private compileAngle(angle: AngleGetter): (origin?: any) => number {
		switch (angle.type) {
			case "position": {
				const getPoint = Command.compilePosition(angle.position);
				return origin => {
					const point = getPoint();
					if (point) {
						const distY = point.y - origin.y;
						const distX = point.x - origin.x;
						return Math.atan2(distY, distX);
					}
					return origin.angle ?? 0;
				};
			}
			case "absolute": {
				const getDegrees = Command.compileNumber(angle.degrees);
				return () => Math.radians(getDegrees());
			}
			case "relative": {
				const getDegrees = Command.compileNumber(angle.degrees);
				return origin => (origin.angle ?? 0) + Math.radians(getDegrees());
			}
			case "direction": {
				const radians = Math.radians(angle.degrees);
				return origin => {
					const animation = origin.animation;
					if (animation) {
						return animation.getDirectionAngle() + radians;
					}
					return radians;
				};
			}
			case "random": {
				const radians = Math.PI * 2;
				return () => Math.random() * radians;
			}
		}
	}
```

---



文档生成时间：2026/1/31 13:13:58
