---
sidebar_position: 1
title: continue 继续游戏
---

## continue

**类型**: `MethodDeclaration`

**定义位置**: [`main.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/main.ts)

### 描述

继续游戏

### 返回值

类型: `void`

### 源代码

**位置**: [第 175 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/main.ts#L175)

```typescript
public continue(): void {
    if (--this.pauseCount <= 0) {
      this.pauseCount = 0
      this.paused = false
    }
  }
```

---



文档生成时间：2026/1/31 13:13:59
