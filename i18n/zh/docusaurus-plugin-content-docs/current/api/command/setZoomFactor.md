---
sidebar_position: 1
title: setZoomFactor 设置缩放率
---

## setZoomFactor

**类型**: `MethodDeclaration`

**所属类**: `CommandFunctionList`

**定义位置**: [`command.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts)

### 描述

设置缩放率

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `\{zoom, easingId, duration, wait\}` | `\{
    zoom\: number \| VariableGetter
    easingId\: string
    duration\: number
    wait\: boolean
  \}` | - | - |

### 返回值

类型: `CommandFunction`

### 源代码

**位置**: [第 8355 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts#L8355)

```typescript
protected setZoomFactor({zoom, easingId, duration, wait}: {
    zoom: number | VariableGetter
    easingId: string
    duration: number
    wait: boolean
  }): CommandFunction {
    const getZoom = Command.compileNumber(zoom, 1, 1, 8)
    const getDuration = Command.compileNumber(duration)
    return () => {
      const zoom = getZoom()
      const duration = getDuration()
      Camera.setZoomFactor(zoom, easingId, duration)
      if (wait && duration > 0) {
        return CurrentEvent.wait(duration)
      }
      return true
    }
  }
```

---



文档生成时间：2026/1/31 13:13:58
