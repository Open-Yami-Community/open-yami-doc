---
sidebar_position: 1
title: setAngle 设置动画角度
---

## setAngle

**类型**: `MethodDeclaration`

**所属类**: `AnimationPlayer`

**定义位置**: [`animation.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/animation.ts)

### 描述

设置动画角度

参数 `angle`: 弧度

返回值:动画是否成功切换了方向

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `angle` | `number` | - | - |

### 返回值

类型: `boolean`

动画是否成功切换了方向

### 源代码

**位置**: [第 219 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/animation.ts#L219)

```typescript
public setAngle(angle: number): boolean {
    this.angle = angle
    const directions = this.dirList.length
    // 将角度映射为0~方向数量的数值
    const proportion = Math.modRadians(angle) / (Math.PI * 2)
    const section = (proportion * directions + 0.5) % directions
    // 如果角度的位置刚好是两个方向的交界处，则优先使用之前的方向(容错值0.01)
    if (Math.abs(section - Math.round(section)) < 0.01 && this.direction >= 0) {
      const distance = Math.abs(section - (this.direction + 0.5))
      if (distance < 1 || distance > directions - 1) {
        this.updateRotation()
        return false
      }
    }
    const direction = Math.floor(section)
    const dirChanged = this.setDirection(direction)
    this.updateRotation()
    return dirChanged
  }
```

---



文档生成时间：2026/1/31 13:13:58
