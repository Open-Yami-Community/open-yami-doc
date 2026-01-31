---
sidebar_position: 1
title: getItem 获取数据内容
---

## getItem

**类型**: `MethodDeclaration`

**定义位置**: [`data.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/data.ts)

### 描述

获取数据内容

参数 `key`: 键(存档文件名)

返回值:读取的数据

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `key` | `string` | - | - |

### 返回值

类型: `Promise&lt;any&gt;`

读取的数据

### 源代码

**位置**: [第 1127 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/data.ts#L1127)

```typescript
public async getItem(key: string): Promise<any> {
    return new Promise(resolve => {
      this.open().then(objectStore => {
        const request = objectStore.get(key)
        request.onsuccess = (event: any) => {
          resolve(event.target.result?.value)
        }
      })
    })
  }
```

---



文档生成时间：2026/1/31 13:13:58
