---
sidebar_position: 1
title: updateRotation 更新旋转角度
---

## updateRotation

**类型**: `MethodDeclaration`

**所属类**: `AnimationPlayer`

**定义位置**: [`animation.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/animation.ts)

### 描述

更新旋转角度

### 返回值

类型: `void`

### 源代码

**位置**: [第 283 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/animation.ts#L283)

```typescript
private updateRotation(): void {
    // 如果开启了动画旋转，调整旋转角度
    if (this.rotatable) {
      this.rotation = this.mirror
      ? -this.angle - this.getDirectionAngle()
      : +this.angle - this.getDirectionAngle()
    }
  }
```

---



文档生成时间：2026/1/31 13:13:58
