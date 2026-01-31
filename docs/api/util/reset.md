---
sidebar_position: 1
title: reset 重置
---

## reset

**类型**: `MethodDeclaration`

**所属类**: `ModuleList`

**定义位置**: [`util.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/util.ts)

### 描述

重置

### 返回值

类型: `void`

### 源代码

**位置**: [第 561 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/util.ts#L561)

```typescript
public reset(): void {
    this.length = 0
    const map = this.moduleMap
    for (const key of Object.keys(map)) {
      delete map[key]
    }
  }
```

---



文档生成时间：2026/1/31 13:13:59
