---
sidebar_position: 1
title: render 
---

## render

**类型**: `MethodDeclaration`

**所属类**: `SceneDirectLightRenderer`

**定义位置**: [`scene.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/scene.ts)

### 返回值

类型: `void`

### 源代码

**位置**: [第 5949 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/scene.ts#L5949)

```typescript
public render(): void {
    GL.blend = 'additive'
    GL.drawImage(GL.directLightMap, 0, 0, GL.width, GL.height)
  }
```

---



文档生成时间：2026/1/31 13:13:59
