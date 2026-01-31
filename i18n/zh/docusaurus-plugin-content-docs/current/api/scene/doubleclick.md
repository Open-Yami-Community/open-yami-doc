---
sidebar_position: 1
title: doubleclick 鼠标双击事件
---

## doubleclick

**类型**: `MethodDeclaration`

**定义位置**: [`scene.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/scene.ts)

### 描述

鼠标双击事件

参数 `event`: 脚本鼠标事件

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `event` | `ScriptMouseEvent` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 325 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/scene.ts#L325)

```typescript
private doubleclick(event: ScriptMouseEvent): void {
    if (Scene.preventInputEvents !== 0) return
    if (Scene.eventTarget !== null) {
      Scene.eventTarget.emit('doubleclick', event)
    }
  }
```

---



文档生成时间：2026/1/31 13:13:59
