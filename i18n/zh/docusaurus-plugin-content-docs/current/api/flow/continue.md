---
sidebar_position: 1
title: continue 检查是否继续执行异步函数(宿主对象被销毁时停止执行)
---

## continue

**类型**: `MethodDeclaration`

**所属类**: `Flow`

**定义位置**: [`flow.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/flow.ts)

### 描述

检查是否继续执行异步函数(宿主对象被销毁时停止执行)

参数 `resolve`: Promise异步返回函数

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `resolve` | `() =&gt; void` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 24 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/flow.ts#L24)

```typescript
private continue(resolve: () => void): void {
    if (this.verify()) return resolve()
  }
```

---



文档生成时间：2026/1/31 13:13:59
