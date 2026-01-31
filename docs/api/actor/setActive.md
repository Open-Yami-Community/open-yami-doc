---
sidebar_position: 1
title: setActive 设置角色的激活状态
---

## setActive

**类型**: `MethodDeclaration`

**所属类**: `Actor`

**定义位置**: [`actor.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts)

### 描述

设置角色的激活状态

参数 `active`: 如果禁用，角色将不再更新事件和脚本

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `active` | `boolean` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 1089 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts#L1089)

```typescript
public setActive(active: boolean): void {
		if (this.active !== active) {
			this.active = active;
			// 如果是未激活状态，重置目标列表
			if (!active) {
				this.target.reset();
			}
		}
	}
```

---



文档生成时间：2026/1/31 13:13:58
