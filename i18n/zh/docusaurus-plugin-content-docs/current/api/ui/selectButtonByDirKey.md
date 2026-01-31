---
sidebar_position: 1
title: selectButtonByDirKey 通过方向键选择按钮
---

## selectButtonByDirKey

**类型**: `MethodDeclaration`

**定义位置**: [`ui.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts)

### 描述

通过方向键选择按钮

参数 `dirKey`: 当前选中按钮的相对方向

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `dirKey` | `ButtonRelativeDirection` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 619 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts#L619)

```typescript
public selectButtonByDirKey(dirKey: ButtonRelativeDirection): void {
    switch (dirKey) {
      case 'Up':
        this.selectButtonByAngle(-Math.PI / 2)
        break
      case 'Down':
        this.selectButtonByAngle(Math.PI / 2)
        break
      case 'Left':
        this.selectButtonByAngle(Math.PI)
        break
      case 'Right':
        this.selectButtonByAngle(0)
        break
    }
  }
```

---



文档生成时间：2026/1/31 13:13:59
