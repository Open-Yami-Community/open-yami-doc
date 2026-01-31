---
sidebar_position: 1
title: remove 从管理器中移除元素
---

## remove

**类型**: `MethodDeclaration`

**所属类**: `UIEntityManager`

**定义位置**: [`ui.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts)

### 描述

从管理器中移除元素

参数 `element`: 元素实例

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `element` | `UIElement` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 6274 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts#L6274)

```typescript
public override remove(element: UIElement): void {
    super.remove(element)

    // 从引用ID映射表中移除元素
    if (this.referenceIdMap[element.referenceId] === element) {
      delete this.referenceIdMap[element.referenceId]
    }
  }
```

---



文档生成时间：2026/1/31 13:13:59
