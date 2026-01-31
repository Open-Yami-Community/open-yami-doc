---
sidebar_position: 1
title: setTint 设置动画色调
---

## setTint

**类型**: `MethodDeclaration`

**所属类**: `Trigger`

**定义位置**: [`trigger.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/trigger.ts)

### 描述

设置动画色调

参数 `tint`: 动画色调属性选项\{red?: -255~255, green?: -255~255, blue?: -255~255, gray?: 0~255\}

参数 `easingId`: 过渡曲线ID

参数 `duration`: 持续时间(毫秒)

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `tint` | `ImageTintOptions` | - | - |
| `easingId` | `string` | - | '' |
| `duration` | `number` | - | n0 |

### 返回值

类型: `void`

### 源代码

**位置**: [第 201 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/trigger.ts#L201)

```typescript
public setTint(tint: ImageTintOptions, easingId: string = '', duration: number = 0): void {
    this.animation?.setTint('trigger-tint', this.updaters, tint, easingId, duration)
  }
```

---



文档生成时间：2026/1/31 13:13:59
