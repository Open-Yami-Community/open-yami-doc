---
sidebar_position: 1
title: wheel 鼠标滚轮事件
---

## wheel

**类型**: `MethodDeclaration`

**定义位置**: [`ui.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts)

### 描述

鼠标滚轮事件

参数 `event`: 脚本滚轮事件

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `event` | `ScriptWheelEvent` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 957 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts#L957)

```typescript
private wheel(event: ScriptWheelEvent): void {
    if (UI.eventHover !== null) {
      UI.eventHover.emit('wheel', event, true)
      UI._updateBubbleState(UI.eventHover)
    }
  }
```

---



文档生成时间：2026/1/31 13:13:59
