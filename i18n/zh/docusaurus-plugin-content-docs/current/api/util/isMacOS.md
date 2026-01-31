---
sidebar_position: 1
title: isMacOS 判断是不是MacOS平台
---

## isMacOS

**类型**: `MethodDeclaration`

**定义位置**: [`util.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/util.ts)

### 描述

判断是不是MacOS平台

返回值:是否运行在MacOS平台

### 返回值

类型: `boolean`

是否运行在MacOS平台

### 源代码

**位置**: [第 23 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/util.ts#L23)

```typescript
public isMacOS(): boolean {
    return navigator.userAgentData
    ? navigator.userAgentData.platform === 'macOS'
    : navigator.platform.indexOf('Mac') === 0
  }
```

---



文档生成时间：2026/1/31 13:13:59
