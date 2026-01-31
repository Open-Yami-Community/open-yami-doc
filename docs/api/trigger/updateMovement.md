---
sidebar_position: 1
title: updateMovement 更新触发器的移动
---

## updateMovement

**类型**: `MethodDeclaration`

**所属类**: `Trigger`

**定义位置**: [`trigger.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/trigger.ts)

### 描述

更新触发器的移动

### 返回值

类型: `void`

### 源代码

**位置**: [第 285 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/trigger.ts#L285)

```typescript
private updateMovement(): void {
    const deltaTime = this.deltaTime / 1000
    this.x += this.velocityX * deltaTime
    this.y += this.velocityY * deltaTime
  }
```

---



文档生成时间：2026/1/31 13:13:59
