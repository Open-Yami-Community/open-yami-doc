---
sidebar_position: 1
title: find 查找目标元素(通过屏幕坐标)
---

## find

**类型**: `MethodDeclaration`

**定义位置**: [`ui.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts)

### 描述

查找目标元素(通过屏幕坐标)

参数 `elements`: 元素列表

参数 `x`: 屏幕X

参数 `y`: 屏幕Y

返回值:在指定位置获取到的元素实例

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `elements` | `Array&lt;UIElement&gt;` | - | - |
| `x` | `number` | - | - |
| `y` | `number` | - | - |

### 返回值

类型: `UIElement \| undefined`

在指定位置获取到的元素实例

### 源代码

**位置**: [第 307 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts#L307)

```typescript
public find(elements: Array<UIElement>, x: number, y: number): UIElement | undefined {
    // 越是后面的元素优先级越高，因此逆序查找
    for (let i = elements.length - 1; i >= 0; i--) {
      const element = elements[i]
      if (element.visible) {
        switch (element.pointerEvents) {
          case 'enabled':
            // 如果启用了指针事件，且指针位于元素区域中，则作为备选，继续查找子元素
            if (element.isPointIn(x, y)) {
              return this.find(element.children, x, y) ?? element
            }
            continue
          case 'skipped':
            // 如果跳过指针事件，则当作该元素不存在
            if (element.isPointIn(x, y)) {
              const target = this.find(element.children, x, y)
              if (target) return target
            }
            continue
          case 'disabled':
            continue
        }
      }
    }
    return undefined
  }
```

---



文档生成时间：2026/1/31 13:13:59
