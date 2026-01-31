---
sidebar_position: 1
title: decrypt 解密文件
---

## decrypt

**类型**: `MethodDeclaration`

**定义位置**: [`loader.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/loader.ts)

### 描述

解密文件

返回值:解密后的数据

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `options` | `\{
    /\*\* 文件路径 \*/
    path\: string
    /\*\* 资源类型 \*/
    type\: 'text' \| 'json' \| 'blob' \| 'arraybuffer' \| 'url'
  \}` | - | - |

### 返回值

类型: `Promise&lt;any&gt;`

解密后的数据

### 源代码

**位置**: [第 94 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/loader.ts#L94)

```typescript
private async decrypt(options: {
    /** 文件路径 */
    path: string
    /** 资源类型 */
    type: 'text' | 'json' | 'blob' | 'arraybuffer' | 'url'
  }): Promise<any> {
    const {path, type} = options
    const buffer = window.decrypt(await Loader.xhr({path, type: 'arraybuffer'}))
    switch (type) {
      case 'text':
        return Codec.textDecoder.decode(buffer)
      case 'json':
        return JSON.parse(Codec.textDecoder.decode(buffer))
      case 'arraybuffer':
        return buffer
    }
  }
```

---



文档生成时间：2026/1/31 13:13:59
