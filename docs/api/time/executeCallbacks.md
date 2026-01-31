---
sidebar_position: 1
title: executeCallbacks 执行时间缩放过渡结束回调
---

## executeCallbacks

**类型**: `MethodDeclaration`

**定义位置**: [`time.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/time.ts)

### 描述

执行时间缩放过渡结束回调

### 返回值

类型: `void`

### 源代码

**位置**: [第 149 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/time.ts#L149)

```typescript
private executeCallbacks(): void {
    if (this.callbacks !== null) {
      for (const callback of this.callbacks) {
        callback()
      }
      this.callbacks = null
    }
  }
```

---



文档生成时间：2026/1/31 13:13:59
