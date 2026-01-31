---
sidebar_position: 1
title: deleteTexture 删除精灵图纹理
---

## deleteTexture

**类型**: `MethodDeclaration`

**所属类**: `AnimationPlayer`

**定义位置**: [`animation.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/animation.ts)

### 描述

删除精灵图纹理

参数 `spriteId`: 精灵图ID

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `spriteId` | `string` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 651 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/animation.ts#L651)

```typescript
public deleteTexture(spriteId: string): void {
    const {textures} = this
    if (spriteId in textures) {
      textures[spriteId]?.destroy()
      delete textures[spriteId]
    }
  }
```

---



文档生成时间：2026/1/31 13:13:58
