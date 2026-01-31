---
sidebar_position: 1
title: release 释放资源
---

## release

**类型**: `MethodDeclaration`

**所属类**: `AnimationPlayer`

**定义位置**: [`animation.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/animation.ts)

### 描述

释放资源

### 返回值

类型: `void`

### 源代码

**位置**: [第 840 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/animation.ts#L840)

```typescript
public release(): void {
    this.destroy()
    this.destroyed = false
  }
```

---



文档生成时间：2026/1/31 13:13:58
