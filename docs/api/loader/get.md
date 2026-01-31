---
sidebar_position: 1
title: get 获取文件
---

## get

**类型**: `MethodDeclaration`

**定义位置**: [`loader.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/loader.ts)

### 描述

获取文件

参数 `descriptor`: 文件描述器

返回值:文件数据

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `descriptor` | `\{
    /\*\* 文件路径 \*/
    path\?\: string
    /\*\* 文件GUID \*/
    guid\?\: string
    /\*\* 资源类型 \*/
    type\: 'text' \| 'json' \| 'blob' \| 'arraybuffer' \| 'image'
  \}` | - | - |

### 返回值

类型: `Promise&lt;any&gt;`

文件数据

### 源代码

**位置**: [第 117 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/loader.ts#L117)

```typescript
public async get(descriptor: {
    /** 文件路径 */
    path?: string
    /** 文件GUID */
    guid?: string
    /** 资源类型 */
    type: 'text' | 'json' | 'blob' | 'arraybuffer' | 'image'
  }): Promise<any> {
    // 可以指定路径或GUID来加载文件
    const guid = descriptor.guid ?? ''
    const path = descriptor.path ?? this.getPathByGUID(guid)
    const type = descriptor.type
    switch (type) {
      case 'image':
        return this.loadImage({guid, path})
      default:
        return /\.dat$/.test(path)
        ? this.decrypt({path, type})
        : this.xhr({path, type})
    }
  }
```

---



文档生成时间：2026/1/31 13:13:59
