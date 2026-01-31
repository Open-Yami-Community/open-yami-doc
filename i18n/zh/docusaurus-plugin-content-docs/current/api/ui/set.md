---
sidebar_position: 1
title: set 设置元素位置
---

## set

**类型**: `MethodDeclaration`

**所属类**: `UIElement`

**定义位置**: [`ui.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts)

### 描述

设置元素位置

参数 `transformProps`: 元素变换属性选项

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `transformProps` | `TransformOptions` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 1515 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts#L1515)

```typescript
public set(transformProps: TransformOptions): void {
    for (const key of Object.keys(transformProps) as Array<TransformKey>) {
      this.transform[key] = transformProps[key]!
    }
    this.resize()
  }
```

---



文档生成时间：2026/1/31 13:13:59
