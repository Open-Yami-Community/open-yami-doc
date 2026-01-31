---
sidebar_position: 1
title: loadBase64 加载Base64图像
---

## loadBase64

**类型**: `MethodDeclaration`

**所属类**: `ImageElement`

**定义位置**: [`ui.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts)

### 描述

加载Base64图像

参数 `base64`: Base64编码字符串

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `base64` | `string` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 1857 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts#L1857)

```typescript
public loadBase64(base64: string): void {
    if (GL.textureManager.images[base64]) {
      this.image = base64
    } else {
      const image = new Image()
      image.onload = () => {
        image.guid = base64
        this.image = image
      }
      image.src = base64
    }
  }
```

---



文档生成时间：2026/1/31 13:13:59
