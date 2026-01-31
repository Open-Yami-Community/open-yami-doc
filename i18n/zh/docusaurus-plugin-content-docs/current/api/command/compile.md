---
sidebar_position: 1
title: compile 编译指令
---

## compile

**类型**: `MethodDeclaration`

**所属类**: `CommandFunctionList`

**定义位置**: [`command.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts)

### 描述

编译指令

参数 `commands`: 指令数据列表

参数 `callback`: 指令执行完毕时回调函数

参数 `loop`: 当前指令列表是否处于循环状态

返回值:编译后的事件指令函数列表

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `commands` | `CommandDataList` | - | - |
| `callback` | `CommandFunction` | - | - |
| `loop` | `boolean` | - | false |
| `foreach` | `ForEachCommandContext \| null` | - | null |

### 返回值

类型: `CommandFunctionList`

编译后的事件指令函数列表

### 源代码

**位置**: [第 120 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts#L120)

```typescript
public compile(commands: CommandDataList, callback?: CommandFunction, loop: boolean = false, foreach: ForEachCommandContext | null = null): CommandFunctionList {
    const stack = this.stack
    const functions = new CommandFunctionList()
    const context: CompileTimeCommandContext = {
      commands: functions,
      index: 0,
      loop: loop,
      foreach: foreach,
      path: '',
    }
    // 创建标签集合与跳转列表
    if (stack.length === 0) {
      context.path = commands.path
      this.labels = {}
      this.jumps = []
      this.returns = []
    }
    stack.push(context)
    const length = commands.length
    for (let i = 0; i < length; i++) {
      const command = commands[i]
      // 如果指令是函数，添加并跳过
      if (typeof command === 'function') {
        functions[context.index++] = command
        continue
      }
      const id = command.id
      // 跳过禁用的事件指令
      if (id[0] === '!') continue
      // 编译内置和自定义指令
      const fn = id in this
      ? (this as any)[id](command.params)
      : this.compileScript(command)
      // 跳过无效编译函数
      if (fn === null) continue
      if (typeof fn === 'function') {
        functions[context.index++] = fn
        continue
      }
      for (const cmdfn of fn) {
        functions[context.index++] = cmdfn
      }
    }
    // 添加栈尾回调函数
    functions.push(callback ?? Command.readStack)
    stack.pop()
    // 编译跳转
    if (stack.length === 0) {
      Command.compileJumps()
      Command.compileReturns(context)
    }
    // 返回编译后的函数列表
    return functions
  }
```

---



文档生成时间：2026/1/31 13:13:58
