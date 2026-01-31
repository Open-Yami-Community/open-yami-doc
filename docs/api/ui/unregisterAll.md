---
sidebar_position: 1
title: unregisterAll 取消注册所有事件指令
---

## unregisterAll

**类型**: `MethodDeclaration`

**所属类**: `UIElement`

**定义位置**: [`ui.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts)

### 描述

取消注册所有事件指令

### 返回值

类型: `void`

### 源代码

**位置**: [第 1702 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts#L1702)

```typescript
public unregisterAll(): void {
    const map = this.registeredEvents
    for (const key of Object.keys(map)) {
      this.stopEvents(map[key]!)
      delete map[key]
    }
  }
```

---



文档生成时间：2026/1/31 13:13:59
