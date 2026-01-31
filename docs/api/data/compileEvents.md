---
sidebar_position: 1
title: compileEvents 编译对象中的事件
---

## compileEvents

**类型**: `MethodDeclaration`

**定义位置**: [`data.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/data.ts)

### 描述

编译对象中的事件

参数 `data`: 包含事件列表的对象

参数 `eventPath`: 事件路径

返回值:(类型:指令列表)映射表

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `data` | `\{events\: any\}` | - | - |
| `eventPath` | `string` | - | - |

### 返回值

类型: `HashMap&lt;CommandFunctionList&gt;`

(类型:指令列表)映射表

### 源代码

**位置**: [第 704 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/data.ts#L704)

```typescript
public compileEvents(data: {events: any}, eventPath: string): HashMap<CommandFunctionList> {
    const typeMap: HashMap<CommandFunctionList> = {}
    for (const event of data.events as Array<EventData>) {
      if (!event.enabled) continue
      let eventName
      let eventType
      const enumItem = Enum.get(event.type)
      if (enumItem) {
        eventName = enumItem.name
        eventType = enumItem.value
      } else {
        eventName = event.type
        eventType = event.type
      }
      event.commands.path = `@ ${eventPath}\n@ ${eventName}`
      const commandFunctions = Command.compile(event.commands)
      commandFunctions.type = eventType
      commandFunctions.path = `${eventPath}/${eventName}`
      typeMap[eventType] = commandFunctions
    }
    return data.events = typeMap
  }
```

---



文档生成时间：2026/1/31 13:13:58
