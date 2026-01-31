---
sidebar_position: 1
title: selectButtonByAngle 通过角度选择按钮
---

## selectButtonByAngle

**类型**: `MethodDeclaration`

**定义位置**: [`ui.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts)

### 描述

通过角度选择按钮

参数 `angle`: 当前选中按钮的相对角度

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `angle` | `number` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 564 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts#L564)

```typescript
public selectButtonByAngle(angle: number): void {
    const buttons = this.getFocusedButtons()
    const length = buttons.length
    if (length === 0) {
      return
    }
    const selected = this.getSelectedButton(buttons)
    if (!selected) {
      return buttons[0]?.hover(true)
    }

    // 计算邻近按钮的距离成本
    const ANGLE_TOLERANCE = Math.PI / 3
    const ANGLE_WEIGHT = 1.25
    const costs: Array<number> = []
    const set: HashMap<ButtonElement> = {}
    const sx = selected.x + selected.width / 2
    const sy = selected.y + selected.height / 2
    for (const button of buttons) {
      if (button === selected) {
        continue
      }
      const dx = button.x + button.width / 2
      const dy = button.y + button.height / 2
      const da = Math.atan2(dy - sy, dx - sx)
      let ra = Math.modRadians(da - angle)
      if (ra > ANGLE_TOLERANCE) {
        ra = Math.modRadians(angle - da)
        if (ra > ANGLE_TOLERANCE) {
          continue
        }
      }
      const distance = Math.dist(sx, sy, dx, dy)
      const cost = Math.round(distance * (Math.cos(ra) + Math.sin(ra) * ANGLE_WEIGHT))
      costs.push(cost)
      set[cost] = button
    }

    // 选中最邻近的按钮
    if (costs.length > 0) {
      let minCost = Infinity
      for (const cost of costs) {
        if (minCost > cost) {
          minCost = cost
        }
      }
      selected.restore()
      set[minCost]!.hover(true)
    }
  }
```

---



文档生成时间：2026/1/31 13:13:59
