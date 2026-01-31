---
sidebar_position: 1
title: loadImage 加载缓存图像
---

## loadImage

**类型**: `MethodDeclaration`

**定义位置**: [`loader.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/loader.ts)

### 描述

加载缓存图像

返回值:图像DOM元素

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `\{guid, path, save\}` | `\{
    /\*\* 文件GUID \*/
    guid\?\: string,
    /\*\* 文件路径 \*/
    path\?\: string,
    /\*\* 保存路径(仅第一次加载有效) \*/
    save\?\: boolean,
  \}` | - | - |

### 返回值

类型: `Promise&lt;HTMLImageElement&gt;`

图像DOM元素

### 源代码

**位置**: [第 233 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/loader.ts#L233)

```typescript
public async loadImage({guid, path, save}: {
    /** 文件GUID */
    guid?: string,
    /** 文件路径 */
    path?: string,
    /** 保存路径(仅第一次加载有效) */
    save?: boolean,
  }): Promise<HTMLImageElement> {
    guid = guid ?? ''
    path = path ?? this.getPathByGUID(guid)
    save = save ?? false
    const key = path ?? guid
    const images = this.cachedImages
    return images[key] ??=
    new Promise(async resolve => {
      const image = new Image()
      // 给图像元素设置guid用于纹理的查找
      image.guid = guid
      // 加载图像资源
      image.onload =
      image.onerror = () => {
        if (!save) {
          this.revokeBlobUrl(image.src)
        }
        images[key] = image
        image.onload = null
        image.onerror = null
        resolve(image)
      }
      image.src = await this.getBlobUrl(path)
    })
  }
```

---



文档生成时间：2026/1/31 13:13:59
