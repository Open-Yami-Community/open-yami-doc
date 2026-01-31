---
sidebar_position: 1
title: verify 检查有效性(宿主对象被销毁或角色未激活时返回false)
---

## verify

**类型**: `MethodDeclaration`

**所属类**: `Flow`

**定义位置**: [`flow.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/flow.ts)

### 描述

检查有效性(宿主对象被销毁或角色未激活时返回false)

返回值:是否可以继续

### 返回值

类型: `boolean`

是否可以继续

### 源代码

**位置**: [第 32 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/flow.ts#L32)

```typescript
public verify(): boolean {
    if (this.flowOwner === null) return true
    if (this.flowOwner.destroyed === false) {
      if (this.flowOwner.active !== false) {
        return true
      }
    }
    if (this.flowIndependent) return true
    return false
  }
```

---



文档生成时间：2026/1/31 13:13:59
