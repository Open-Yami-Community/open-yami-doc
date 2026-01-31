---
sidebar_position: 1
title: requestResizing 请求调整窗口元素(过滤重复请求)
---

## requestResizing

**类型**: `MethodDeclaration`

**所属类**: `WindowElement`

**定义位置**: [`ui.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts)

### 描述

请求调整窗口元素(过滤重复请求)

### 返回值

类型: `void`

### 源代码

**位置**: [第 5997 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts#L5997)

```typescript
public requestResizing(): void {
    // 忽略同一帧内的重复请求
    if (!this.requesting) {
      this.requesting = true
      Callback.push(() => {
        delete this.requesting
        this.resize()
      })
    }
  }
```

---



文档生成时间：2026/1/31 13:13:59
