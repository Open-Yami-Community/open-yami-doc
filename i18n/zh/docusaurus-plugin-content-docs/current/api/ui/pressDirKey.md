---
sidebar_position: 1
title: pressDirKey 按下方向键
---

## pressDirKey

**类型**: `MethodDeclaration`

**定义位置**: [`ui.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts)

### 描述

按下方向键

参数 `dirKey`: 当前选中按钮的相对方向

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `dirKey` | `ButtonRelativeDirection` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 640 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts#L640)

```typescript
public pressDirKey(dirKey: ButtonRelativeDirection): void {
    if (this.focuses.length === 0) return
    if (this.dirKey !== dirKey) {
      this.dirKey = dirKey
      this.keyTurbo = false
      this.keyTurboElapsed = 0
      this.selectButtonByDirKey(dirKey)
    }
  }
```

---



文档生成时间：2026/1/31 13:13:59
