---
sidebar_position: 1
title: getActorAtMouse 获取鼠标位置的角色
---

## getActorAtMouse

**类型**: `MethodDeclaration`

**定义位置**: [`scene.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/scene.ts)

### 描述

获取鼠标位置的角色

返回值:角色实例

### 返回值

类型: `Actor \| undefined`

角色实例

### 源代码

**位置**: [第 336 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/scene.ts#L336)

```typescript
public getActorAtMouse(): Actor | undefined {
    const selection = Scene.selection
    if (selection.timestamp !== Time.timestamp) {
      selection.timestamp = Time.timestamp
      selection.actor = Scene.getActorAt(Mouse.sceneX, Mouse.sceneY)
    }
    return selection.actor
  }
```

---



文档生成时间：2026/1/31 13:13:59
