---
sidebar_position: 1
title: initialize 初始化消息报告器
---

## initialize

**类型**: `MethodDeclaration`

**所属类**: `CacheList`

**定义位置**: [`util.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/util.ts)

### 描述

初始化消息报告器

### 返回值

类型: `void`

### 源代码

**位置**: [第 645 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/util.ts#L645)

```typescript
public initialize(): void {
    if (Stats.debug) {
      // 侦听同步错误事件
      window.on('error', this.catchError)
      // 侦听异步错误事件
      window.on('unhandledrejection', this.catchRejection)
    }
  }
```

---



文档生成时间：2026/1/31 13:13:59
