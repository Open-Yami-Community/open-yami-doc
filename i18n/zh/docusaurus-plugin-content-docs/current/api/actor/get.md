---
sidebar_position: 1
title: get 获取冷却项目
---

## get

**类型**: `MethodDeclaration`

**所属类**: `CooldownManager`

**定义位置**: [`actor.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts)

### 描述

获取冷却项目

参数 `key`: 冷却键

返回值:冷却项实例

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `key` | `string` | - | - |

### 返回值

类型: `CooldownItem \| undefined`

冷却项实例

### 源代码

**位置**: [第 5178 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts#L5178)

```typescript
public get(key: string): CooldownItem | undefined {
		return this.keyMap[key];
	}
```

---



文档生成时间：2026/1/31 13:13:58
