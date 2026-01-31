---
sidebar_position: 1
title: trim 剔除已销毁的角色
---

## trim

**类型**: `MethodDeclaration`

**定义位置**: [`filter.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/filter.ts)

### 描述

剔除已销毁的角色

### 返回值

类型: `void`

### 源代码

**位置**: [第 184 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/filter.ts#L184)

```typescript
private trim(): void {
    const actors = this.actorList
    const map = this.actorColorMap
    let i = actors.length
    while (--i >= 0) {
      if (actors[i].destroyed) {
        map.delete(actors[i])
        actors.splice(i, 1)
      }
    }
  }
```

---



文档生成时间：2026/1/31 13:13:59
