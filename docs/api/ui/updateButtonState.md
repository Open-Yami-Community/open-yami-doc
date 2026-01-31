---
sidebar_position: 1
title: updateButtonState 更新按钮状态
---

## updateButtonState

**类型**: `MethodDeclaration`

**所属类**: `ButtonElement`

**定义位置**: [`ui.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts)

### 描述

更新按钮状态

参数 `hoverSE`: 是否播放选中音效

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `hoverSE` | `boolean` | - | false |

### 返回值

类型: `void`

### 源代码

**位置**: [第 4540 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts#L4540)

```typescript
private updateButtonState(hoverSE: boolean = false): void {
      if (this.active) {
        return this.button.activate()
      }
      if (this.hover) {
        return this.button.hover(hoverSE)
      }
      return this.button.restore()
    }
```

---



文档生成时间：2026/1/31 13:13:59
