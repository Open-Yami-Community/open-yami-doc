---
sidebar_position: 1
title: createElement 创建预设元素的实例
---

## createElement

**类型**: `MethodDeclaration`

**定义位置**: [`ui.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts)

### 描述

创建预设元素的实例

参数 `presetId`: 预设元素ID

返回值:创建的元素实例

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `presetId` | `string` | - | - |

### 返回值

类型: `UIElement`

创建的元素实例

### 源代码

**位置**: [第 187 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts#L187)

```typescript
public createElement(presetId: string): UIElement {
    const preset = UI.presets[presetId]
    if (preset) {
      ScriptManager.deferredLoading = true
      const element = this._createElement(preset)
      UI.latest = element
      ScriptManager.loadDeferredParameters()
      return element
    }
    throw new Error(`Invalid Element ID: ${presetId}`)
  }
```

---



文档生成时间：2026/1/31 13:13:59
