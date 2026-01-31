---
sidebar_position: 1
title: loadTexture 加载图块纹理
---

## loadTexture

**类型**: `MethodDeclaration`

**所属类**: `SceneTilemap`

**定义位置**: [`scene.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/scene.ts)

### 描述

加载图块纹理

参数 `tile`: 图块ID

参数 `sync`: 是否同步加载纹理

参数 `callback`: 回调函数

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `tile` | `number` | - | - |
| `callback` | `CallbackFunction` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 2871 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/scene.ts#L2871)

```typescript
private loadTexture(tile: number, callback?: CallbackFunction): void {
    const tileData = this.tileData[tile & 0xffffff00]
    if (tileData) {
      let texture
      switch (tileData.type) {
        case 'normal': {
          const guid = tileData.tileset.image
          texture = this.textures[guid]
          if (guid && texture === undefined) {
            texture = GL.createImageTexture(guid, {magFilter: GL.NEAREST})
            this.textures[guid] = texture
          }
          break
        }
        case 'auto': {
          const guid = tileData.autoTile.image
          texture = this.textures[guid]
          if (guid && texture === undefined) {
            texture = GL.createImageTexture(guid, {magFilter: GL.NEAREST})
            this.textures[guid] = texture
          }
          break
        }
      }
      if (callback) {
        texture?.on('load', callback)
      }
    }
  }
```

---



文档生成时间：2026/1/31 13:13:59
