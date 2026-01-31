---
sidebar_position: 1
title: replace 替换文本内容
---

## replace

**类型**: `MethodDeclaration`

**定义位置**: [`local.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/local.ts)

### 描述

替换文本内容

参数 `text`: 原始文本内容

返回值:替换本地化文本后的内容

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `text` | `string` | - | - |

### 返回值

类型: `string`

替换本地化文本后的内容

### 源代码

**位置**: [第 157 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/local.ts#L157)

```typescript
public replace(text: string): string {
    return text.replace(this.refRegexp, (match, refId) => {
      const ref = this.get(refId)
      return ref !== undefined ? ref : match
    })
  }
```

---



文档生成时间：2026/1/31 13:13:59
