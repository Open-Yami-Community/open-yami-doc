---
sidebar_position: 1
title: initialize 初始化
---

## initialize

**类型**: `MethodDeclaration`

**所属类**: `Timer`

**定义位置**: [`time.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/time.ts)

### 描述

初始化

### 返回值

类型: `void`

### 源代码

**位置**: [第 306 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/time.ts#L306)

```typescript
public initialize(): void {
    // 生成{键:ID}重映射表
    for (const { id, key } of Object.values(Data.easings) as Array<EasingData>) {
      this.keyRemap[id] = id
      if (key) {
        this.keyRemap[key] = id
      }
    }
  }
```

---



文档生成时间：2026/1/31 13:13:59
