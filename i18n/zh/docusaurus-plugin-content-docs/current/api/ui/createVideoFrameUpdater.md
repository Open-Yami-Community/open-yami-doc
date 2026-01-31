---
sidebar_position: 1
title: createVideoFrameUpdater 创建视频帧更新器
---

## createVideoFrameUpdater

**类型**: `MethodDeclaration`

**所属类**: `VideoElement`

**定义位置**: [`ui.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts)

### 描述

创建视频帧更新器

### 返回值

类型: `void`

### 源代码

**位置**: [第 5431 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts#L5431)

```typescript
private createVideoFrameUpdater(): void {
    const {player, texture} = this
    if ('requestVideoFrameCallback' in player) {
      // 优先使用请求视频帧回调的方法
      const update = () => {
        if (texture.destroyed) return
        if (!texture.complete) {
          texture.complete = true
        }
        if (texture.width !== player.videoWidth || texture.height !== player.videoHeight) {
          texture.resize(player.videoWidth, player.videoHeight)
        }
        GL.bindTexture(GL.TEXTURE_2D, texture.base.glTexture)
        GL.texImage2D(GL.TEXTURE_2D, 0, GL.RGBA, texture.width, texture.height, 0, GL.RGBA, GL.UNSIGNED_BYTE, player)
        player.requestVideoFrameCallback(update)
      }
      player.requestVideoFrameCallback(update)
    } else {
      // 兼容模式：添加更新器
      const vplayer = player as HTMLVideoPlayer
      const fps = 60
      const interval = 1000 / fps
      let elapsed = 0
      this.updaters.add({
        update: () => {
          elapsed += Time.rawDeltaTime
          if (elapsed >= interval) {
            elapsed %= interval
            // 当视频已加载时，上传视频画面到纹理
            if (vplayer.readyState === 4) {
              if (texture.destroyed) return
              if (!texture.complete) {
                texture.complete = true
              }
              if (texture.width !== vplayer.videoWidth || texture.height !== vplayer.videoHeight) {
                texture.resize(vplayer.videoWidth, vplayer.videoHeight)
              }
              GL.bindTexture(GL.TEXTURE_2D, texture.base.glTexture)
              GL.texImage2D(GL.TEXTURE_2D, 0, GL.RGBA, texture.width, texture.height, 0, GL.RGBA, GL.UNSIGNED_BYTE, player)
            }
          }
        }
      })
    }
  }
```

---



文档生成时间：2026/1/31 13:13:59
