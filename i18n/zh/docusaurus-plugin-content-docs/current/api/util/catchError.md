---
sidebar_position: 1
title: catchError 捕获未处理的同步错误
---

## catchError

**类型**: `MethodDeclaration`

**所属类**: `CacheList`

**定义位置**: [`util.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/util.ts)

### 描述

捕获未处理的同步错误

参数 `event`: 错误事件

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `event` | `ErrorEvent` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 658 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/util.ts#L658)

```typescript
private catchError(event: ErrorEvent): void {
    MessageReporter.displayMessage(event.message)
  }
```

---



文档生成时间：2026/1/31 13:13:59
