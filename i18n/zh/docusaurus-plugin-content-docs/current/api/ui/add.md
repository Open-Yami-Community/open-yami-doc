---
sidebar_position: 1
title: add 添加元素到管理器
---

## add

**类型**: `MethodDeclaration`

**所属类**: `UIEntityManager`

**定义位置**: [`ui.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts)

### 描述

添加元素到管理器

参数 `element`: 元素实例

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `element` | `UIElement` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 6261 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts#L6261)

```typescript
public override add(element: UIElement): void {
    super.add(element)

    // 添加元素到引用ID映射表
    if (element.referenceId !== '') {
      this.referenceIdMap[element.referenceId] = element
    }
  }
```

---



文档生成时间：2026/1/31 13:13:59
