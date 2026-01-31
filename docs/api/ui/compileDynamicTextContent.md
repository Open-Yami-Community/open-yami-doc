---
sidebar_position: 1
title: compileDynamicTextContent 编译动态文本内容
---

## compileDynamicTextContent

**类型**: `MethodDeclaration`

**所属类**: `TextElement`

**定义位置**: [`ui.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts)

### 描述

编译动态文本内容

参数 `content`: 输入文本内容

返回值:动态文本更新器

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `content` | `string` | - | - |

### 返回值

类型: `DynamicTextUpdater \| null`

动态文本更新器

### 源代码

**位置**: [第 2165 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts#L2165)

```typescript
private static compileDynamicTextContent(content: string): DynamicTextUpdater | null {
    const regexp = this.dynamicGlobalVarRegexp
    if (regexp.test(content)) {
      regexp.lastIndex = 0
      const slices: Array<AttributeValue | undefined> = []
      const setters: Array<CallbackFunction> = []
      let changed = false
      let li = 0
      let match
      while (match = regexp.exec(content)) {
        const mi = match.index
        if (mi > li) {
          slices.push(content.slice(li, mi))
        }
        const index = slices.length
        const key = match[1]
        const setter = () => {
          const value = Variable.get(key)
          if (slices[index] !== value) {
            slices[index] = value
            changed = true
          }
        }
        setters.push(setter)
        slices.push(undefined)
        li = regexp.lastIndex
      }
      // 结尾有多余文本的情况
      if (content.length > li) {
        slices.push(content.slice(li))
      }
      return {
        onChange: Function.empty,
        update() {
          for (const setter of setters) {
            setter()
          }
          if (changed) {
            changed = false
            this.onChange(slices.join(''))
          }
        }
      }
    }
    return null
  }
```

---



文档生成时间：2026/1/31 13:13:59
