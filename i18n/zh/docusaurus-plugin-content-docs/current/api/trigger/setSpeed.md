---
sidebar_position: 1
title: setSpeed 设置触发器速度
---

## setSpeed

**类型**: `MethodDeclaration`

**所属类**: `Trigger`

**定义位置**: [`trigger.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/trigger.ts)

### 描述

设置触发器速度

参数 `speed`: 触发器速度(图块/秒)

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `speed` | `number` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 271 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/trigger.ts#L271)

```typescript
public setSpeed(speed: number): void {
    this.speed = speed
    this.updateVelocity()
  }
```

---



文档生成时间：2026/1/31 13:13:59
