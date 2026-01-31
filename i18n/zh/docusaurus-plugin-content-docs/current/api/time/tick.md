---
sidebar_position: 1
title: tick 执行周期回调函数
---

## tick

**类型**: `MethodDeclaration`

**所属类**: `Timer`

**定义位置**: [`time.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/time.ts)

### 描述

执行周期回调函数

参数 `deltaTime`: 增量时间(毫秒)

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `deltaTime` | `number` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 195 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/time.ts#L195)

```typescript
private tick(deltaTime: number): void {
    this.elapsed = Math.min(this.elapsed + deltaTime, this.duration)
    this.update(this)
    if (this.elapsed === this.duration) {
      this.callback(this)
      this.remove()
    }
  }
```

---



文档生成时间：2026/1/31 13:13:59
