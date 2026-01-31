---
sidebar_position: 1
title: createShadowImage 创建影子图像元素
---

## createShadowImage

**类型**: `MethodDeclaration`

**所属类**: `ButtonElement`

**定义位置**: [`ui.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts)

### 描述

创建影子图像元素

参数 `data`: 按钮元素数据

返回值:影子图像元素

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `data` | `ButtonElementData` | - | - |

### 返回值

类型: `ImageElement`

影子图像元素

### 源代码

**位置**: [第 4850 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts#L4850)

```typescript
private createShadowImage(data: ButtonElementData): ImageElement {
    const {imageData} = ButtonElement
    imageData.image = data.normalImage
    imageData.display = data.display
    imageData.flip = data.flip
    imageData.clip = data.normalClip
    imageData.tint = data.normalTint
    imageData.border = data.border
    const element = new ImageElement(imageData)
    element.parent = this
    element.connected = true
    this.updaters.add(element.updaters)
    return element
  }
```

---



文档生成时间：2026/1/31 13:13:59
