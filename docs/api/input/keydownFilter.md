---
sidebar_position: 1
title: keydownFilter 按键过滤器
---

## keydownFilter

**类型**: `MethodDeclaration`

**定义位置**: [`input.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/input.ts)

### 描述

按键过滤器

参数 `event`: 键盘事件

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `event` | `KeyboardEvent` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 231 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/input.ts#L231)

```typescript
public keydownFilter(event: KeyboardEvent): void {
    // 如果是本地运行，返回
    if (Stats.shell === 'electron') {
      return
    }
    // 阻止默认按键行为(Web模式)
    const {code} = event
    if (event.cmdOrCtrlKey) {
      if (!this.keydownWhiteListOnCtrl.includes(code)) {
        event.preventDefault()
      }
    } else if (event.altKey) {
      event.preventDefault()
    } else if (this.keydownBlackList.includes(code)) {
      event.preventDefault()
    }
  }
```

---



文档生成时间：2026/1/31 13:13:59
