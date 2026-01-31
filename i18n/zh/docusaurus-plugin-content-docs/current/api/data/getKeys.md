---
sidebar_position: 1
title: getKeys 获取所有数据键(游戏存档文件名)
---

## getKeys

**类型**: `MethodDeclaration`

**定义位置**: [`data.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/data.ts)

### 描述

获取所有数据键(游戏存档文件名)

返回值:键列表

### 返回值

类型: `Promise&lt;Array&lt;string&gt;&gt;`

键列表

### 源代码

**位置**: [第 1111 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/data.ts#L1111)

```typescript
public async getKeys(): Promise<Array<string>> {
    return new Promise(resolve => {
      this.open().then(objectStore => {
        const request = objectStore.getAllKeys()
        request.onsuccess = (event: any) => {
          resolve(event.target.result)
        }
      })
    })
  }
```

---



文档生成时间：2026/1/31 13:13:58
