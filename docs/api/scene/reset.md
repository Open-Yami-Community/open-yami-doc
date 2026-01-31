---
sidebar_position: 1
title: reset 重置所有数据
---

## reset

**类型**: `MethodDeclaration`

**所属类**: `SceneSpriteRenderer`

**定义位置**: [`scene.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/scene.ts)

### 描述

重置所有数据

### 返回值

类型: `void`

### 源代码

**位置**: [第 5548 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/scene.ts#L5548)

```typescript
public reset(): void {
    for (const animList of this.animationLists) {
      animList.clear()
    }
  }
```

---



文档生成时间：2026/1/31 13:13:59
