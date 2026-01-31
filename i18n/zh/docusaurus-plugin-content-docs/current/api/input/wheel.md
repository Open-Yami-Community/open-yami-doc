---
sidebar_position: 1
title: wheel 鼠标滚轮事件
---

## wheel

**类型**: `MethodDeclaration`

**定义位置**: [`input.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/input.ts)

### 描述

鼠标滚轮事件

参数 `event`: 滚轮事件

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `event` | `WheelEvent` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 584 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/input.ts#L584)

```typescript
private wheel(event: WheelEvent): void {
    Input.emit('wheel', new ScriptWheelEvent(event))
  }
```

---



文档生成时间：2026/1/31 13:13:59
