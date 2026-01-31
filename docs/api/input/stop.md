---
sidebar_position: 1
title: stop 停止事件冒泡
---

## stop

**类型**: `MethodDeclaration`

**所属类**: `EventBubbleStackManager`

**定义位置**: [`input.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/input.ts)

### 描述

停止事件冒泡

### 返回值

类型: `void`

### 源代码

**位置**: [第 1015 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/input.ts#L1015)

```typescript
public stop(): void {
    this.stack[this.index] = false
  }
```

---



文档生成时间：2026/1/31 13:13:59
