---
sidebar_position: 1
title: calculateAnimDirection 计算触发器的动画方向
---

## calculateAnimDirection

**类型**: `MethodDeclaration`

**所属类**: `Trigger`

**定义位置**: [`trigger.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/trigger.ts)

### 描述

计算触发器的动画方向

### 返回值

类型: `void`

### 源代码

**位置**: [第 410 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/trigger.ts#L410)

```typescript
private calculateAnimDirection(): void {
    const animation = this.animation!
    // 设置默认动画方向为技能释放者的动画方向
    if (!animation.casterDirSync) {
      animation.casterDirSync = true
      const casterDir = this.caster?.animation?.direction
      if (typeof casterDir === 'number' && casterDir >= 0) {
        animation.setDirection(casterDir)
      }
    }
    // 设置触发器动画角度
    animation.setAngle(this.angle)
  }
```

---



文档生成时间：2026/1/31 13:13:59
