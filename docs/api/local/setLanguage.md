---
sidebar_position: 1
title: setLanguage 设置语言
---

## setLanguage

**类型**: `MethodDeclaration`

**定义位置**: [`local.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/local.ts)

### 描述

设置语言

@param 本地化语言代码

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `language` | `string` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 88 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/local.ts#L88)

```typescript
public setLanguage(language: string): void {
    if (this.language !== language) {
      const languages = Data.config.localization.languages
      let active = language
      if (active === 'auto') {
        active = this.getLanguage()
      }
      let settings = languages.find(lang => lang.name === active)
      if (!settings) settings = languages[0] ?? {name: active, font: '', scale: 1}
      try {
        this.active = settings.name
        this.language = language
        this.updateAllTexts()
        window.dispatchEvent(new Event('localize'))
        Printer.setLanguageFont(settings.font)
        Printer.setSizeScale(settings.scale)
        Printer.setWordWrap(['zh-CN', 'zh-TW', 'ja', 'ko'].includes(active) ? 'break' : 'keep')
      } catch (error) {
        console.error(error)
      }
    }
  }
```

---



文档生成时间：2026/1/31 13:13:59
