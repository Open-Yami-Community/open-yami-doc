---
sidebar_position: 1
title: stopEvents 停止指定的正在执行的(多个)事件
---

## stopEvents

**类型**: `MethodDeclaration`

**所属类**: `UIElement`

**定义位置**: [`ui.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts)

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

**位置**: [第 1714 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts#L1714)

```typescript
public stopEvents(commandList: CommandFunctionList): void {
    for (const updater of this.updaters) {
      if (updater instanceof EventHandler && updater.initial === commandList) {
        updater.finish()
      }
    }
  }
```

---



文档生成时间：2026/1/31 13:13:59
