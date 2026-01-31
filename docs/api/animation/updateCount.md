---
sidebar_position: 1
title: updateCount 更新可发射的粒子数量
---

## updateCount

**类型**: `MethodDeclaration`

**所属类**: `ParticleLayer`

**定义位置**: [`animation.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/animation.ts)

### 描述

更新可发射的粒子数量

### 返回值

类型: `void`

### 源代码

**位置**: [第 1840 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/animation.ts#L1840)

```typescript
private updateCount(): void {
    let {count} = this.data
    // 如果发射数量为0，表示可以无限发射
    if (count === 0) {
      count = 1e16
    }
    this.count = count
    this.stocks = count
  }
```

---



文档生成时间：2026/1/31 13:13:58
