---
sidebar_position: 1
title: add 添加计时器到列表
---

## add

**类型**: `MethodDeclaration`

**所属类**: `Timer`

**定义位置**: [`time.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/time.ts)

### 描述

添加计时器到列表

返回值:当前计时器

### 返回值

类型: `this`

当前计时器

### 源代码

**位置**: [第 208 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/time.ts#L208)

```typescript
public add(): this {
    switch (this.mode) {
      case 'scaled':
        Timer.scaledTimers.append(this)
        return this
      case 'raw':
        Timer.rawTimers.append(this)
        return this
    }
  }
```

---



文档生成时间：2026/1/31 13:13:59
