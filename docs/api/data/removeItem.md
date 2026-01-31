---
sidebar_position: 1
title: removeItem 移除数据内容
---

## removeItem

**类型**: `MethodDeclaration`

**定义位置**: [`data.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/data.ts)

### 描述

移除数据内容

参数 `key`: 键(存档文件名)

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `key` | `string` | - | - |

### 返回值

类型: `Promise&lt;void&gt;`

### 源代码

**位置**: [第 1158 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/data.ts#L1158)

```typescript
public async removeItem(key: string): Promise<void> {
    return new Promise(resolve => {
      this.open().then(objectStore => {
        const request = objectStore.delete(key)
        request.onsuccess = event => {
          resolve()
        }
      })
    })
  }
```

---



文档生成时间：2026/1/31 13:13:58
