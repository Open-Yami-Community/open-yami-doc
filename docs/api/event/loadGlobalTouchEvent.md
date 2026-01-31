---
sidebar_position: 1
title: loadGlobalTouchEvent 加载全局触摸事件
---

## loadGlobalTouchEvent

**类型**: `MethodDeclaration`

**所属类**: `ScriptTouchEvent`

**定义位置**: [`event.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/event.ts)

### 描述

加载全局触摸事件

参数 `event`: 脚本触摸事件

返回值:是否加载成功

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `event` | `ScriptTouchEvent` | - | - |

### 返回值

类型: `boolean`

是否加载成功

### 源代码

**位置**: [第 1506 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/event.ts#L1506)

```typescript
public static loadGlobalTouchEvent(event: ScriptTouchEvent): boolean {
    for (const touch of event.changedTouches) {
      const target = ScriptTouchEvent.idToTargetMap.get(touch.id)
      if (target === null) {
        ScriptTouchEvent.loadTargetTouches(event, null)
        return true
      }
    }
    return false
  }
```

---



文档生成时间：2026/1/31 13:13:59
