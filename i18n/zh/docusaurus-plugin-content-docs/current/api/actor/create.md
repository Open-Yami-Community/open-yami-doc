---
sidebar_position: 1
title: create 创建冷却项目
---

## create

**类型**: `MethodDeclaration`

**所属类**: `CooldownManager`

**定义位置**: [`actor.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts)

### 描述

创建冷却项目

参数 `key`: 冷却键

返回值:冷却项实例

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `key` | `string` | - | - |

### 返回值

类型: `CooldownItem`

冷却项实例

### 源代码

**位置**: [第 5187 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts#L5187)

```typescript
private create(key: string): CooldownItem {
		let item = this.keyMap[key];
		// 如果不存在冷却项目，则新建一个
		if (item === undefined) {
			// 如果列表为空，延迟将本列表添加到角色的更新器列表中
			if (this.cooldownList.length === 0) {
				Callback.push(() => {
					this.actor.updaters.add(this);
				});
			}
			// 创建冷却项目
			item = new CooldownItem(key);
			this.keyMap[key] = item;
			this.cooldownList.append(item);
		}
		return item;
	}
```

---



文档生成时间：2026/1/31 13:13:58
