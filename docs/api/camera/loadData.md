---
sidebar_position: 1
title: loadData 加载摄像机数据
---

## loadData

**类型**: `MethodDeclaration`

**定义位置**: [`camera.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/camera.ts)

### 描述

加载摄像机数据

参数 `camera`: 摄像机存档数据

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `camera` | `CameraSaveData` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 383 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/camera.ts#L383)

```typescript
public loadData(camera: CameraSaveData): void {
    this.x = camera.x
    this.y = camera.y
    this.setZoomFactor(camera.zoom)
    // 获取摄像机跟随的全局角色或场景角色(如果有)
    const entityId = camera.target
    const target = GlobalEntityManager.get(entityId) as Actor | undefined
    if (target) {
      this.follow(target)
    }
  }
```

---



文档生成时间：2026/1/31 13:13:58
