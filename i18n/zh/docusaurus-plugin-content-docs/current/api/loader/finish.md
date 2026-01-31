---
sidebar_position: 1
title: finish 完成加载
---

## finish

**类型**: `MethodDeclaration`

**定义位置**: [`loader.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/loader.ts)

### 描述

完成加载

### 返回值

类型: `void`

### 源代码

**位置**: [第 28 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/loader.ts#L28)

```typescript
private finish(): void {
    if (this.loadingProgressList.length !== 0) {
      this.loadingProgressList.length = 0
      this.complete = true
      this.loadedBytes = 0
      this.totalBytes = 0
      this.completionProgress = 0
      this.resolve()
    }
  }
```

---



文档生成时间：2026/1/31 13:13:59
