---
sidebar_position: 1
title: getBlobUrl 获取二进制对象链接
---

## getBlobUrl

**类型**: `MethodDeclaration`

**定义位置**: [`loader.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/loader.ts)

### 描述

获取二进制对象链接

参数 `path`: 原生路径

返回值:二进制对象链接

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `path` | `string` | - | - |

### 返回值

类型: `Promise&lt;string&gt;`

二进制对象链接

### 源代码

**位置**: [第 271 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/loader.ts#L271)

```typescript
public async getBlobUrl(path: string): Promise<string> {
    const {cachedUrls} = this
    const url = cachedUrls[path]
    // 返回已经缓存的链接
    if (typeof url === 'string') {
      return url
    }
    // 先暂时把原始链接作为缓存链接
    // 等待文件加载后生成并替换缓存链接
    cachedUrls[path] = path
    try {
      let buffer = await Loader.xhr({
        path: path,
        type: 'arraybuffer',
      })
      if (/\.dat$/.test(path)) {
        buffer = window.decrypt(buffer)
      }
      const blob = new Blob([buffer])
      const url = URL.createObjectURL(blob)
      this.cachedBlobs[url] = blob
      return cachedUrls[path] = url
    } catch (error) {
      return ''
    }
  }
```

---



文档生成时间：2026/1/31 13:13:59
