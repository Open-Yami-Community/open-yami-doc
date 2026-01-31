---
sidebar_position: 1
title: getTexture 获取精灵图纹理
---

## getTexture

**类型**: `MethodDeclaration`

**所属类**: `AnimationPlayer`

**定义位置**: [`animation.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/animation.ts)

### 描述

获取精灵图纹理

参数 `spriteId`: 精灵图ID

返回值:已加载完成的纹理

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `spriteId` | `string` | - | - |

### 返回值

类型: `ImageTexture \| undefined`

已加载完成的纹理

### 源代码

**位置**: [第 600 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/animation.ts#L600)

```typescript
public getTexture(spriteId: string): ImageTexture | undefined {
    let texture = this.textures[spriteId]
    // 初次访问需要先创建纹理
    if (texture === undefined) {
      texture = this.loadTexture(spriteId)
      if (texture === undefined) {
        return undefined
      }
    }
    return texture.complete ? texture : undefined
  }
```

---



文档生成时间：2026/1/31 13:13:58
