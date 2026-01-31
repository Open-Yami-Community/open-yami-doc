---
sidebar_position: 1
title: open 打开数据库
---

## open

**类型**: `MethodDeclaration`

**定义位置**: [`data.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/data.ts)

### 描述

打开数据库

返回值:对象存储空间

### 返回值

类型: `Promise&lt;IDBObjectStore&gt;`

对象存储空间

### 源代码

**位置**: [第 1087 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/data.ts#L1087)

```typescript
private async open(): Promise<IDBObjectStore> {
    if (!this.promise) {
      // localStorage数据容量有限，indexedDB可以存放大量数据
      const dbName = 'yami-rpg:' + Data.config.gameId
      const request = indexedDB.open(dbName)
      request.onupgradeneeded = (event: any) => {
        const db = event.target.result
        db.createObjectStore('game-data', {keyPath: 'key'})
      }
      this.promise = new Promise(resolve => {
        request.onsuccess = (event: any) => {
          resolve(event.target.result)
        }
      })
    }
    const db = await this.promise
    const transaction = db.transaction(['game-data'], 'readwrite')
    return transaction.objectStore('game-data')
  }
```

---



文档生成时间：2026/1/31 13:13:58
