---
sidebar_position: 1
title: deleteChangedTargets 删除变动的目标
---

## deleteChangedTargets

**类型**: `MethodDeclaration`

**所属类**: `ScriptTouchEvent`

**定义位置**: [`event.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/event.ts)

### 描述

删除变动的目标

参数 `event`: 脚本触摸事件

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `event` | `ScriptTouchEvent` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 1473 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/event.ts#L1473)

```typescript
public static deleteChangedTargets(event: ScriptTouchEvent): void {
    for (const touch of event.changedTouches) {
      const target = ScriptTouchEvent.idToTargetMap.get(touch.id)
      if (target !== undefined) {
        ScriptTouchEvent.idToTargetMap.delete(touch.id)
        ScriptTouchEvent.targetToIdListMap.delete(target)
      }
    }
  }
```

---



文档生成时间：2026/1/31 13:13:59
