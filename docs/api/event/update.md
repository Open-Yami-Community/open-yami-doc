---
sidebar_position: 1
title: update 执行事件指令
---

## update

**类型**: `MethodDeclaration`

**所属类**: `EventHandler`

**定义位置**: [`event.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/event.ts)

### 描述

执行事件指令

参数 `deltaTime`: 增量时间(毫秒)

返回值:事件是否已完成

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `deltaTime` | `number` | - | - |

### 返回值

类型: `boolean`

事件是否已完成

### 源代码

**位置**: [第 503 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/event.ts#L503)

```typescript
public update(deltaTime: number): boolean {
    // 设置相关属性到全局变量
    CurrentEvent = this
    CommandList = this.commands
    CommandIndex = this.index
    // 连续执行指令，直到返回false(中断)
    while (CommandList[CommandIndex++]?.()) {}
    // 取回全局变量中的事件属性
    this.commands = CommandList
    this.index = CommandIndex
    // 返回事件完成状态
    return this.complete
  }
```

---



文档生成时间：2026/1/31 13:13:59
