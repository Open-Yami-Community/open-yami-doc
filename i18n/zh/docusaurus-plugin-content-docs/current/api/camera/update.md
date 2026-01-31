---
sidebar_position: 1
title: update 更新摄像机的位置以及相关参数
---

## update

**类型**: `MethodDeclaration`

**定义位置**: [`camera.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/camera.ts)

### 描述

更新摄像机的位置以及相关参数

参数 `deltaTime`: 增量时间(毫秒)

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `deltaTime` | `number` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 247 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/camera.ts#L247)

```typescript
public update(deltaTime: number): void {
    // 更新模块
    this.updaters.update(deltaTime)

    // 计算摄像机位置
    const scene = Scene.binding
    if (scene === null) return
    const zoom = this.zoom
    const tileWidth = scene.tileWidth
    const tileHeight = scene.tileHeight
    const cameraWidth = GL.width / zoom
    const cameraHeight = GL.height / zoom
    const center = scene.convert(this)
    let clampedLeft: number
    let clampedTop: number
    let clampedRight: number
    let clampedBottom: number
    let scrollLeft: number
    let scrollTop: number
    if (this.clampedLeft !== Infinity) {
      clampedLeft = this.clampedLeft * tileWidth
      clampedTop = this.clampedTop * tileHeight
      clampedRight = this.clampedRight * tileWidth
      clampedBottom = this.clampedBottom * tileHeight
    } else {
      const padding = this.padding
      const innerWidth = scene.width * tileWidth
      const innerHeight = scene.height * tileHeight
      clampedLeft = -padding
      clampedRight = innerWidth + padding
      clampedTop = -padding
      clampedBottom = innerHeight + padding
    }
    const maxClampedLeft = clampedRight - cameraWidth
    const maxClampedTop = clampedBottom - cameraHeight
    if (clampedLeft < maxClampedLeft) {
      scrollLeft = Math.clamp(center.x - cameraWidth / 2, clampedLeft, maxClampedLeft)
    } else {
      scrollLeft = (clampedLeft + clampedRight - cameraWidth) / 2
    }
    if (clampedTop < maxClampedTop) {
      scrollTop = Math.clamp(center.y - cameraHeight / 2, clampedTop, maxClampedTop)
    } else {
      scrollTop = (clampedTop + clampedBottom - cameraHeight) / 2
    }
    scrollLeft += this.shakeX
    scrollTop += this.shakeY
    const tile = this.tileArea
    const animation = this.animationArea
    const light = this.lightArea
    const scrollRight = scrollLeft + cameraWidth
    const scrollBottom = scrollTop + cameraHeight
    this.width = cameraWidth
    this.height = cameraHeight
    this.scrollLeft = scrollLeft
    this.scrollTop = scrollTop
    this.scrollRight = scrollRight
    this.scrollBottom = scrollBottom
    this.scrollCenterX = (scrollLeft + scrollRight) / 2
    this.scrollCenterY = (scrollTop + scrollBottom) / 2
    this.scrollLeftT = scrollLeft / tileWidth
    this.scrollTopT = scrollTop / tileHeight
    this.scrollRightT = scrollRight / tileWidth
    this.scrollBottomT = scrollBottom / tileHeight
    this.tileLeft = scrollLeft - tile.expansionLeft
    this.tileTop = scrollTop - tile.expansionTop
    this.tileRight = scrollRight + tile.expansionRight
    this.tileBottom = scrollBottom + tile.expansionBottom
    this.animationLeft = scrollLeft - animation.expansionLeft
    this.animationTop = scrollTop - animation.expansionTop
    this.animationRight = scrollRight + animation.expansionRight
    this.animationBottom = scrollBottom + animation.expansionBottom
    this.animationLeftT = this.animationLeft / tileWidth
    this.animationTopT = this.animationTop / tileHeight
    this.animationRightT = this.animationRight / tileWidth
    this.animationBottomT = this.animationBottom / tileHeight

    // 计算当前缩放率的光影纹理参数
    const texture = GL.reflectedLightMap
    if (texture.scale !== zoom) {
      texture.scale = zoom
      const {ceil, min} = Math
      const pl = texture.paddingLeft
      const pt = texture.paddingTop
      const pr = texture.paddingRight
      const pb = texture.paddingBottom
      const el = ceil(min(light.expansionLeft * zoom, pl))
      const et = ceil(min(light.expansionTop * zoom, pt))
      const er = ceil(min(light.expansionRight * zoom, pr))
      const eb = ceil(min(light.expansionBottom * zoom, pb))
      texture.expansionLeft = el / zoom
      texture.expansionTop = et / zoom
      texture.expansionRight = er / zoom
      texture.expansionBottom = eb / zoom
      texture.maxExpansionLeft = pl / zoom
      texture.maxExpansionTop = pt / zoom
      texture.maxExpansionRight = pr / zoom
      texture.maxExpansionBottom = pb / zoom
      texture.clipX = pl - el
      texture.clipY = pt - et
      texture.clipWidth = GL.width + el + er
      texture.clipHeight = GL.height + et + eb
    }

    // 设置光源渲染范围
    this.lightLeft = scrollLeft - texture.expansionLeft
    this.lightTop = scrollTop - texture.expansionTop
    this.lightRight = scrollRight + texture.expansionRight
    this.lightBottom = scrollBottom + texture.expansionBottom
  }
```

---



文档生成时间：2026/1/31 13:13:58
