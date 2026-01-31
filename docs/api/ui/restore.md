---
sidebar_position: 1
title: restore 恢复正常状态
---

## restore

**类型**: `MethodDeclaration`

**所属类**: `ButtonElement`

**定义位置**: [`ui.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts)

### 描述

恢复正常状态

### 返回值

类型: `void`

### 源代码

**位置**: [第 5013 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts#L5013)

```typescript
public restore(): void {
    if (this.state !== 'normal') {
      if (this.selected) {
        this.selected = false
        this.emit('deselect')
      }
      this.state = 'normal'
      this.updateDisplayMode()
    }
  }
```

---



文档生成时间：2026/1/31 13:13:59
