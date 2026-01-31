---
sidebar_position: 1
title: restart 重新开始播放
---

## restart

**类型**: `MethodDeclaration`

**所属类**: `AnimationPlayer`

**定义位置**: [`animation.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/animation.ts)

### 描述

重新开始播放

### 返回值

类型: `void`

### 源代码

**位置**: [第 166 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/animation.ts#L166)

```typescript
public restart(): void {
    this.index = 0
    this.ended = false
  }
```

---



文档生成时间：2026/1/31 13:13:58
