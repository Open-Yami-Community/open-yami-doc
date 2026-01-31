---
sidebar_position: 1
title: calculateProgressVertices 计算进度条绘制用的顶点数据
---

## calculateProgressVertices

**类型**: `MethodDeclaration`

**所属类**: `ProgressBarElement`

**定义位置**: [`ui.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts)

### 描述

计算进度条绘制用的顶点数据

返回值:进度条响应数据

### 返回值

类型: `ProgressBarResponse`

进度条响应数据

### 源代码

**位置**: [第 4147 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts#L4147)

```typescript
private calculateProgressVertices(): ProgressBarResponse {
    const type = this.type
    const progress = Math.clamp(this.progress, 0, 1)
    const texture = this.texture!
    const x = texture.x
    const y = texture.y
    const w = texture.width
    const h = texture.height
    const tw = texture.base.width
    const th = texture.base.height
    const response = ProgressBarElement.response
    const vertices = response.vertices
    const step = this.step
    switch (type) {
      case 'horizontal': {
        // 水平模式：从左到右
        let sw = w * progress
        let sh = h
        if (step !== 0) {
          // 如果存在步长，调整进度条宽度
          sw = Math.round(sw / step) * step
          sw = Math.clamp(sw, 0, w)
        }
        const dl = 0
        const dt = 0
        const dr = sw
        const db = sh
        const sl = x / tw
        const st = y / th
        const sr = (x + sw) / tw
        const sb = (y + sh) / th
        vertices[0] = dl
        vertices[1] = dt
        vertices[2] = sl
        vertices[3] = st
        vertices[4] = dl
        vertices[5] = db
        vertices[6] = sl
        vertices[7] = sb
        vertices[8] = dr
        vertices[9] = db
        vertices[10] = sr
        vertices[11] = sb
        vertices[12] = dr
        vertices[13] = dt
        vertices[14] = sr
        vertices[15] = st
        response.vertexLength = 16
        response.drawingLength = 4
        return response
      }
      case 'vertical': {
        // 垂直模式：从下到上
        let sw = w
        let sh = h * progress
        if (step !== 0) {
          // 如果存在步长，调整进度条高度
          sh = Math.round(sh / step) * step
          sh = Math.clamp(sh, 0, h)
        }
        const dl = 0
        const dt = h - sh
        const dr = sw
        const db = h
        const sl = x / tw
        const st = (y + dt) / th
        const sr = (x + sw) / tw
        const sb = (y + h) / th
        vertices[0] = dl
        vertices[1] = dt
        vertices[2] = sl
        vertices[3] = st
        vertices[4] = dl
        vertices[5] = db
        vertices[6] = sl
        vertices[7] = sb
        vertices[8] = dr
        vertices[9] = db
        vertices[10] = sr
        vertices[11] = sb
        vertices[12] = dr
        vertices[13] = dt
        vertices[14] = sr
        vertices[15] = st
        response.vertexLength = 16
        response.drawingLength = 4
        return response
      }
      case 'round': {
        // 圆形模式：
        // 圆心角是正数 = 顺时针方向
        // 圆心角是负数 = 逆时针方向
        const angles = response.angles
        const array = response.array
        let startAngle = this.startAngle
        let centralAngle = this.centralAngle
        let currentAngle = centralAngle * progress
        if (step !== 0) {
          // 如果存在步长，调整进度条角度
          currentAngle = Math.round(currentAngle / step) * step
          currentAngle = centralAngle >= 0
          ? Math.min(currentAngle, centralAngle)
          : Math.max(currentAngle, centralAngle)
        }
        if (currentAngle < 0) {
          // 如果当前角度是负数，取相反数
          // 并且把结束角度作为起始角度
          currentAngle = -currentAngle
          startAngle -= currentAngle
        }
        startAngle = Math.radians(startAngle)
        currentAngle = Math.radians(currentAngle)
        // 准备生成三角扇顶点数据
        const dl = 0
        const dt = 0
        const dr = w
        const db = h
        const dox = w * this.centerX
        const doy = h * this.centerY
        const tox = dox + x
        const toy = doy + y
        const sox = tox / tw
        const soy = toy / th
        const sl = x / tw
        const st = y / th
        const sr = (x + w) / tw
        const sb = (y + h) / th
        // 计算起始角到四个矩形角顶点的顺时针角度
        angles[0] = Math.modRadians(Math.atan2(dt - doy, dr - dox) - startAngle)
        angles[1] = Math.modRadians(Math.atan2(db - doy, dr - dox) - startAngle)
        angles[2] = Math.modRadians(Math.atan2(db - doy, dl - dox) - startAngle)
        angles[3] = Math.modRadians(Math.atan2(dt - doy, dl - dox) - startAngle)
        // 第一个顶点设置为起点
        vertices[0] = dox
        vertices[1] = doy
        vertices[2] = sox
        vertices[3] = soy
        // 查找起始角度顺时针方向第一个矩形角
        let minimum = angles[0]
        let startIndex = 0
        for (let i = 1; i < 4; i++) {
          if (angles[i] < minimum) {
            minimum = angles[i]
            startIndex = i
          }
        }
        // 从第三个顶点开始
        let vi = 8
        let endIndex = startIndex
        for (let i = 0; i < 4; i++) {
          // 从起始角到当前角顺时针连接三角扇顶点
          const index = (startIndex + i) % 4
          if (angles[index] < currentAngle) {
            switch (index) {
              case 0: // 右上
                vertices[vi    ] = dr
                vertices[vi + 1] = dt
                vertices[vi + 2] = sr
                vertices[vi + 3] = st
                break
              case 1: // 右下
                vertices[vi    ] = dr
                vertices[vi + 1] = db
                vertices[vi + 2] = sr
                vertices[vi + 3] = sb
                break
              case 2: // 左下
                vertices[vi    ] = dl
                vertices[vi + 1] = db
                vertices[vi + 2] = sl
                vertices[vi + 3] = sb
                break
              case 3: // 左上
                vertices[vi    ] = dl
                vertices[vi + 1] = dt
                vertices[vi + 2] = sl
                vertices[vi + 3] = st
                break
            }
            vi += 4
          } else {
            // 记录结束点索引
            endIndex = index
            break
          }
        }
        // 设置起始角度和边、顶点索引
        array[0] = startAngle
        array[1] = startIndex
        array[2] = 4
        // 设置结束角度和边、顶点索引
        array[3] = startAngle + currentAngle
        array[4] = endIndex
        array[5] = vi
        // 补充第二个和最后一个顶点数据
        for (let i = 0; i < 6; i += 3) {
          const angle = array[i]
          const side = array[i + 1]
          const vi = array[i + 2]
          switch (side) {
            case 0: { // 顶点位于上边
              const x = Math.tan(angle + Math.PI * 0.5) * doy
              const dx = (dox + x)
              const sx = (tox + x) / tw
              vertices[vi    ] = dx
              vertices[vi + 1] = dt
              vertices[vi + 2] = sx
              vertices[vi + 3] = st
              break
            }
            case 1: { // 顶点位于右边
              const y = Math.tan(angle) * (w - dox)
              const dy = (doy + y)
              const sy = (toy + y) / th
              vertices[vi    ] = dr
              vertices[vi + 1] = dy
              vertices[vi + 2] = sr
              vertices[vi + 3] = sy
              break
            }
            case 2: { // 顶点位于下边
              const x = Math.tan(angle - Math.PI * 0.5) * (h - doy)
              const dx = (dox - x)
              const sx = (tox - x) / tw
              vertices[vi    ] = dx
              vertices[vi + 1] = db
              vertices[vi + 2] = sx
              vertices[vi + 3] = sb
              break
            }
            case 3: { // 顶点位于左边
              const y = Math.tan(angle - Math.PI) * dox
              const dy = (doy - y)
              const sy = (toy - y) / th
              vertices[vi    ] = dl
              vertices[vi + 1] = dy
              vertices[vi + 2] = sl
              vertices[vi + 3] = sy
              break
            }
          }
        }
        const drawingLength = vi / 4 + 1
        response.vertexLength = drawingLength * 4
        response.drawingLength = drawingLength
        return response
      }
    }
  }
```

---



文档生成时间：2026/1/31 13:13:59
