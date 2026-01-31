---
sidebar_position: 1
title: catchRejection 捕获未处理的异步错误
---

## catchRejection

**类型**: `MethodDeclaration`

**所属类**: `CacheList`

**定义位置**: [`util.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/util.ts)

### 描述

捕获未处理的异步错误

参数 `event`: 错误事件

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `event` | `PromiseRejectionEvent` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 666 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/util.ts#L666)

```typescript
private catchRejection(event: PromiseRejectionEvent): void {
    MessageReporter.displayMessage(event.reason)
  }
```

---



文档生成时间：2026/1/31 13:13:59
