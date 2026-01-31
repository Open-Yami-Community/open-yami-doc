---
sidebar_position: 1
title: forEachElement 遍历每个目标元素
---

## forEachElement

**类型**: `MethodDeclaration`

**所属类**: `ScriptTouchEvent`

**定义位置**: [`event.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/event.ts)

### 描述

遍历每个目标元素

参数 `event`: 脚本触摸事件

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `event` | `ScriptTouchEvent` | - | - |

### 返回值

类型: `Generator&lt;ScriptTouchEvent&gt;`

### 源代码

**位置**: [第 1427 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/event.ts#L1427)

```typescript
public static *forEachElement(event: ScriptTouchEvent): Generator<ScriptTouchEvent> {
    const filters: Array<UIElement> = []
    for (const touch of event.changedTouches) {
      const target = ScriptTouchEvent.idToTargetMap.get(touch.id)
      if (target instanceof UIElement && filters.append(target)) {
        const copy = new ScriptTouchEvent(event)
        ScriptTouchEvent.loadTargetTouches(copy, target)
        yield copy
      }
    }
  }
```

---



文档生成时间：2026/1/31 13:13:59
