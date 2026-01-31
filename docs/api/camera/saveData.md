---
sidebar_position: 1
title: saveData 保存摄像机数据
---

## saveData

**类型**: `MethodDeclaration`

**定义位置**: [`camera.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/camera.ts)

### 描述

保存摄像机数据

返回值:摄像机存档数据

### 返回值

类型: `CameraSaveData`

摄像机存档数据

### 源代码

**位置**: [第 370 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/camera.ts#L370)

```typescript
public saveData(): CameraSaveData {
    return {
      target: this.target?.entityId ?? '',
      x: this.x,
      y: this.y,
      zoom: this.rawZoom,
    }
  }
```

---



文档生成时间：2026/1/31 13:13:58
