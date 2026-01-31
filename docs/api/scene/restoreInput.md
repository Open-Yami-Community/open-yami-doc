---
sidebar_position: 1
title: restoreInput 恢复场景输入
---

## restoreInput

**类型**: `MethodDeclaration`

**定义位置**: [`scene.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/scene.ts)

### 描述

恢复场景输入

### 返回值

类型: `void`

### 源代码

**位置**: [第 396 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/scene.ts#L396)

```typescript
public restoreInput(): void {
    this.preventInputEvents = Math.max(this.preventInputEvents - 1, 0)
  }
```

---



文档生成时间：2026/1/31 13:13:59
