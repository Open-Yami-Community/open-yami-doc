---
sidebar_position: 1
title: generate64bit 生成64位GUID(16个字符)
---

## generate64bit

**类型**: `MethodDeclaration`

**所属类**: `LoadingProgress`

**定义位置**: [`loader.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/loader.ts)

### 描述

生成64位GUID(16个字符)

返回值:64位GUID

### 返回值

类型: `string`

64位GUID

### 源代码

**位置**: [第 407 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/loader.ts#L407)

```typescript
public generate64bit(): string {
    let id: string
    // GUID通常用作哈希表的键
    // 避免纯数字的键(会降低访问速度)
    do {id = this.generate32bit() + this.generate32bit()}
    while (!this.regExpForChecking.test(id))
    return id
  }
```

---



文档生成时间：2026/1/31 13:13:59
