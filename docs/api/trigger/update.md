---
sidebar_position: 1
title: update 更新触发器的运动和碰撞检测
---

## update

**类型**: `MethodDeclaration`

**所属类**: `Trigger`

**定义位置**: [`trigger.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/trigger.ts)

### 描述

更新触发器的运动和碰撞检测

参数 `deltaTime`: 增量时间(毫秒)

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `deltaTime` | `number` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 171 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/trigger.ts#L171)

```typescript
public update(deltaTime: number): void {
    // 如果触发器过期，移除它
    if (this.elapsed >= this.duration) {
      this.remove()
      return
    }
    const time = deltaTime * this.timeScale
    // 计算增量时间(以秒为单位)
    this.deltaTime = time
    this.elapsed += time
    this.updaters.update(deltaTime)
    this.updateMovement()
    if (this.updateCollision()) {
      // 如果未与墙壁发生碰撞，更新动画
      this.updateAnimation(time)
    } else {
      // 否则移除
      this.remove()
    }
    // 更新上一次的位置
    this.lastX = this.x
    this.lastY = this.y
  }
```

---



文档生成时间：2026/1/31 13:13:59
