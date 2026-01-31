---
sidebar_position: 1
title: autorun 
---

## autorun

**类型**: `MethodDeclaration`

**所属类**: `SceneParticleEmitter`

**定义位置**: [`scene.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/scene.ts)

### 返回值

类型: `void`

### 源代码

**位置**: [第 5477 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/scene.ts#L5477)

```typescript
public autorun(): void {
    if (this.started === false) {
      this.started = true
      this.emit('autorun')
    }
  }
```

---



文档生成时间：2026/1/31 13:13:59
