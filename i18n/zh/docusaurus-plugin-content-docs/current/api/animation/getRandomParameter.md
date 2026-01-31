---
sidebar_position: 1
title: getRandomParameter 生成随机参数
---

## getRandomParameter

**类型**: `MethodDeclaration`

**所属类**: `ParticleElement`

**定义位置**: [`animation.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/animation.ts)

### 描述

生成随机参数

参数 `parameter`: 参数数组

返回值:生成的参数值

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `parameter` | `\[number, number\]` | - | - |

### 返回值

类型: `number`

生成的参数值

### 源代码

**位置**: [第 2574 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/animation.ts#L2574)

```typescript
private static getRandomParameter(parameter: [number, number]): number {
    const [standard, deviation] = parameter
    return standard + deviation * (Math.random() * 2 - 1)
  }
```

---



文档生成时间：2026/1/31 13:13:58
