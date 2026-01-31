---
sidebar_position: 1
title: get 获取过渡时间
---

## get

**类型**: `MethodDeclaration`

**所属类**: `EasingMap`

**定义位置**: [`time.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/time.ts)

### 描述

获取过渡时间

参数 `time`: 原生时间

返回值:处理后的过渡时间

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `time` | `number` | - | - |

### 返回值

类型: `number`

处理后的过渡时间

### 源代码

**位置**: [第 386 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/time.ts#L386)

```typescript
public get(time: number): number {
    return this[Math.round(Math.clamp(time, 0, 1) * EasingMap.scale)]
  }
```

---



文档生成时间：2026/1/31 13:13:59
