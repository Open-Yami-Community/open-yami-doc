---
sidebar_position: 1
title: isWindows 判断是不是Windows平台
---

## isWindows

**类型**: `MethodDeclaration`

**定义位置**: [`util.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/util.ts)

### 描述

判断是不是Windows平台

返回值:是否运行在Windows平台

### 返回值

类型: `boolean`

是否运行在Windows平台

### 源代码

**位置**: [第 13 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/util.ts#L13)

```typescript
public isWindows(): boolean {
    return navigator.userAgentData
    ? navigator.userAgentData.platform === 'Windows'
    : navigator.platform.indexOf('Win') === 0
  }
```

---



文档生成时间：2026/1/31 13:13:59
