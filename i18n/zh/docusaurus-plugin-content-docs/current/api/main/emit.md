---
sidebar_position: 1
title: emit 发送游戏事件
---

## emit

**类型**: `MethodDeclaration`

**定义位置**: [`main.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/main.ts)

### 描述

发送游戏事件

参数 `type`: 游戏事件类型

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `type` | `GameEventType` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 195 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/main.ts#L195)

```typescript
public emit(type: GameEventType): void {
    for (const listener of this.listeners[type]) {
      listener()
    }
  }
```

---



文档生成时间：2026/1/31 13:13:59
