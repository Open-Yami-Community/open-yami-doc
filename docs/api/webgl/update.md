---
sidebar_position: 1
title: update 更新纹理
---

## update

**类型**: `MethodDeclaration`

**所属类**: `TextureManager`

**定义位置**: [`webgl.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/webgl.ts)

### 描述

更新纹理

### 返回值

类型: `void`

### 源代码

**位置**: [第 2346 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/webgl.ts#L2346)

```typescript
public update(): void {
    const {gl, map, images} = this
    for (const texture of Object.values(images) as Array<BaseTexture>) {
      // 删除不再引用的图像纹理
      if (texture.refCount === 0) {
        gl.deleteTexture(texture.glTexture)
        delete images[texture.guid]
        delete map[texture.index]
        this.count--
        if (this.pointer > texture.index) {
          this.pointer = texture.index
        }
      }
    }
  }
```

---



文档生成时间：2026/1/31 13:13:59
