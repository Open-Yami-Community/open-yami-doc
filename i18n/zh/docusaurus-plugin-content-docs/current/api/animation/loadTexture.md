---
sidebar_position: 1
title: loadTexture 加载粒子纹理
---

## loadTexture

**类型**: `MethodDeclaration`

**所属类**: `ParticleLayer`

**定义位置**: [`animation.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/animation.ts)

### 描述

加载粒子纹理

### 返回值

类型: `void`

### 源代码

**位置**: [第 1800 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/animation.ts#L1800)

```typescript
private loadTexture(): void {
    const guid = this.data.image
    if (guid) {
      const texture = new ImageTexture(guid)
      // 如果纹理已完成加载，设置好参数直接返回
      if (texture.complete) {
        this.texture = texture
        this.calculateElementSize()
        return
      }
      this.texture = texture
      texture.on('load', () => {
        if (this.texture === texture) {
          // 纹理加载结束后如果粒子层还存在
          // 设置参数，并恢复默认draw函数
          this.texture = texture
          this.calculateElementSize()
          // @ts-ignore
          delete this.draw
        } else {
          // 如果粒子层已销毁，则销毁纹理
          texture.destroy()
        }
      })
    }
    // 加载完成前禁用draw函数
    this.draw = Function.empty
  }
```

---



文档生成时间：2026/1/31 13:13:58
