---
sidebar_position: 1
title: loadTextures 加载所有图块纹理
---

## loadTextures

**类型**: `MethodDeclaration`

**所属类**: `SceneTilemap`

**定义位置**: [`scene.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/scene.ts)

### 描述

加载所有图块纹理

### 返回值

类型: `Promise&lt;void&gt;`

### 源代码

**位置**: [第 2830 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/scene.ts#L2830)

```typescript
private async loadTextures(): Promise<void> {
    await new Promise(resolve => {
      const tiles = this.tiles
      const length = tiles.length
      const textures = this.textures
      // 如果是非空图块，同步加载图块组纹理
      for (let i = 0; i < length; i++) {
        const tile = tiles[i]
        if (tile !== 0) {
          this.loadTexture(tile)
        }
      }
      // 不存在图块纹理，立即返回
      const list = Object.values(textures) as Array<BaseTexture>
      if (list.length === 0) {
        return resolve(void 0)
      }
      // 等待加载所有图块纹理
      let loaded = 0
      const callback = () => {
        if (++loaded === list.length) {
          // 全部纹理加载后完成Promise
          if (this.textures === textures) {
            this.loaded = true
            return resolve(void 0)
          }
        }
      }
      for (const texture of list) {
        // 侦听纹理加载完毕事件
        texture.on('load', callback)
      }
    })
  }
```

---



文档生成时间：2026/1/31 13:13:59
