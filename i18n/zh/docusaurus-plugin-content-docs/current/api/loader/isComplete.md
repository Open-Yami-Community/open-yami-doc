---
sidebar_position: 1
title: isComplete 是否加载完成
---

## isComplete

**类型**: `MethodDeclaration`

**所属类**: `LoadingProgress`

**定义位置**: [`loader.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/loader.ts)

### 描述

是否加载完成

返回值:完成状态

### 返回值

类型: `boolean`

完成状态

### 源代码

**位置**: [第 382 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/loader.ts#L382)

```typescript
public isComplete(): boolean {
    return this.lengthComputable && this.loaded === this.total
  }
```

---



文档生成时间：2026/1/31 13:13:59
