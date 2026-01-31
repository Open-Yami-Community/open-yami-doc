---
sidebar_position: 1
title: setOffsetY 设置动画垂直偏移距离
---

## setOffsetY

**类型**: `MethodDeclaration`

**所属类**: `Trigger`

**定义位置**: [`trigger.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/trigger.ts)

### 描述

设置动画垂直偏移距离

参数 `offsetY`: 垂直偏移距离

参数 `easingId`: 过渡曲线ID

参数 `duration`: 持续时间(毫秒)

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `offsetY` | `number` | - | - |
| `easingId` | `string` | - | '' |
| `duration` | `number` | - | n0 |

### 返回值

类型: `void`

### 源代码

**位置**: [第 221 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/trigger.ts#L221)

```typescript
public setOffsetY(offsetY: number, easingId: string = '', duration: number = 0): void {
    this.animation?.setOffsetY('trigger-offsetY', this.updaters, offsetY, easingId, duration)
  }
```

---



文档生成时间：2026/1/31 13:13:59
