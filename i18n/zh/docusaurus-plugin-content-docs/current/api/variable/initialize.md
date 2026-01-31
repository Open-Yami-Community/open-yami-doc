---
sidebar_position: 1
title: initialize 初始化枚举管理器
---

## initialize

**类型**: `MethodDeclaration`

**定义位置**: [`variable.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/variable.ts)

### 描述

初始化枚举管理器

### 返回值

类型: `void`

### 源代码

**位置**: [第 669 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/variable.ts#L669)

```typescript
public initialize(): void {
    this.unpack(Data.enumeration!.strings, [])
    delete Data.enumeration
  }
```

---



文档生成时间：2026/1/31 13:13:59
