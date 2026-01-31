---
sidebar_position: 1
title: query 查询属性匹配的后代元素
---

## query

**类型**: `MethodDeclaration`

**所属类**: `UIElement`

**定义位置**: [`ui.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts)

### 描述

查询属性匹配的后代元素

参数 `key`: 属性键

参数 `value`: 属性值

返回值:元素实例

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `key` | `string` | - | - |
| `value` | `any` | - | - |

### 返回值

类型: `UIElement \| undefined`

元素实例

### 源代码

**位置**: [第 1625 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts#L1625)

```typescript
public query(key: string, value: any): UIElement | undefined {
    // 优先在自己的子元素列表中查找
    for (const element of this.children as Array<any>) {
      if (element[key] === value) return element
    }
    // 如果没有发现，继续深入查找
    for (const element of this.children) {
      const target = element.query(key, value)
      if (target !== undefined) return target
    }
    return undefined
  }
```

---



文档生成时间：2026/1/31 13:13:59
