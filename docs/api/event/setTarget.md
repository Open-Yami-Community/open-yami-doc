---
sidebar_position: 1
title: setTarget 设置目标元素
---

## setTarget

**类型**: `MethodDeclaration`

**所属类**: `ScriptTouchEvent`

**定义位置**: [`event.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/event.ts)

### 描述

设置目标元素

参数 `event`: 脚本触摸事件

参数 `touch`: 触摸点

参数 `target`: 目标元素

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `event` | `ScriptTouchEvent` | - | - |
| `touch` | `TouchPoint` | - | - |
| `target` | `UIElement \| null` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 1445 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/event.ts#L1445)

```typescript
public static setTarget(event: ScriptTouchEvent, touch: TouchPoint, target: UIElement | null): void {
    event.target = target
    ScriptTouchEvent.idToTargetMap.set(touch.id, target)
    const idList = ScriptTouchEvent.targetToIdListMap.get(target)
    if (idList instanceof Array) {
      idList.append(touch.id)
    } else {
      ScriptTouchEvent.targetToIdListMap.set(target, [touch.id])
    }
  }
```

---



文档生成时间：2026/1/31 13:13:59
