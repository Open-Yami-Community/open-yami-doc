---
sidebar_position: 1
title: createAnimation 创建动画
---

## createAnimation

**类型**: `MethodDeclaration`

**所属类**: `SceneContext`

**定义位置**: [`scene.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/scene.ts)

### 描述

创建动画

参数 `node`: 预设动画数据

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `node` | `SceneAnimationData` | - | - |

### 返回值

类型: `SceneAnimation \| undefined`

### 源代码

**位置**: [第 1276 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/scene.ts#L1276)

```typescript
public createAnimation(node: SceneAnimationData): SceneAnimation | undefined {
    const data = node.data
    if (data) {
      const animation = new SceneAnimation(data, node)
      animation.selfVarId = node.presetId
      animation.setMotion(node.motion)
      animation.setAngle(Math.radians(node.angle))
      this.animation.append(animation)
      return Scene.latest = animation
    }
    return undefined
  }
```

---



文档生成时间：2026/1/31 13:13:59
