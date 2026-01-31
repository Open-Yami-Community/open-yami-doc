---
sidebar_position: 1
title: clamp 设置限制范围
---

## clamp

**类型**: `MethodDeclaration`

**定义位置**: [`camera.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/camera.ts)

### 描述

设置限制范围

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `left` | `number` | - | - |
| `top` | `number` | - | - |
| `right` | `number` | - | - |
| `bottom` | `number` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 189 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/camera.ts#L189)

```typescript
public clamp(left: number, top: number, right: number, bottom: number): void {
    this.clampedLeft = Math.min(left, right)
    this.clampedTop = Math.min(top, bottom)
    this.clampedRight = Math.max(left, right)
    this.clampedBottom = Math.max(top, bottom)
  }
```

---



文档生成时间：2026/1/31 13:13:58
