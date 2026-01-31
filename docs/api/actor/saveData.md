---
sidebar_position: 1
title: saveData 保存公共冷却列表数据
---

## saveData

**类型**: `MethodDeclaration`

**所属类**: `CooldownManager`

**定义位置**: [`actor.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts)

### 描述

保存公共冷却列表数据

返回值:冷却存档数据列表

### 返回值

类型: `Array&lt;CooldownItem&gt;`

冷却存档数据列表

### 源代码

**位置**: [第 5285 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts#L5285)

```typescript
public saveData(): Array<CooldownItem> {
		return this.cooldownList;
	}
```

---



文档生成时间：2026/1/31 13:13:58
