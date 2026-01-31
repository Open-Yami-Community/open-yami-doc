---
sidebar_position: 1
title: autorun 自动执行
---

## autorun

**类型**: `MethodDeclaration`

**所属类**: `Trigger`

**定义位置**: [`trigger.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/trigger.ts)

### 描述

自动执行

### 返回值

类型: `void`

### 源代码

**位置**: [第 467 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/trigger.ts#L467)

```typescript
public autorun(): void {
    if (this.started === false) {
      this.started = true
      this.emit('autorun')
    }
  }
```

---



文档生成时间：2026/1/31 13:13:59
