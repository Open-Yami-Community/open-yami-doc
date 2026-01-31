---
sidebar_position: 1
title: createEasingMap 创建过渡映射表
---

## createEasingMap

**类型**: `MethodDeclaration`

**定义位置**: [`data.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/data.ts)

### 描述

创建过渡映射表

### 返回值

类型: `void`

### 源代码

**位置**: [第 685 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/data.ts#L685)

```typescript
private createEasingMap(): void {
    const easings: HashMap<EasingData> = {}
    const keyRemap: HashMap<string> = {}
    for (const item of this.easings as unknown as Array<EasingData>) {
      easings[item.id] = item
      keyRemap[item.id] = item.id
      if (item.key) {
        keyRemap[item.key] = item.id
      }
    }
    this.easings = easings
  }
```

---



文档生成时间：2026/1/31 13:13:58
