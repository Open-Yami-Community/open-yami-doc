---
sidebar_position: 1
title: restore 恢复事件状态
---

## restore

**类型**: `MethodDeclaration`

**所属类**: `EventHandler`

**定义位置**: [`event.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/event.ts)

### 描述

恢复事件状态

### 返回值

类型: `void`

### 源代码

**位置**: [第 656 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/event.ts#L656)

```typescript
private static restore(): void {
    CurrentEvent = this.stacks[--this.index]
    CommandList = CurrentEvent.commands
    CommandIndex = CurrentEvent.index
  }
```

---



文档生成时间：2026/1/31 13:13:59
