---
sidebar_position: 1
title: save 保存正在执行的事件状态
---

## save

**类型**: `MethodDeclaration`

**所属类**: `EventHandler`

**定义位置**: [`event.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/event.ts)

### 描述

保存正在执行的事件状态

### 返回值

类型: `void`

### 源代码

**位置**: [第 649 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/event.ts#L649)

```typescript
private static save(): void {
    this.stacks[this.index++] = CurrentEvent
    CurrentEvent.commands = CommandList
    CurrentEvent.index = CommandIndex
  }
```

---



文档生成时间：2026/1/31 13:13:59
