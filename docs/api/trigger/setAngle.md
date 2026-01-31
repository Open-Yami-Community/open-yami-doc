---
sidebar_position: 1
title: setAngle 设置触发器角度
---

## setAngle

**类型**: `MethodDeclaration`

**所属类**: `Trigger`

**定义位置**: [`trigger.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/trigger.ts)

### 描述

设置触发器角度

参数 `angle`: 触发器角度(弧度)

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `angle` | `number` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 262 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/trigger.ts#L262)

```typescript
public setAngle(angle: number): void {
    this.angle = angle
    this.updateVelocity()
  }
```

---



文档生成时间：2026/1/31 13:13:59
