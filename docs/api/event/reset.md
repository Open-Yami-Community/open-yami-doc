---
sidebar_position: 1
title: reset 重置列表
---

## reset

**类型**: `MethodDeclaration`

**所属类**: `ScriptMethodList`

**定义位置**: [`event.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/event.ts)

### 描述

重置列表

返回值:当前对象

### 返回值

类型: `this`

当前对象

### 源代码

**位置**: [第 767 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/event.ts#L767)

```typescript
public reset(): this {
    this.count = 0
    return this
  }
```

---



文档生成时间：2026/1/31 13:13:59
