---
sidebar_position: 1
title: continue 继续事件
---

## continue

**类型**: `MethodDeclaration`

**所属类**: `EventTimer`

**定义位置**: [`event.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/event.ts)

### 描述

继续事件

### 返回值

类型: `void`

### 源代码

**位置**: [第 708 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/event.ts#L708)

```typescript
public continue(): void {
    // 恢复更新函数
    this.event.update = EventHandler.prototype.update
  }
```

---



文档生成时间：2026/1/31 13:13:59
