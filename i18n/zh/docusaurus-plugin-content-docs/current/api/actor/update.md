---
sidebar_position: 1
title: update 更新公共冷却时间
---

## update

**类型**: `MethodDeclaration`

**所属类**: `CooldownManager`

**定义位置**: [`actor.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts)

### 描述

更新公共冷却时间

参数 `deltaTime`: 增量时间(毫秒)

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `deltaTime` | `number` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 5269 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts#L5269)

```typescript
public update(deltaTime: number): void {
		const { cooldownList } = this;
		let i = cooldownList.length;
		// 逆序遍历冷却列表
		while (--i >= 0) {
			// 如果冷却结束，删除键
			if ((cooldownList[i].cooldown -= deltaTime) <= 0) {
				this.delete(cooldownList[i].key);
			}
		}
	}
```

---



文档生成时间：2026/1/31 13:13:58
