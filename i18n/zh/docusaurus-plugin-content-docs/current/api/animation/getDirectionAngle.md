---
sidebar_position: 1
title: getDirectionAngle 获取当前动画方向的角度
---

## getDirectionAngle

**类型**: `MethodDeclaration`

**所属类**: `AnimationPlayer`

**定义位置**: [`animation.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/animation.ts)

### 描述

获取当前动画方向的角度

返回值:弧度

### 返回值

类型: `number`

弧度

### 源代码

**位置**: [第 277 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/animation.ts#L277)

```typescript
public getDirectionAngle(): number {
    const directions = this.dirList.length
    return this.direction / directions * Math.PI * 2
  }
```

---



文档生成时间：2026/1/31 13:13:58
