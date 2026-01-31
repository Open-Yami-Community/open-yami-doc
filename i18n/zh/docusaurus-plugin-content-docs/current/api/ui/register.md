---
sidebar_position: 1
title: register 注册事件指令
---

## register

**类型**: `MethodDeclaration`

**所属类**: `UIElement`

**定义位置**: [`ui.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts)

### 描述

注册事件指令

参数 `key`: 事件的键

参数 `type`: 事件类型

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `type` | `string` | - | - |
| `commandList` | `CommandFunctionList` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 1675 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts#L1675)

```typescript
public register(type: string, commandList: CommandFunctionList): void {
    // 忽略重复注册
    if (this.registeredEvents[type] !== commandList) {
      // 取消已注册的相同键的事件指令
      this.unregister(type)
      // 注册新的事件指令
      this.registeredEvents[type] = commandList
      // 如果是自动执行事件，立即执行
      if (type === 'autorun' && this.started) {
        this.callEvent('autorun')
      }
    }
  }
```

---



文档生成时间：2026/1/31 13:13:59
