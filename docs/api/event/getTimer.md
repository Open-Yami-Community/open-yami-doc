---
sidebar_position: 1
title: getTimer 获取事件计时器
---

## getTimer

**类型**: `MethodDeclaration`

**所属类**: `EventHandler`

**定义位置**: [`event.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/event.ts)

### 描述

获取事件计时器

返回值:事件计时器

### 返回值

类型: `EventTimer`

事件计时器

### 源代码

**位置**: [第 521 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/event.ts#L521)

```typescript
public getTimer(): EventTimer {
    return this.timer ?? (this.timer = new EventTimer(this))
  }
```

---



文档生成时间：2026/1/31 13:13:59
