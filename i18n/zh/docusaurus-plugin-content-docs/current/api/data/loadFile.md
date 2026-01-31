---
sidebar_position: 1
title: loadFile 加载文件
---

## loadFile

**类型**: `MethodDeclaration`

**定义位置**: [`data.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/data.ts)

### 描述

加载文件

参数 `filename`: /data目录下的文件名

返回值:文件数据

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `filename` | `DataFileName` | - | - |

### 返回值

类型: `Promise&lt;void&gt;`

文件数据

### 源代码

**位置**: [第 634 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/data.ts#L634)

```typescript
private async loadFile(filename: DataFileName): Promise<void> {
    const promise = Loader.get({
      path: `Data/${filename}.json`,
      type: 'json',
    }).then(data => {
      this[filename] = data
    })
    await (this[filename] = promise as any)
  }
```

---



文档生成时间：2026/1/31 13:13:58
