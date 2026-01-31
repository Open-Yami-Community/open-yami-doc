---
sidebar_position: 1
title: getImage 获取缓存图像
---

## getImage

**类型**: `MethodDeclaration`

**定义位置**: [`loader.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/loader.ts)

### 描述

获取缓存图像

返回值:图像DOM元素

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `\{guid, path\}` | `\{
    /\*\* 文件GUID \*/
    guid\?\: string,
    /\*\* 文件路径 \*/
    path\?\: string,
  \}` | - | - |

### 返回值

类型: `HTMLImageElement \| null`

图像DOM元素

### 源代码

**位置**: [第 212 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/loader.ts#L212)

```typescript
public getImage({guid, path}: {
    /** 文件GUID */
    guid?: string,
    /** 文件路径 */
    path?: string,
  }): HTMLImageElement | null {
    if (guid === undefined) {
      guid = ''
    }
    if (path === undefined) {
      path = this.getPathByGUID(guid)
    }
    const key = path ?? guid
    const image = this.cachedImages[key]
    return image instanceof HTMLImageElement ? image : null
  }
```

---



文档生成时间：2026/1/31 13:13:59
