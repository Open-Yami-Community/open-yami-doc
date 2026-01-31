---
sidebar_position: 1
title: setDirection 设置动画方向
---

## setDirection

**类型**: `MethodDeclaration`

**所属类**: `AnimationPlayer`

**定义位置**: [`animation.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/animation.ts)

### 描述

设置动画方向

参数 `direction`: 方向码

返回值:动画是否成功切换了方向

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `direction` | `number` | - | - |

### 返回值

类型: `boolean`

动画是否成功切换了方向

### 源代码

**位置**: [第 244 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/animation.ts#L244)

```typescript
public setDirection(direction: number): boolean {
    if (this.direction !== direction) {
      const params = this.dirList[direction]
      if (!params) return false
      this.direction = direction
      this.mirror = params.mirror
      this.finish()
      this.loadDirCase()
      return true
    }
    return false
  }
```

---



文档生成时间：2026/1/31 13:13:58
