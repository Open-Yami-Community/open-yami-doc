---
sidebar_position: 1
title: setPadding 设置边距
---

## setPadding

**类型**: `MethodDeclaration`

**所属类**: `Printer`

**定义位置**: [`printer.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/printer.ts)

### 描述

设置边距

参数 `pl`: 左边距

参数 `pt`: 上边距

参数 `pr`: 右边距

参数 `pb`: 下边距

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `pl` | `number` | - | - |
| `pt` | `number` | - | - |
| `pr` | `number` | - | - |
| `pb` | `number` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 291 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/printer.ts#L291)

```typescript
public setPadding(pl: number, pt: number, pr: number, pb: number): void {
    this.paddingLeft = pl
    this.paddingTop = pt
    this.paddingRight = pr
    this.paddingBottom = pb
  }
```

---



文档生成时间：2026/1/31 13:13:59
