---
sidebar_position: 1
title: move 移动元素
---

## move

**类型**: `MethodDeclaration`

**所属类**: `UIElement`

**定义位置**: [`ui.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts)

### 描述

移动元素

参数 `transformProps`: 元素变换属性选项

参数 `easingId`: 过渡曲线ID

参数 `duration`: 持续时间(毫秒)

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `transformProps` | `TransformOptions` | - | - |
| `easingId` | `string` | - | '' |
| `duration` | `number` | - | n0 |

### 返回值

类型: `void`

### 源代码

**位置**: [第 1528 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts#L1528)

```typescript
public move(transformProps: TransformOptions, easingId: string = '', duration: number = 0): void {
    // 转换属性词条的数据结构
    const propEntries = Object.entries(transformProps) as Array<[key: TransformKey, end: number]>
    // 允许多个过渡同时存在且不冲突
    const {updaters} = this
    let transitions = updaters.get('move') as UpdaterList | undefined
    // 如果上一次的移动元素过渡未结束，获取过渡更新器列表
    if (transitions) {
      let ti = transitions.length
      while (--ti >= 0) {
        // 获取单个过渡更新器，检查属性词条
        const updater = transitions[ti]
        const entries = updater.entries as Array<[key: TransformKey, start: number, end: number]>
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
      const transform = this.transform
      const length = propEntries.length
      const entries: Array<[key: TransformKey, start: number, end: number]> = new Array(length)
      for (let i = 0; i < length; i++) {
        const [key, end] = propEntries[i]
        const start = transform[key]
        entries[i] = [key, start, end]
      }
      let elapsed = 0
      const easing = Easing.get(easingId)
      // 创建更新器并添加到过渡更新器列表中
      const updater = transitions.add({
        entries: entries,
        update: deltaTime => {
          elapsed += deltaTime
          const time = easing.get(elapsed / duration)
          for (const [key, start, end] of entries) {
            transform[key] = start * (1 - time) + end * time
          }
          // 限制不透明度的最大值，不让它溢出
          if (transform.opacity > 1) {
            transform.opacity = 1
          }
          // 如果当前更新器是最后一个，调整元素大小
          const last = transitions!.length - 1
          if (updater === transitions![last]) {
            this.resize()
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
      // 直接设置元素属性
      const transform = this.transform
      for (const [key, value] of propEntries) {
        transform[key] = value
      }
      this.resize()
      // 如果存在过渡更新器列表并为空，删除它
      if (transitions?.length === 0) {
        updaters.deleteDelay('move')
      }
    }
  }
```

---



文档生成时间：2026/1/31 13:13:59
