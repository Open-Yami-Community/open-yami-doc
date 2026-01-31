---
sidebar_position: 1
title: resize 调整纹理大小
---

## resize

**类型**: `MethodDeclaration`

**所属类**: `Texture`

**定义位置**: [`webgl.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/webgl.ts)

### 描述

调整纹理大小

参数 `width`: 纹理宽度

参数 `height`: 纹理高度

返回值:当前纹理

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `width` | `number` | - | - |
| `height` | `number` | - | - |

### 返回值

类型: `Texture`

当前纹理

### 源代码

**位置**: [第 2020 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/webgl.ts#L2020)

```typescript
public resize(width: number, height: number): Texture {
    const {gl, base} = this
    const {format} = base
    base.width = Math.min(width, gl.maxTexSize)
    base.height = Math.min(height, gl.maxTexSize)
    gl.bindTexture(gl.TEXTURE_2D, base.glTexture)
    // 此处调整纹理大小后不立即写入数据会被Firefox警告，若只是为了消除警告而上传数据代价很大，不管它
    gl.texImage2D(gl.TEXTURE_2D, 0, format, base.width, base.height, 0, format, gl.UNSIGNED_BYTE, null)
    return this.clip(0, 0, base.width, base.height)
  }
```

---



文档生成时间：2026/1/31 13:13:59
