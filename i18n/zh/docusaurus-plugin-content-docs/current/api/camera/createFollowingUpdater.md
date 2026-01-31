---
sidebar_position: 1
title: createFollowingUpdater 创建跟随目标角色的更新器
---

## createFollowingUpdater

**类型**: `MethodDeclaration`

**定义位置**: [`camera.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/camera.ts)

### 描述

创建跟随目标角色的更新器

返回值:更新器模块

### 返回值

类型: `UpdaterModule`

更新器模块

### 源代码

**位置**: [第 399 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/camera.ts#L399)

```typescript
public createFollowingUpdater(): UpdaterModule {
    return {
      update: () => {
        if (this.target?.destroyed === false) {
          // 如果角色未销毁则跟随
          this.x = this.target.x
          this.y = this.target.y
        } else {
          // 否则解除摄像机跟随
          this.target = null
          this.updaters.deleteDelay('move')
        }
      }
    }
  }
```

---



文档生成时间：2026/1/31 13:13:58
