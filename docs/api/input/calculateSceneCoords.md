---
sidebar_position: 1
title: calculateSceneCoords 计算场景坐标
---

## calculateSceneCoords

**类型**: `MethodDeclaration`

**定义位置**: [`input.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/input.ts)

### 描述

计算场景坐标

### 返回值

类型: `void`

### 源代码

**位置**: [第 627 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/input.ts#L627)

```typescript
private calculateSceneCoords(): void {
    const {x, y} = this.convertScreenToSceneCoords(this.screenX, this.screenY)
    if (this.sceneX !== x || this.sceneY !== y) {
      this.sceneX = x
      this.sceneY = y
      Input.emit('scenemousemove', this.eventCache)
    }
  }
```

---



文档生成时间：2026/1/31 13:13:59
