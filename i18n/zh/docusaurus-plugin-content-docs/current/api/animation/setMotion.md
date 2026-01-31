---
sidebar_position: 1
title: setMotion 设置动画动作
---

## setMotion

**类型**: `MethodDeclaration`

**所属类**: `AnimationPlayer`

**定义位置**: [`animation.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/animation.ts)

### 描述

设置动画动作

参数 `motionName`: 动作名称

返回值:操作是否成功

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `motionName` | `string` | - | - |

### 返回值

类型: `boolean`

操作是否成功

### 源代码

**位置**: [第 176 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/animation.ts#L176)

```typescript
public setMotion(motionName: string): boolean {
    this.motionName = motionName
    const motion = this.motions[motionName]
    if (motion) {
      // 执行结束回调
      this.finish()
      this.motion = motion
      this.dirCases = motion.dirCases
      // 如果方向模式发生变化，重新计算方向
      if (this.dirList !== motion.dirList) {
        this.dirList = motion.dirList
        this.direction = -1
        this.setAngle(this.angle)
      } else {
        this.loadDirCase()
      }
      return true
    }
    return false
  }
```

---



文档生成时间：2026/1/31 13:13:58
