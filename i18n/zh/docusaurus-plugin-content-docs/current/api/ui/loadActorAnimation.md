---
sidebar_position: 1
title: loadActorAnimation 加载角色动画
---

## loadActorAnimation

**类型**: `MethodDeclaration`

**所属类**: `AnimationElement`

**定义位置**: [`ui.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts)

### 描述

加载角色动画

参数 `actor`: 角色实例

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `actor` | `Actor` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 5274 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts#L5274)

```typescript
public loadActorAnimation(actor: Actor): void {
    const animation = actor.animation
    if (animation instanceof AnimationPlayer &&
      this.player instanceof AnimationPlayer) {
      this.animation = ''
      this.animation = animation.data.id
      this.player.images = animation.images
    }
  }
```

---



文档生成时间：2026/1/31 13:13:59
