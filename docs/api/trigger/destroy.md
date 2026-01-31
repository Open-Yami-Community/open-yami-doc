---
sidebar_position: 1
title: destroy 销毁触发器
---

## destroy

**类型**: `MethodDeclaration`

**所属类**: `Trigger`

**定义位置**: [`trigger.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/trigger.ts)

### 描述

销毁触发器

### 返回值

类型: `void`

### 源代码

**位置**: [第 475 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/trigger.ts#L475)

```typescript
public destroy(): void {
    if (!this.destroyed) {
      this.emit('destroy')
      this.destroyed = true
      this.parent?.remove(this)
      this.animation?.destroy()
    }
  }
```

---



文档生成时间：2026/1/31 13:13:59
