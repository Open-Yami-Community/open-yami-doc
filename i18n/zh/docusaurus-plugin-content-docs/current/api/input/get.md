---
sidebar_position: 1
title: get 获取事件冒泡状态
---

## get

**类型**: `MethodDeclaration`

**所属类**: `EventBubbleStackManager`

**定义位置**: [`input.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/input.ts)

### 描述

获取事件冒泡状态

返回值:false=停止传递事件

### 返回值

类型: `boolean`

false=停止传递事件

### 源代码

**位置**: [第 1005 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/input.ts#L1005)

```typescript
public get(): boolean {
    return this.stack[this.index]
  }
```

---



文档生成时间：2026/1/31 13:13:59
