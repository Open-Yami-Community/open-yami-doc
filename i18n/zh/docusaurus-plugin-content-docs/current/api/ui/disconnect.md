---
sidebar_position: 1
title: disconnect 断开视频元素
---

## disconnect

**类型**: `MethodDeclaration`

**所属类**: `VideoElement`

**定义位置**: [`ui.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts)

### 描述

断开视频元素

### 返回值

类型: `void`

### 源代码

**位置**: [第 5499 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts#L5499)

```typescript
protected disconnect(): void {
    super.disconnect()
    this.player.pause()
    document.off('visibilitychange', this._onSwitch)
  }
```

---



文档生成时间：2026/1/31 13:13:59
