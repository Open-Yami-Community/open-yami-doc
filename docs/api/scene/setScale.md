---
sidebar_position: 1
title: setScale 设置缩放系数
---

## setScale

**类型**: `MethodDeclaration`

**定义位置**: [`scene.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/scene.ts)

### 描述

设置缩放系数

参数 `value`: 缩放系数

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `value` | `number` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 371 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/scene.ts#L371)

```typescript
public setScale(value: number): void {
    this.scale = value
    Camera.updateZoom()
  }
```

---



文档生成时间：2026/1/31 13:13:59
