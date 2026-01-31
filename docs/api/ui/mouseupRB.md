---
sidebar_position: 1
title: mouseupRB 鼠标右键弹起事件
---

## mouseupRB

**类型**: `MethodDeclaration`

**定义位置**: [`ui.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts)

### 描述

鼠标右键弹起事件

参数 `event`: 脚本鼠标事件

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `event` | `ScriptMouseEvent` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 897 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts#L897)

```typescript
private mouseupRB(event: ScriptMouseEvent): void {
    const target = UI.getElementAtMouse()
    target.emit('mouseupRB', event, true)
    UI._updateBubbleState(target)
  }
```

---



文档生成时间：2026/1/31 13:13:59
