---
sidebar_position: 1
title: delete 删除冷却项目
---

## delete

**类型**: `MethodDeclaration`

**所属类**: `CooldownManager`

**定义位置**: [`actor.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts)

### 描述

删除冷却项目

参数 `key`: 冷却键

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `key` | `string` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 5209 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts#L5209)

```typescript
private delete(key: string): void {
		const item = this.keyMap[key];
		if (item) {
			delete this.keyMap[key];
			this.cooldownList.remove(item);
			// 如果列表为空，延迟将本列表从角色的更新器列表中移除
			if (this.cooldownList.length === 0) {
				Callback.push(() => {
					this.actor.updaters.remove(this);
				});
			}
		}
	}
```

---



文档生成时间：2026/1/31 13:13:58
