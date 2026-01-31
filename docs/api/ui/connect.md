---
sidebar_position: 1
title: connect 连接视频元素
---

## connect

**类型**: `MethodDeclaration`

**所属类**: `VideoElement`

**定义位置**: [`ui.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts)

### 描述

连接视频元素

### 返回值

类型: `void`

### 源代码

**位置**: [第 5492 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts#L5492)

```typescript
protected connect(): void {
    super.connect()
    this.player.play().catch(error => {})
    document.on('visibilitychange', this._onSwitch)
  }
```

---



文档生成时间：2026/1/31 13:13:59
