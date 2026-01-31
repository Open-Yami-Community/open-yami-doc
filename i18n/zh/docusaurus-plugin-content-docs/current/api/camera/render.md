---
sidebar_position: 1
title: render 更新摄像机的位置以及相关参数
---

## render

**类型**: `MethodDeclaration`

**定义位置**: [`camera.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/camera.ts)

### 描述

更新摄像机的位置以及相关参数

渲染前再次更新以避免可能出现不同步的问题

### 返回值

类型: `void`

### 源代码

**位置**: [第 362 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/camera.ts#L362)

```typescript
public render(): void {
    this.update(0)
  }
```

---



文档生成时间：2026/1/31 13:13:58
