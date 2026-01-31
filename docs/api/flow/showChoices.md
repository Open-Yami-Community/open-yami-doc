---
sidebar_position: 1
title: showChoices 显示选项(异步)
---

## showChoices

**类型**: `MethodDeclaration`

**所属类**: `Flow`

**定义位置**: [`flow.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/flow.ts)

### 描述

显示选项(异步)

参数(选项参数, 选项内容, 回调函数, ...)

参数(选项内容, 回调函数, ...)

参数 `first`: 第一个参数(可以是选项参数|选项内容)

参数 `rests`: ...剩余参数([选项内容|回调函数, ...]列表)

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `first` | `string` | - | - |
| `rests` | `Array&lt;string \| FlowChoiceFunction&gt;` | - | - |

### 返回值

类型: `Promise&lt;void&gt;`

### 源代码

**位置**: [第 101 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/flow.ts#L101)

```typescript
public showChoices(first: string, ...rests: Array<string | FlowChoiceFunction>): Promise<void> {
    let offset = 1
    // 如果第一个剩余参数是字符串，表示输入了选项参数
    const parameters: string = typeof rests[0] === 'string' ? first : ''
    // 如果第一个剩余参数不是字符串，放入first作为选项内容
    if (typeof rests[0] !== 'string') {
      rests.unshift(first)
      offset = 0
    }
    return new Promise(resolve => {
      const contents: Array<string> = []
      const branches: Array<() => void> = []
      const next = () => this.continue(resolve)
      for (let i = 0; i < rests.length; i += 2) {
        const content = rests[i]
        const callback = rests[i + 1]
        if (typeof content !== 'string') {
          throw new Error('There is an incorrect argument type, which should be a string. Index: ' + (i + offset))
        }
        if (typeof callback !== 'function') {
          throw new Error('There is an incorrect argument type, which should be a function. Index: ' + (i + 1 + offset))
        }
        const branch = (): void => {
          const choiceValue = callback()
          if (choiceValue instanceof Promise) {
            // 此处脚本在渲染后运行
            choiceValue.then(next)
          } else {
            next()
          }
        }
        contents.push(content)
        branches.push(branch)
      }
      const events = EventManager.getEnabledEvents('showchoices')
      if (events.length === 0) {
        return next()
      }
      const event = new EventHandler(events[events.length - 1])
      for (let i = events.length - 2; i >= 0; i--) {
        event.stack.push(events[i], 0)
      }
      event.commands = events[0]
      Command.parameters = parameters as string
      Command.choiceContents = contents
      Command.choiceIndex = -1
      EventHandler.call(event).onFinish(() => {
        const branch = branches[Command.choiceIndex]
        return branch instanceof Function ? branch() : next()
      })
    })
  }
```

---



文档生成时间：2026/1/31 13:13:59
