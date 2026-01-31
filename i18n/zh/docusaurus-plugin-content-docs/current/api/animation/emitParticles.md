---
sidebar_position: 1
title: emitParticles 发射粒子元素
---

## emitParticles

**类型**: `MethodDeclaration`

**所属类**: `ParticleLayer`

**定义位置**: [`animation.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/animation.ts)

### 描述

发射粒子元素

参数 `deltaTime`: 增量时间(毫秒)

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `deltaTime` | `number` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 1584 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/animation.ts#L1584)

```typescript
public emitParticles(deltaTime: number): void {
    let stocks = this.stocks
    // 如果粒子库存量为0，停止发射
    if (stocks === 0) return
    this.elapsed += deltaTime * this.emitter.speed
    const data = this.data
    const interval = data.interval
    let count = Math.floor(this.elapsed / interval)
    if (count > 0) {
      // 0 * Infinity returns NaN
      this.elapsed -= interval * count || 0
      const elements = this.elements
      const maximum = ParticleLayer.maximum
      let eCount = elements.count
      // 如果激活的粒子达到最大数量，停止发射
      if (eCount === maximum) return
      const reserves = this.reserves
      let rCount = reserves.count
      spawn: {
        // 重用旧的粒子
        while (rCount > 0) {
          const element = reserves[--rCount]!
          elements[eCount++] = element
          element.initialize()
          count--
          stocks--
          if (count === 0 || stocks === 0) {
            break spawn
          }
        }
        // 创建新的粒子
        for (let i = this.capacity; i < maximum; i++) {
          elements[eCount++] = new ParticleElement(this)
          this.capacity = i + 1
          count--
          stocks--
          if (count === 0 || stocks === 0) {
            break spawn
          }
        }
      }
      elements.count = eCount
      reserves.count = rCount
      this.stocks = stocks
    }
  }
```

---



文档生成时间：2026/1/31 13:13:58
