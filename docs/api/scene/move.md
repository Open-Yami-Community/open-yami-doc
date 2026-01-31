---
sidebar_position: 1
title: move 移动场景光源
---

## move

**类型**: `MethodDeclaration`

**所属类**: `SceneLight`

**定义位置**: [`scene.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/scene.ts)

### 描述

移动场景光源

参数 `properties`: 光源属性词条

参数 `easingId`: 过渡曲线ID

参数 `duration`: 持续时间(毫秒)

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `properties` | `LightMoveOptions` | - | - |
| `easingId` | `string` | - | '' |
| `duration` | `number` | - | n0 |

### 返回值

类型: `void`

### 源代码

**位置**: [第 5070 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/scene.ts#L5070)

```typescript
public move(properties: LightMoveOptions, easingId: string = '', duration: number = 0): void {
    // 转换属性词条的数据结构
    const propEntries = Object.entries(properties) as Array<[string, number]>
    // 允许多个过渡同时存在且不冲突
    const {updaters} = this
    let transitions = updaters.get('move') as UpdaterList | undefined
    // 如果上一次的移动光源过渡未结束，获取过渡更新器列表
    if (transitions) {
      let ti = transitions.length
      while (--ti >= 0) {
        // 获取单个过渡更新器，检查属性词条
        const updater = transitions[ti]
        const entries = updater.entries
        let ei = entries.length
        while (--ei >= 0) {
          const key = entries[ei][0]
          for (const property of propEntries) {
            // 从上一次过渡的属性中删除与当前过渡重复的属性
            if (property[0] === key) {
              entries.splice(ei, 1)
              if (entries.length === 0) {
                transitions.splice(ti, 1)
              }
              break
            }
          }
        }
      }
    }

    // 如果存在过渡
    if (duration > 0) {
      if (!transitions) {
        // 如果不存在过渡更新器列表，新建一个
        transitions = new UpdaterList()
        updaters.set('move', transitions)
      }
      const entries: Array<[key: string, start: number, end: number]> = []
      const map = SceneLight.filters[this.type]
      for (const [key, end] of propEntries) {
        // 过滤掉与当前光源类型不匹配的属性
        if (key in map) {
          const start: number = (this as any)[key]
          entries.push([key, start, end])
        }
      }
      let elapsed = 0
      const easing = Easing.get(easingId)
      // 创建更新器并添加到过渡更新器列表中
      const updater = transitions.add({
        entries: entries,
        update: (deltaTime: number) => {
          elapsed += deltaTime
          const time = easing.get(elapsed / duration)
          for (const [key, start, end] of entries) {
            (this as any)[key] = start * (1 - time) + end * time
          }
          // 如果过渡结束，延迟移除更新器
          if (elapsed >= duration) {
            Callback.push(() => {
              transitions!.remove(updater)
              // 如果过渡更新器列表为空，删除它
              if (transitions!.length === 0) {
                updaters.delete('move')
              }
            })
          }
        }
      })
    } else {
      // 直接设置光源属性
      const map = SceneLight.filters[this.type] as any
      for (const [key, value] of propEntries) {
        // 过滤掉与当前光源类型不匹配的属性
        if (!map[key]) continue
        (this as any)[key] = value
      }
      // 如果存在过渡更新器列表并为空，删除它
      if (transitions?.length === 0) {
        updaters.deleteDelay('move')
      }
    }
  }
```

---



文档生成时间：2026/1/31 13:13:59
