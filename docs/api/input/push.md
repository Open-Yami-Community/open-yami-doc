---
sidebar_position: 1
title: push 推入事件冒泡状态
---

## push

**类型**: `MethodDeclaration`

**所属类**: `EventBubbleStackManager`

**定义位置**: [`input.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/input.ts)

### 描述

推入事件冒泡状态

参数 `bubble`: 冒泡状态

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `bubble` | `boolean` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 1023 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/input.ts#L1023)

```typescript
public push(bubble: boolean): void {
    this.stack[++this.index] = bubble
  }
```

---



文档生成时间：2026/1/31 13:13:59
