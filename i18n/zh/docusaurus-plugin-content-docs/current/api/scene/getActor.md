---
sidebar_position: 1
title: getActor 获取场景指定区域中的角色
---

## getActor

**类型**: `MethodDeclaration`

**所属类**: `SceneContext`

**定义位置**: [`scene.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/scene.ts)

### 描述

获取场景指定区域中的角色

返回值:目标角色

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `\{ x, y, area = 'square', size = 1, radius = 0.5, selector = 'any', teamId = '', condition = 'nearest', attribute = '', divisor = '', activation = 'active', exclusionActor = undefined, exclusionTeamId = '', \}` | `\{
    /\*\* 选择区域中心X \*/
    x\: number
    /\*\* 选择区域中心Y \*/
    y\: number
    /\*\* 选择区域类型 \*/
    area\?\: 'square' \| 'circle'
    /\*\* 正方形区域边长 \*/
    size\?\: number
    /\*\* 圆形区域半径 \*/
    radius\?\: number
    /\*\* 目标角色选择器 \*/
    selector\?\: 'enemy' \| 'friend' \| 'team' \| 'any'
    /\*\* 选择器队伍ID \*/
    teamId\?\: string
    /\*\* 条件 \*/
    condition\?\: 'nearest' \| 'farthest' \| 'min\-attribute\-value' \| 'max\-attribute\-value' \| 'min\-attribute\-ratio' \| 'max\-attribute\-ratio' \| 'random' \| 'select'
    /\*\* 属性键 \*/
    attribute\?\: string
    /\*\* 除数属性键 \*/
    divisor\?\: string
    /\*\* 激活状态条件 \*/
    activation\?\: 'active' \| 'inactive' \| 'either'
    /\*\* 排除角色 \*/
    exclusionActor\?\: Actor \| undefined
    /\*\* 排除队伍ID \*/
    exclusionTeamId\?\: string
  \}` | - | - |

### 返回值

类型: `Actor \| undefined`

目标角色

### 源代码

**位置**: [第 799 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/scene.ts#L799)

```typescript
public getActor({
    x,
    y,
    area = 'square',
    size = 1,
    radius = 0.5,
    selector = 'any',
    teamId = '',
    condition = 'nearest',
    attribute = '',
    divisor = '',
    activation = 'active',
    exclusionActor = undefined,
    exclusionTeamId = '',
  }: {
    /** 选择区域中心X */
    x: number
    /** 选择区域中心Y */
    y: number
    /** 选择区域类型 */
    area?: 'square' | 'circle'
    /** 正方形区域边长 */
    size?: number
    /** 圆形区域半径 */
    radius?: number
    /** 目标角色选择器 */
    selector?: 'enemy' | 'friend' | 'team' | 'any'
    /** 选择器队伍ID */
    teamId?: string
    /** 条件 */
    condition?: 'nearest' | 'farthest' | 'min-attribute-value' | 'max-attribute-value' | 'min-attribute-ratio' | 'max-attribute-ratio' | 'random' | 'select'
    /** 属性键 */
    attribute?: string
    /** 除数属性键 */
    divisor?: string
    /** 激活状态条件 */
    activation?: 'active' | 'inactive' | 'either'
    /** 排除角色 */
    exclusionActor?: Actor | undefined
    /** 排除队伍ID */
    exclusionTeamId?: string
  }): Actor | undefined {
    const inspector = SceneContext.actorInspectors[selector]
    const teamIndex = Team.get(teamId)?.index ?? -1
    const actorPool: CacheList<Actor> = CacheList.instance
    let count = 0
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
      case 'square': {
        const half = size / 2
        const cells = this.actor.partition.get(x - half, y - half, x + half, y + half)
        const length = cells.count
        for (let i = 0; i < length; i++) {
          for (const actor of cells[i] as Array<Actor>) {
            if (actor.active === skipCond ||
              actor === exclusionActor ||
              actor.teamId === exclusionTeamId) {
              continue
            }
            const distX = Math.abs(x - actor.x)
            const distY = Math.abs(y - actor.y)
            if (distX <= half && distY <= half && inspector(actor.teamIndex, teamIndex)) {
              actorPool[count++] = actor
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
            if (actor.active === skipCond ||
              actor === exclusionActor ||
              actor.teamId === exclusionTeamId) {
              continue
            }
            const dist = (x - actor.x) ** 2 + (y - actor.y) ** 2
            if (dist <= radius ** 2 && inspector(actor.teamIndex, teamIndex)) {
              actorPool[count++] = actor
            }
          }
        }
        break
      }
    }
    actorPool.count = count
    return SceneContext.actorFilters[condition](x, y, attribute, divisor)
  }
```

---



文档生成时间：2026/1/31 13:13:59
