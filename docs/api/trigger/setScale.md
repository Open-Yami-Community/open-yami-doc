---
sidebar_position: 1
title: setScale 设置触发器缩放系数
---

## setScale

**类型**: `MethodDeclaration`

**所属类**: `Trigger`

**定义位置**: [`trigger.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/trigger.ts)

### 描述

设置触发器缩放系数

参数 `scale`: 触发器缩放系数

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `scale` | `number` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 251 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/trigger.ts#L251)

```typescript
public setScale(scale: number): void {
    this.scale = scale
    if (this.animation) {
      this.animation.scale = scale
    }
  }
```

---



文档生成时间：2026/1/31 13:13:59
