---
sidebar_position: 1
title: setAmbientLight 设置场景环境光
---

## setAmbientLight

**类型**: `MethodDeclaration`

**所属类**: `SceneContext`

**定义位置**: [`scene.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/scene.ts)

### 描述

设置场景环境光

参数 `red`: 红[0-255]

参数 `green`: 绿[0-255]

参数 `blue`: 蓝[0-255]

参数 `easingId`: 过渡曲线ID

参数 `duration`: 持续时间(毫秒)

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `red` | `number` | - | - |
| `green` | `number` | - | - |
| `blue` | `number` | - | - |
| `easingId` | `string` | - | '' |
| `duration` | `number` | - | n0 |

### 返回值

类型: `void`

### 源代码

**位置**: [第 994 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/scene.ts#L994)

```typescript
public setAmbientLight(red: number, green: number, blue: number, easingId: string = '', duration: number = 0): void {
    const updaters = this.updaters
    const ambient = this.ambient
    if (duration > 0) {
      let elapsed = 0
      const sRed = ambient.red
      const sGreen = ambient.green
      const sBlue = ambient.blue
      const easing = Easing.get(easingId)
      // 创建ambient更新器
      updaters.set('ambient', {
        update: deltaTime => {
          elapsed += deltaTime
          const time = easing.get(elapsed / duration)
          ambient.red = Math.clamp(sRed * (1 - time) + red * time, 0, 255)
          ambient.green = Math.clamp(sGreen * (1 - time) + green * time, 0, 255)
          ambient.blue = Math.clamp(sBlue * (1 - time) + blue * time, 0, 255)
          GL.setAmbientLight(ambient)
          // 过渡结束，延迟删除更新器
          if (elapsed >= duration) {
            updaters.deleteDelay('ambient')
          }
        }
      })
    } else {
      updaters.deleteDelay('ambient')
      ambient.red = red
      ambient.green = green
      ambient.blue = blue
      GL.setAmbientLight(ambient)
    }
  }
```

---



文档生成时间：2026/1/31 13:13:59
