---
sidebar_position: 1
title: getMultipleActors 获取场景指定区域中的多个角色
---

## getMultipleActors

**类型**: `MethodDeclaration`

**所属类**: `SceneContext`

**定义位置**: [`scene.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/scene.ts)

### 描述

获取场景指定区域中的多个角色

返回值:目标角色列表

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `\{ x, y, area = 'rectangle', width = 1, height = 1, radius = 0.5, selector = 'any', teamId = '', activation = 'active', \}` | `\{
    /\*\* 选择区域中心X \*/
    x\: number
    /\*\* 选择区域中心Y \*/
    y\: number
    /\*\* 选择区域类型 \*/
    area\?\: 'rectangle' \| 'circle'
    /\*\* 矩形区域宽度 \*/
    width\?\: number
    /\*\* 矩形区域高度 \*/
    height\?\: number
    /\*\* 圆形区域半径 \*/
    radius\?\: number
    /\*\* 目标角色选择器 \*/
    selector\?\: 'enemy' \| 'friend' \| 'team' \| 'any'
    /\*\* 选择器队伍ID \*/
    teamId\?\: string
    /\*\* 激活状态条件 \*/
    activation\?\: 'active' \| 'inactive' \| 'either'
  \}` | - | - |

### 返回值

类型: `Array&lt;Actor&gt;`

目标角色列表

### 源代码

**位置**: [第 903 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/scene.ts#L903)

```typescript
public getMultipleActors({
    x,
    y,
    area = 'rectangle',
    width = 1,
    height = 1,
    radius = 0.5,
    selector = 'any',
    teamId = '',
    activation = 'active',
  }: {
    /** 选择区域中心X */
    x: number
    /** 选择区域中心Y */
    y: number
    /** 选择区域类型 */
    area?: 'rectangle' | 'circle'
    /** 矩形区域宽度 */
    width?: number
    /** 矩形区域高度 */
    height?: number
    /** 圆形区域半径 */
    radius?: number
    /** 目标角色选择器 */
    selector?: 'enemy' | 'friend' | 'team' | 'any'
    /** 选择器队伍ID */
    teamId?: string
    /** 激活状态条件 */
    activation?: 'active' | 'inactive' | 'either'
  }): Array<Actor> {
    const inspector = SceneContext.actorInspectors[selector]
    const teamIndex = Team.get(teamId)?.index ?? -1
    const actors = []
    let skipCond
    switch (activation) {
      case 'active':
        skipCond = false
        break
      case 'inactive':
        skipCond = true
      case 'either':
        break
    }
    switch (area) {
      case 'rectangle': {
        const halfW = width / 2
        const halfH = height / 2
        const cells = this.actor.partition.get(x - halfW, y - halfH, x + halfW, y + halfH)
        const length = cells.count
        for (let i = 0; i < length; i++) {
          for (const actor of cells[i] as Array<Actor>) {
            if (actor.active === skipCond) {
              continue
            }
            const distX = Math.abs(x - actor.x)
            const distY = Math.abs(y - actor.y)
            if (distX <= halfW && distY <= halfH && inspector(actor.teamIndex, teamIndex)) {
              actors.push(actor)
            }
          }
        }
        break
      }
      case 'circle': {
        const cells = this.actor.partition.get(x - radius, y - radius, x + radius, y + radius)
        const length = cells.count
        for (let i = 0; i < length; i++) {
          for (const actor of cells[i] as Array<Actor>) {
            if (actor.active === skipCond) {
              continue
            }
            const dist = (x - actor.x) ** 2 + (y - actor.y) ** 2
            if (dist <= radius ** 2 && inspector(actor.teamIndex, teamIndex)) {
              actors.push(actor)
            }
          }
        }
        break
      }
    }
    return actors
  }
```

---



文档生成时间：2026/1/31 13:13:59
