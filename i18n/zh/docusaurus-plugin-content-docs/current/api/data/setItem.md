---
sidebar_position: 1
title: setItem 设置数据内容
---

## setItem

**类型**: `MethodDeclaration`

**定义位置**: [`data.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/data.ts)

### 描述

设置数据内容

参数 `key`: 键(存档文件名)

参数 `value`: 写入的数据

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `key` | `string` | - | - |
| `value` | `any` | - | - |

### 返回值

类型: `Promise&lt;void&gt;`

### 源代码

**位置**: [第 1143 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/data.ts#L1143)

```typescript
public async setItem(key: string, value: any): Promise<void> {
    return new Promise(resolve => {
      this.open().then(objectStore => {
        const request = objectStore.put({key, value})
        request.onsuccess = event => {
          resolve()
        }
      })
    })
  }
```

---



文档生成时间：2026/1/31 13:13:58
