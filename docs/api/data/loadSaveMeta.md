---
sidebar_position: 1
title: loadSaveMeta 加载存档元数据列表
---

## loadSaveMeta

**类型**: `MethodDeclaration`

**定义位置**: [`data.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/data.ts)

### 描述

加载存档元数据列表

返回值:存档元数据列表

### 返回值

类型: `Promise&lt;Array&lt;SaveMeta&gt;&gt;`

存档元数据列表

### 源代码

**位置**: [第 824 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/data.ts#L824)

```typescript
public async loadSaveMeta(): Promise<Array<SaveMeta>> {
    const filenames: Array<string> = []
    const promises = []
    const metaname = /^save\d{2}\.meta$/
    const extname = /\.meta$/
    switch (Stats.shell) {
      case 'electron': {
        const saveDir = Loader.routeSave('Save')
        const fsp = require('fs').promises
        // 如果不存在存档文件夹，获取空文件列表
        const files = await fsp.readdir(
          saveDir, {withFileTypes: true},
        ).catch((error: Error) => [])
        for (const file of files) {
          // 获取所有的meta文件名
          if (file.isFile() && metaname.test(file.name)) {
            filenames.push(file.name)
          }
        }
        // 加载所有meta文件
        for (const filename of filenames) {
          const filepath = Loader.routeSave(`Save/${filename}`)
          promises.push(
            fsp.readFile(filepath, 'utf8').then(
              (string: string) => JSON.parse(string)
          ))
        }
        break
      }
      case 'browser':
        for (const key of await IDB.getKeys()) {
          if (metaname.test(key)) {
            filenames.push(key)
          }
        }
        for (const filename of filenames.sort()) {
          promises.push(IDB.getItem(filename))
        }
        break
    }
    return Promise.all(promises).then(data => {
      const list: Array<SaveMeta> = []
      const length = data.length
      for (let i = 0; i < length; i++) {
        // 如果meta数据有效，添加到列表中返回
        if (data[i]) {
          const name = filenames[i].replace(extname, '')
          const index = parseInt(name.slice(-2))
          list.push({
            index: index,
            name: name,
            data: data[i],
          })
        }
      }
      return list
    })
  }
```

---



文档生成时间：2026/1/31 13:13:58
