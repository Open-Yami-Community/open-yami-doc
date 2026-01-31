---
sidebar_position: 1
title: setImageClip 设置图像剪辑
---

## setImageClip

**类型**: `MethodDeclaration`

**所属类**: `ImageElement`

**定义位置**: [`ui.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts)

### 描述

设置图像剪辑

参数 `image`: 图像文件ID或HTML图像元素

参数 `clip`: 图像裁剪区域

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `image` | `string \| HTMLImageElement` | - | - |
| `clip` | `ImageClip` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 1875 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts#L1875)

```typescript
public setImageClip(image: string | HTMLImageElement, clip: ImageClip): void {
    this.image = image
    this.display = 'clip'
    this.clip[0] = clip[0]
    this.clip[1] = clip[1]
    this.clip[2] = clip[2]
    this.clip[3] = clip[3]
  }
```

---



文档生成时间：2026/1/31 13:13:59
