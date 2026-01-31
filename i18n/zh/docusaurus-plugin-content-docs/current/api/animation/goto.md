---
sidebar_position: 1
title: goto 跳转到指定帧
---

## goto

**类型**: `MethodDeclaration`

**所属类**: `AnimationPlayer`

**定义位置**: [`animation.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/animation.ts)

### 描述

跳转到指定帧

参数 `index`: 帧索引

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `index` | `number` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 155 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/animation.ts#L155)

```typescript
public goto(index: number): void {
    index = Math.clamp(index, 0, this.length - 1)
    // 跳转到前面的动画帧时增加循环计数
    if (index < this.index) {
      this.cycleIndex++
    }
    this.index = index
    this.ended = false
  }
```

---



文档生成时间：2026/1/31 13:13:58
