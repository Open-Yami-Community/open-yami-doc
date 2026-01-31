---
sidebar_position: 1
title: get 从映射表中获取元素实例
---

## get

**类型**: `MethodDeclaration`

**所属类**: `UIEntityManager`

**定义位置**: [`ui.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts)

### 描述

从映射表中获取元素实例

参数 `key`: 实体ID/预设ID/引用ID/名称

返回值:返回元素实例

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `key` | `string` | - | - |

### 返回值

类型: `UIElement \| undefined`

返回元素实例

### 源代码

**位置**: [第 6253 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts#L6253)

```typescript
public override get(key: string): UIElement | undefined {
    return (super.get(key) ?? this.referenceIdMap[key]) as UIElement | undefined
  }
```

---



文档生成时间：2026/1/31 13:13:59
