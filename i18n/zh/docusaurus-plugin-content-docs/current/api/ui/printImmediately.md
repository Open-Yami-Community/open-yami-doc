---
sidebar_position: 1
title: printImmediately 立即打印文字
---

## printImmediately

**类型**: `MethodDeclaration`

**所属类**: `DialogBoxElement`

**定义位置**: [`ui.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts)

### 描述

立即打印文字

### 返回值

类型: `void`

### 源代码

**位置**: [第 3772 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts#L3772)

```typescript
public printImmediately(): void {
    if (this.state === 'updating') {
      // 暂时取消打印间隔
      const {interval} = this
      this.interval = 0
      this.update()
      this.interval = interval
    }
  }
```

---



文档生成时间：2026/1/31 13:13:59
