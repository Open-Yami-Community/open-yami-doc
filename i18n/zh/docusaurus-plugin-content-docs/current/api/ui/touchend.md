---
sidebar_position: 1
title: touchend 触摸结束事件
---

## touchend

**类型**: `MethodDeclaration`

**定义位置**: [`ui.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts)

### 描述

触摸结束事件

参数 `event`: 脚本触摸事件

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `event` | `ScriptTouchEvent` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 816 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts#L816)

```typescript
private touchend(event: ScriptTouchEvent): void {
    ScriptTouchEvent.deleteChangedTargetTouches(event)
    for (const copy of ScriptTouchEvent.forEachElement(event)) {
      if (copy.target instanceof UIElement) {
        Input.bubbles.push(true)
        copy.target.emit('touchend', event, true)
        Input.bubbles.pop()
      }
    }
    if (!ScriptTouchEvent.loadGlobalTouchEvent(event)) {
      Input.bubbles.stop()
    }
  }
```

---



文档生成时间：2026/1/31 13:13:59
