---
sidebar_position: 1
title: generate32bit 生成32位GUID(8个字符)
---

## generate32bit

**类型**: `MethodDeclaration`

**所属类**: `LoadingProgress`

**定义位置**: [`loader.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/loader.ts)

### 描述

生成32位GUID(8个字符)

返回值:32位GUID

### 返回值

类型: `string`

32位GUID

### 源代码

**位置**: [第 397 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/loader.ts#L397)

```typescript
public generate32bit(): string {
    const n = Math.random() * 0x100000000
    const s = Math.floor(n).toString(16)
    return s.length === 8 ? s : s.padStart(8, '0')
  }
```

---



文档生成时间：2026/1/31 13:13:59
