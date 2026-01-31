---
sidebar_position: 1
title: updateLoadingStats 更新统计数据
---

## updateLoadingStats

**类型**: `MethodDeclaration`

**定义位置**: [`loader.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/loader.ts)

### 描述

更新统计数据

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `loaded` | `number` | - | - |
| `total` | `number` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 345 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/loader.ts#L345)

```typescript
private updateLoadingStats(loaded: number, total: number): void {
    this.loadedBytes = loaded
    this.totalBytes = total
    this.completionProgress = loaded / (total || Infinity)
  }
```

---



文档生成时间：2026/1/31 13:13:59
