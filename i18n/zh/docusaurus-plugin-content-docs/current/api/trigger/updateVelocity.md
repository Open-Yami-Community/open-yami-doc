---
sidebar_position: 1
title: updateVelocity 更新触发器速度分量
---

## updateVelocity

**类型**: `MethodDeclaration`

**所属类**: `Trigger`

**定义位置**: [`trigger.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/trigger.ts)

### 描述

更新触发器速度分量

### 返回值

类型: `void`

### 源代码

**位置**: [第 277 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/trigger.ts#L277)

```typescript
public updateVelocity(): void {
    const cos = Math.cos(this.angle)
    const sin = Math.sin(this.angle)
    this.velocityX = this.speed * cos
    this.velocityY = this.speed * sin
  }
```

---



文档生成时间：2026/1/31 13:13:59
