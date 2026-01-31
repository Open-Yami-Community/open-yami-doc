---
sidebar_position: 1
title: destroy 销毁图层中的粒子纹理
---

## destroy

**类型**: `MethodDeclaration`

**所属类**: `ParticleLayer`

**定义位置**: [`animation.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/animation.ts)

### 描述

销毁图层中的粒子纹理

### 返回值

类型: `void`

### 源代码

**位置**: [第 1859 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/animation.ts#L1859)

```typescript
public destroy(): void {
    if (this.texture instanceof ImageTexture) {
      this.texture.destroy()
      this.texture = null
    }
  }
```

---



文档生成时间：2026/1/31 13:13:58
