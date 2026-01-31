---
sidebar_position: 1
title: createAutotileMap 创建自动图块模板数据映射表
---

## createAutotileMap

**类型**: `MethodDeclaration`

**定义位置**: [`data.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/data.ts)

### 描述

创建自动图块模板数据映射表

### 返回值

类型: `void`

### 源代码

**位置**: [第 676 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/data.ts#L676)

```typescript
private createAutotileMap(): void {
    const autotiles: HashMap<AutoTileTemplate> = {}
    for (const item of this.autotiles as unknown as Array<AutoTileTemplate>) {
      autotiles[item.id] = item
    }
    this.autotiles = autotiles
  }
```

---



文档生成时间：2026/1/31 13:13:58
