---
sidebar_position: 1
title: revokeBlobUrl 撤回二进制对象链接(释放内存)
---

## revokeBlobUrl

**类型**: `MethodDeclaration`

**定义位置**: [`loader.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/loader.ts)

### 描述

撤回二进制对象链接(释放内存)

参数 `url`: 二进制对象链接

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `url` | `string` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 302 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/loader.ts#L302)

```typescript
public revokeBlobUrl(url: string): void {
    if (url in this.cachedBlobs) {
      delete this.cachedBlobs[url]
      URL.revokeObjectURL(url)
    }
  }
```

---



文档生成时间：2026/1/31 13:13:59
