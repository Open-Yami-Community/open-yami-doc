---
sidebar_position: 1
title: load 加载界面中的所有元素
---

## load

**类型**: `MethodDeclaration`

**定义位置**: [`ui.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts)

### 描述

加载界面中的所有元素

参数 `uiId`: 界面文件ID

返回值:创建的元素实例列表

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `uiId` | `string` | - | - |

### 返回值

类型: `Array&lt;UIElement&gt;`

创建的元素实例列表

### 源代码

**位置**: [第 164 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts#L164)

```typescript
public load(uiId: string): Array<UIElement> {
    const elements: Array<UIElement> = []
    const ui = Data.ui[uiId]
    if (!ui) return elements
    ScriptManager.deferredLoading = true
    // 创建所有的元素
    for (const node of ui.nodes) {
      if (node.enabled) {
        elements.push(this._createElement(node))
      }
    }
    if (elements.length !== 0) {
      UI.latest = elements[elements.length - 1]
    }
    ScriptManager.loadDeferredParameters()
    return elements
  }
```

---



文档生成时间：2026/1/31 13:13:59
