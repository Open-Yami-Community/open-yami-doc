---
sidebar_position: 1
title: independent 是否开启独立执行(销毁对象后仍然继续Flow异步脚本)
---

## independent

**类型**: `MethodDeclaration`

**所属类**: `Flow`

**定义位置**: [`flow.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/flow.ts)

### 描述

是否开启独立执行(销毁对象后仍然继续Flow异步脚本)

参数 `state`: 独立执行开关

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `state` | `boolean` | - | true |

### 返回值

类型: `void`

### 源代码

**位置**: [第 219 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/flow.ts#L219)

```typescript
public independent(state: boolean = true): void {
    this.flowIndependent = state
  }
```

---



文档生成时间：2026/1/31 13:13:59
