---
sidebar_position: 1
title: destroy 销毁所有动画组件
---

## destroy

**类型**: `MethodDeclaration`

**所属类**: `AnimationManager`

**定义位置**: [`actor.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts)

### 描述

销毁所有动画组件

### 返回值

类型: `void`

### 源代码

**位置**: [第 3140 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts#L3140)

```typescript
public destroy(): void {
		for (const animation of this.list) {
			// 完成动画结束回调并销毁动画
			animation.finish();
			animation.destroy();
		}
	}
```

---



文档生成时间：2026/1/31 13:13:58
