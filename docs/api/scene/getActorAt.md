---
sidebar_position: 1
title: getActorAt 获取指定位置的角色
---

## getActorAt

**类型**: `MethodDeclaration`

**定义位置**: [`scene.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/scene.ts)

### 描述

获取指定位置的角色

返回值:角色实例

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `x` | `number` | - | - |
| `y` | `number` | - | - |

### 返回值

类型: `Actor \| undefined`

角色实例

### 源代码

**位置**: [第 349 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/scene.ts#L349)

```typescript
public getActorAt(x: number, y: number): Actor | undefined {
    if (!Scene.binding) {
      return undefined
    }
    const selection = Scene.selection
    const maxHalf = Scene.binding.maxColliderHalf
    const expansion = Math.max(
      Math.abs(selection.top),
      Math.abs(selection.left),
      Math.abs(selection.right),
      Math.abs(selection.bottom),
    )
    selection.x = x
    selection.y = y
    selection.size = (maxHalf + expansion) * 2
    return Scene.binding.getActor(selection)
  }
```

---



文档生成时间：2026/1/31 13:13:59
