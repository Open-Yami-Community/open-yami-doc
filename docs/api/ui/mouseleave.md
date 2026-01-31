---
sidebar_position: 1
title: mouseleave 鼠标离开事件
---

## mouseleave

**类型**: `MethodDeclaration`

**定义位置**: [`ui.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts)

### 描述

鼠标离开事件

参数 `event`: 脚本鼠标事件

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `event` | `ScriptMouseEvent` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 935 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts#L935)

```typescript
private mouseleave(event: ScriptMouseEvent): void {
    if (UI.eventHover !== null) {
      UI.eventHover.emit('mouseleave', event, true)
      UI.eventHover = null
    }
  }
```

---



文档生成时间：2026/1/31 13:13:59
