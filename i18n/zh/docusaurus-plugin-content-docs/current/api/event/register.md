---
sidebar_position: 1
title: register 注册事件指令
---

## register

**类型**: `MethodDeclaration`

**定义位置**: [`event.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/event.ts)

### 描述

注册事件指令

参数 `key`: 事件的键

参数 `type`: 事件类型

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `key` | `string` | - | - |
| `type` | `GlobalEventType` | - | - |
| `commandList` | `CommandFunctionList` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 150 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/event.ts#L150)

```typescript
public register(key: string, type: GlobalEventType, commandList: CommandFunctionList): void {
    if (key === '') return
    // 取消已注册的相同键的事件指令
    const context = this.keyMap[key]
    if (context) {
      // 忽略重复注册
      if (context.commandList === commandList) return
      this.stopEvents(context.commandList)
      this.typeMap[context.type]!.remove(context.commandList)
    }
    // 注册新的事件指令
    this.keyMap[key] = {type, commandList}
    // 推迟注册事件以避免立即触发
    Callback.push(() => {
      if (this.keyMap[key]?.commandList === commandList) {
        (this.typeMap[type] ??= []).push(commandList)
      }
    })
    // 如果是自动执行事件，立即执行
    if (type === 'autorun') {
      EventHandler.call(new EventHandler(commandList))
    }
  }
```

---



文档生成时间：2026/1/31 13:13:58
