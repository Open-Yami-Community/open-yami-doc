---
sidebar_position: 1
title: setPosition 设置触发器位置
---

## setPosition

**类型**: `MethodDeclaration`

**所属类**: `Trigger`

**定义位置**: [`trigger.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/trigger.ts)

### 描述

设置触发器位置

参数 `x`: 水平位置

参数 `y`: 垂直位置

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `x` | `number` | - | - |
| `y` | `number` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 240 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/trigger.ts#L240)

```typescript
public setPosition(x: number, y: number): void {
    this.x = x
    this.y = y
    this.lastX = x
    this.lastY = y
  }
```

---



文档生成时间：2026/1/31 13:13:59
