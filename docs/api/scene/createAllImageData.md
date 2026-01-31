---
sidebar_position: 1
title: createAllImageData 创建所有图像数据
---

## createAllImageData

**类型**: `MethodDeclaration`

**所属类**: `SceneTilemap`

**定义位置**: [`scene.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/scene.ts)

### 描述

创建所有图像数据

### 返回值

类型: `void`

### 源代码

**位置**: [第 2911 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/scene.ts#L2911)

```typescript
private createAllImageData(): void {
    const tiles = this.tiles
    const length = tiles.length
    for (let i = 0; i < length; i++) {
      this.createImageData(tiles[i])
    }
  }
```

---



文档生成时间：2026/1/31 13:13:59
