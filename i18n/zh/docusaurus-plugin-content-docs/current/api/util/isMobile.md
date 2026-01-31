---
sidebar_position: 1
title: isMobile 判断是不是移动平台
---

## isMobile

**类型**: `MethodDeclaration`

**定义位置**: [`util.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/util.ts)

### 描述

判断是不是移动平台

返回值:是否运行在移动平台

### 返回值

类型: `void`

是否运行在移动平台

### 源代码

**位置**: [第 33 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/util.ts#L33)

```typescript
public isMobile() {
    return navigator.userAgentData?.mobile ??
    /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent)
  }
```

---



文档生成时间：2026/1/31 13:13:59
