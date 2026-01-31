---
sidebar_position: 1
title: mouseup 鼠标弹起事件
---

## mouseup

**类型**: `MethodDeclaration`

**定义位置**: [`scene.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/scene.ts)

### 描述

鼠标弹起事件

参数 `event`: 脚本鼠标事件

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `event` | `ScriptMouseEvent` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 259 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/scene.ts#L259)

```typescript
private mouseup(event: ScriptMouseEvent): void {
    if (Scene.preventInputEvents !== 0) return
    const target = Scene.getActorAtMouse()
    target?.emit('mouseup', event)
  }
```

---



文档生成时间：2026/1/31 13:13:59
