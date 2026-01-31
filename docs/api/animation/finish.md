---
sidebar_position: 1
title: finish 执行当前动作播放结束回调
---

## finish

**类型**: `MethodDeclaration`

**所属类**: `AnimationPlayer`

**定义位置**: [`animation.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/animation.ts)

### 描述

执行当前动作播放结束回调

### 返回值

类型: `void`

### 源代码

**位置**: [第 899 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/animation.ts#L899)

```typescript
public finish(): void {
    const {callbacks} = this
    if (callbacks !== null) {
      this.callbacks = null
      for (const callback of callbacks) {
        callback(this)
      }
    }
  }
```

---



文档生成时间：2026/1/31 13:13:58
