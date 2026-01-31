---
sidebar_position: 1
title: loadData 加载公共冷却列表数据
---

## loadData

**类型**: `MethodDeclaration`

**所属类**: `CooldownManager`

**定义位置**: [`actor.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts)

### 描述

加载公共冷却列表数据

参数 `cooldowns`:

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `cooldowns` | `Array&lt;CooldownItem&gt;` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 5293 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts#L5293)

```typescript
public loadData(cooldowns: Array<CooldownItem>): void {
		if (cooldowns.length !== 0) {
			// 重构冷却列表
			for (const cooldown of cooldowns) {
				const instance = new CooldownItem(cooldown.key);
				instance.cooldown = cooldown.cooldown;
				instance.duration = cooldown.duration;
				this.keyMap[cooldown.key] = instance;
				this.cooldownList.push(instance);
			}
			this.actor.updaters.add(this);
		}
	}
```

---



文档生成时间：2026/1/31 13:13:58
