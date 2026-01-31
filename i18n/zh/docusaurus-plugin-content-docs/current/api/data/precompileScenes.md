---
sidebar_position: 1
title: precompileScenes 预编译场景数据
---

## precompileScenes

**类型**: `MethodDeclaration`

**定义位置**: [`data.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/data.ts)

### 描述

预编译场景数据

### 返回值

类型: `void`

### 源代码

**位置**: [第 309 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/data.ts#L309)

```typescript
private precompileScenes(): void {
    for (const scene of Object.values(this.scenes) as Array<SceneFile>) {
      this.compileEvents(scene, scene.path)
    }
  }
```

---



文档生成时间：2026/1/31 13:13:58
