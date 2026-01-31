---
sidebar_position: 1
title: initialize 初始化
---

## initialize

**类型**: `MethodDeclaration`

**定义位置**: [`input.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/input.ts)

### 描述

初始化

### 返回值

类型: `void`

### 源代码

**位置**: [第 904 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/input.ts#L904)

```typescript
public initialize(): void {
    window.on('keydown', this.keydown.bind(this), {capture: true})
    window.on('keyup', this.keyup.bind(this), {capture: true})
  }
```

---



文档生成时间：2026/1/31 13:13:59
