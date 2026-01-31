---
sidebar_position: 1
title: push 推送回调函数，稍后执行
---

## push

**类型**: `MethodDeclaration`

**定义位置**: [`event.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/event.ts)

### 描述

推送回调函数，稍后执行

参数 `fn`: 回调函数

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `fn` | `CallbackFunction` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 17 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/event.ts#L17)

```typescript
public push(fn: CallbackFunction): void {
    this.functions[this.count++] = fn
  }
```

---



文档生成时间：2026/1/31 13:13:58
