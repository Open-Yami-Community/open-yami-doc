---
sidebar_position: 1
title: resize 重新调整大小事件
---

## resize

**类型**: `MethodDeclaration`

**定义位置**: [`stage.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/stage.ts)

### 描述

重新调整大小事件

### 返回值

类型: `void`

### 源代码

**位置**: [第 110 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/stage.ts#L110)

```typescript
private resize(): void {
    const {width, height} = Stage
    GL.resize(width, height)
    switch (Stats.isMobile()) {
      case false:
        // 个人电脑模式
        Stage.scaleCanvas(width, height)
        break
      case true:
        // 移动设备模式：如果最小分辨率宽高比和窗口宽高比同时>=1或同时<1，则不用旋转
        if ((width >= height) === (window.innerWidth >= window.innerHeight)) {
          // 不旋转
          Stage.scaleCanvas(width, height)
        } else {
          // 旋转90度
          Stage.rotateAndScaleCanvas(width, height)
        }
        break
    }
  }
```

---



文档生成时间：2026/1/31 13:13:59
