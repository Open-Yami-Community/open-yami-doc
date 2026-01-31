---
sidebar_position: 1
title: getLanguage 获取合适的语言
---

## getLanguage

**类型**: `MethodDeclaration`

**定义位置**: [`local.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/local.ts)

### 描述

获取合适的语言

返回值:本地化语言代码

### 返回值

类型: `string`

本地化语言代码

### 源代码

**位置**: [第 115 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/local.ts#L115)

```typescript
private getLanguage(): string {
    const languages = Data.config.localization.languages.map(lang => lang.name)
    let nLanguage = navigator.language
    // 重映射本地语言
    const mappedLang = this.langRemap[nLanguage]
    if (mappedLang) nLanguage = mappedLang
    let language = languages[0] ?? nLanguage
    let matchedWeight = 0
    const sKeys = nLanguage.split('-')
    for (const key of languages) {
      const dKeys = key.split('-')
      if (sKeys[0] === dKeys[0]) {
        let weight = 0
        for (let sKey of sKeys) {
          if (dKeys.includes(sKey)) {
            weight++
          }
        }
        if (matchedWeight < weight) {
          matchedWeight = weight
          language = key
        }
      }
    }
    return language
  }
```

---



文档生成时间：2026/1/31 13:13:59
