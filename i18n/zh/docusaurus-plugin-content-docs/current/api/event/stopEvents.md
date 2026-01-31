---
sidebar_position: 1
title: stopEvents 停止指定的正在执行的(多个)事件
---

## stopEvents

**类型**: `MethodDeclaration`

**定义位置**: [`event.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/event.ts)

### 描述

停止指定的正在执行的(多个)事件

参数 `commandList`: 指令函数列表

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `commandList` | `CommandFunctionList` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 204 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/event.ts#L204)

```typescript
public stopEvents(commandList: CommandFunctionList): void {
    for (const event of this.activeEvents) {
      if (event.initial === commandList) {
        event.finish()
      }
    }
  }
```

---



文档生成时间：2026/1/31 13:13:58
