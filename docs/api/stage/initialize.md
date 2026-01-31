---
sidebar_position: 1
title: initialize 初始化舞台
---

## initialize

**类型**: `MethodDeclaration`

**定义位置**: [`stage.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/stage.ts)

### 描述

初始化舞台

### 返回值

类型: `void`

### 源代码

**位置**: [第 10 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/stage.ts#L10)

```typescript
public initialize(): void {
    // 设置网页标题
    const title = document.createElement('title')
    title.textContent = Data.config.window.title
    document.head.appendChild(title)

    // 设置body样式
    document.body.style.margin = '0'
    document.body.style.overflow = 'hidden'
    document.body.style.touchAction = 'none'

    // 设置初始分辨率
    this.width = Data.globalData.canvasWidth
    this.height = Data.globalData.canvasHeight

    // 调整大小
    this.resize()

    // 侦听事件
    window.on('resize', this.resize)
  }
```

---



文档生成时间：2026/1/31 13:13:59
