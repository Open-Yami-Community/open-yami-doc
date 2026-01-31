---
sidebar_position: 1
title: _createElement 创建预设元素的实例(私有)
---

## _createElement

**类型**: `MethodDeclaration`

**定义位置**: [`ui.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts)

### 描述

创建预设元素的实例(私有)

参数 `node`: 预设元素数据

返回值:创建的元素实例

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `node` | `UIElementData` | - | - |

### 返回值

类型: `UIElement`

创建的元素实例

### 源代码

**位置**: [第 204 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts#L204)

```typescript
private _createElement(node: UIElementData): UIElement {
    const element: UIElement = new UI.elementClassMap[node.class](node)
    for (const childNode of node.children) {
      // 创建子元素时忽略禁用的元素
      if (childNode.enabled) {
        element.appendChild(this._createElement(childNode))
      }
    }
    return element
  }
```

---



文档生成时间：2026/1/31 13:13:59
