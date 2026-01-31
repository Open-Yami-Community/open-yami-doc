---
sidebar_position: 1
title: loadContexts 加载动画图层上下文列表
---

## loadContexts

**类型**: `MethodDeclaration`

**所属类**: `AnimationPlayer`

**定义位置**: [`animation.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/animation.ts)

### 描述

加载动画图层上下文列表

参数 `animation`: 动画播放器实例

参数 `contexts`: 动画图层上下文列表

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `animation` | `AnimationPlayer` | - | - |
| `contexts` | `CacheList&lt;AnimationFrameContext&gt;` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 1001 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/animation.ts#L1001)

```typescript
private static loadContexts(animation: AnimationPlayer, contexts: CacheList<AnimationFrameContext>): void {
    contexts.count = 0
    if (animation.layers !== null) {
      // 如果动画已设置动作，加载所有图层上下文
      this._loadContext(animation, animation.layers, null, contexts)
    }
  }
```

---



文档生成时间：2026/1/31 13:13:58
