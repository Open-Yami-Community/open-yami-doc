---
sidebar_position: 1
title: update 更新xy轴
---

## update

**类型**: `MethodDeclaration`

**定义位置**: [`input.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/input.ts)

### 描述

更新xy轴

### 返回值

类型: `void`

### 源代码

**位置**: [第 910 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/input.ts#L910)

```typescript
public update(): void {
    let x = 0
    let y = 0
    if (this.states.up) {
      y -= 1
    }
    if (this.states.down) {
      y += 1
    }
    if (this.states.left) {
      x -= 1
    }
    if (this.states.right) {
      x += 1
    }
    if (x === 0 && y === 0) {
      this.radians = -1
      this.angle = -1
    } else {
      this.radians = Math.atan2(y, x)
      this.angle = Math.modDegrees(Math.degrees(this.radians))
      if (x !== 0 && y !== 0) {
        x /= Math.SQRT2
        y /= Math.SQRT2
      }
    }
    this.x = x
    this.y = y
  }
```

---



文档生成时间：2026/1/31 13:13:59
