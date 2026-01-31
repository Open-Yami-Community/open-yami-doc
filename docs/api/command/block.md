---
sidebar_position: 1
title: block 指令块
---

## block

**类型**: `MethodDeclaration`

**所属类**: `CommandFunctionList`

**定义位置**: [`command.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts)

### 描述

指令块

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `\{note, asynchronous, commands\}` | `\{
    note\: string,
    asynchronous\: boolean,
    commands\: CommandDataList,
  \}` | - | - |

### 返回值

类型: `CommandFunction \| CommandFunctionList`

### 源代码

**位置**: [第 4562 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts#L4562)

```typescript
protected block({note, asynchronous, commands}: {
    note: string,
    asynchronous: boolean,
    commands: CommandDataList,
  }): CommandFunction | CommandFunctionList {
    // 补丁：2025-3-21
    if (asynchronous === undefined) {
      asynchronous = false
    }
    switch (asynchronous) {
      case false: {
        const context = Command.stack.get()
        const pop = Command.goto(context.commands, context.index + 1)
        return Command.goto(Command.compile(commands, pop), 0)
      }
      case true: {
        const commandList = Command.compileIndependent(commands)
        commandList.type = 'asynchronous'
        return () => {
          const copy = Object.create(commandList) as CommandFunctionList
          copy.inheritance = CurrentEvent
          const asyncEvent = new EventHandler(copy)
          EventHandler.call(asyncEvent, CurrentEvent.updaters)
          return true
        }
      }
    }
  }
```

---



文档生成时间：2026/1/31 13:13:58
