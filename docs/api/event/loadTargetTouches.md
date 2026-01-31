---
sidebar_position: 1
title: loadTargetTouches 加载目标触摸点
---

## loadTargetTouches

**类型**: `MethodDeclaration`

**所属类**: `ScriptTouchEvent`

**定义位置**: [`event.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/event.ts)

### 描述

加载目标触摸点

参数 `event`: 脚本触摸事件

参数 `target`: 目标元素

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `event` | `ScriptTouchEvent` | - | - |
| `target` | `UIElement \| null` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 1488 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/event.ts#L1488)

```typescript
private static loadTargetTouches(event: ScriptTouchEvent, target: UIElement | null): void {
    event.target = target
    const idList = ScriptTouchEvent.targetToIdListMap.get(event.target)
    if (idList instanceof Array) {
      for (let i = 0; i < idList.length; i++) {
        const touch = event.getTouch(idList[i])
        if (touch instanceof TouchPoint) {
          event.targetTouches.append(touch)
        }
      }
    }
  }
```

---



文档生成时间：2026/1/31 13:13:59
