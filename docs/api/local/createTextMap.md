---
sidebar_position: 1
title: createTextMap 创建本地化映射表
---

## createTextMap

**类型**: `MethodDeclaration`

**定义位置**: [`local.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/local.ts)

### 描述

创建本地化映射表

### 返回值

类型: `void`

### 源代码

**位置**: [第 26 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/local.ts#L26)

```typescript
private createTextMap(): void {
    const map = this.textMap
    const set = (items: LocalizationTextList) => {
      for (const item of items) {
        if ('children' in item) {
          set(item.children)
        } else {
          map[item.id] = item
        }
      }
    }
    set(Data.localization.list)
  }
```

---



文档生成时间：2026/1/31 13:13:59
