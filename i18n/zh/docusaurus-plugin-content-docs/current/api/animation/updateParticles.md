---
sidebar_position: 1
title: updateParticles 更新粒子的运动
---

## updateParticles

**类型**: `MethodDeclaration`

**所属类**: `ParticleLayer`

**定义位置**: [`animation.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/animation.ts)

### 描述

更新粒子的运动

参数 `deltaTime`: 增量时间(毫秒)

返回值:当前图层中已激活粒子的数量

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `deltaTime` | `number` | - | - |

### 返回值

类型: `number`

当前图层中已激活粒子的数量

### 源代码

**位置**: [第 1636 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/animation.ts#L1636)

```typescript
public updateParticles(deltaTime: number): number {
    const elements = this.elements
    let eCount = elements.count
    if (eCount === 0) return 0
    const reserves = this.reserves
    let rCount = reserves.count
    let offset = 0
    deltaTime *= this.emitter.speed
    for (let i = 0; i < eCount; i++) {
      const element = elements[i]!
      switch (element.update(deltaTime)) {
        case false:
          // 回收未激活粒子
          reserves[rCount + offset] = element
          offset++
          continue
        default:
          // 重新排序已激活粒子
          if (offset !== 0) {
            elements[i - offset] = element
          }
          continue
      }
    }
    // 如果有粒子被回收，更新相关属性
    if (offset !== 0) {
      elements.count = eCount - offset
      reserves.count = rCount + offset
      eCount = elements.count
    }
    // 返回已激活粒子的数量
    return eCount
  }
```

---



文档生成时间：2026/1/31 13:13:58
