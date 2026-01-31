---
sidebar_position: 1
title: compileTextContents 编译文本内容
---

## compileTextContents

**类型**: `MethodDeclaration`

**定义位置**: [`local.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/local.ts)

### 描述

编译文本内容

### 返回值

类型: `void`

### 源代码

**位置**: [第 41 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/local.ts#L41)

```typescript
private compileTextContents(): void {
    const regexp = /<global:([0-9a-f]{16})>/g
    const compile = (content: string) => {
      const slices: Array<AttributeValue | undefined> = []
      const setters: Array<CallbackFunction> = []
      let li = 0
      let match
      while (match = regexp.exec(content)) {
        const mi = match.index
        if (mi > li) {
          slices.push(content.slice(li, mi))
        }
        const index = slices.length
        const key = match[1]
        const getter = () => Variable.get(key)
        const setter = () => {slices[index] = getter()}
        setters.push(setter)
        slices.push('')
        li = regexp.lastIndex
      }
      // 无匹配标签的情况
      if (li === 0) {
        return content
      }
      // 找到标签的情况
      if (content.length > li) {
        slices.push(content.slice(li))
      }
      return () => {
        for (const setter of setters) {
          setter()
        }
        return slices.join('')
      }
    }
    const languages = Data.config.localization.languages.map(lang => lang.name)
    for (const {contents} of Object.values(this.textMap) as Array<LocalizationTextItem>) {
      for (const language of languages) {
        contents[language] = compile(contents[language] as string)
      }
    }
  }
```

---



文档生成时间：2026/1/31 13:13:59
