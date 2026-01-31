---
sidebar_position: 1
title: setTime 设置角色状态的时间
---

## setTime

**类型**: `MethodDeclaration`

**所属类**: `State`

**定义位置**: [`actor.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts)

### 描述

设置角色状态的时间

参数 `time`: 持续时间(毫秒)

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `time` | `number` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 4004 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts#L4004)

```typescript
public setTime(time: number): void {
		if (time >= 0) {
			this.currentTime = time;
			this.duration = time;
		}
	}
```

---



文档生成时间：2026/1/31 13:13:58
