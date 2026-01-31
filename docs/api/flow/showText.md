---
sidebar_position: 1
title: showText 显示文本(异步)
---

## showText

**类型**: `MethodDeclaration`

**所属类**: `Flow`

**定义位置**: [`flow.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/flow.ts)

### 描述

显示文本(异步)

参数(目标角色, 文本参数, 文本内容)

参数(目标角色, 文本内容)

参数(文本参数, 文本内容)

参数(文本内容)

参数 `first`: 第一个参数(可以是目标角色|文本参数|文本内容)

参数 `second`: 第二个参数(可以是文本参数|文本内容)

参数 `third`: 第三个参数(文本内容)

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `first` | `Actor \| string` | - | - |
| `second` | `string` | - | - |
| `third` | `string` | - | - |

### 返回值

类型: `Promise&lt;void&gt;`

### 源代码

**位置**: [第 53 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/flow.ts#L53)

```typescript
public showText(first: Actor | string, second?: string, third?: string): Promise<void> {
    let target: Actor | undefined
    let parameters: string = ''
    let content: string = ''
    // 三个参数(目标角色+文本参数+文本内容)
    if (typeof third === 'string') {
      if (first instanceof Actor) {
        target = first
      }
      parameters = second!
      content = third!
    // 两个参数(目标角色+文本内容)(文本参数+文本内容)
    } else if (typeof second === 'string') {
      if (first instanceof Actor) {
        target = first
      }
      if (typeof first === 'string') {
        parameters = first
      }
      content = second
    // 一个参数(文本内容)
    } else if (typeof first === 'string') {
      content = first
    }
    return new Promise((resolve: () => void) => {
      const events = EventManager.getEnabledEvents('showtext')
      if (events.length === 0) {
        return this.continue(resolve)
      }
      const event = new EventHandler(events[events.length - 1])
      for (let i = events.length - 2; i >= 0; i--) {
        event.stack.push(events[i], 0)
      }
      event.commands = events[0]
      event.targetActor = target
      Command.parameters = parameters
      Command.textContent = content
      EventHandler.call(event).onFinish(() => this.continue(resolve))
    })
  }
```

---



文档生成时间：2026/1/31 13:13:59
