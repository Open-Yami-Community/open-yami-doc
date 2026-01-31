---
sidebar_position: 1
title: loadObjects 加载各种对象数据文件
---

## loadObjects

**类型**: `MethodDeclaration`

**定义位置**: [`data.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/data.ts)

### 描述

加载各种对象数据文件

### 返回值

类型: `Promise&lt;void&gt;`

### 源代码

**位置**: [第 149 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/data.ts#L149)

```typescript
private async loadObjects(): Promise<void> {
    const {manifest} = this
    const idDescriptor = {writable: true, value: ''}
    const pathDescriptor = {writable: true, value: ''}
    const filenameDescriptor = {writable: true, value: ''}
    const idAndPathDescriptors = {
      id: idDescriptor,
      path: pathDescriptor,
    }
    if (this.config.deployed) {
      // 加载已打包的数据
      for (const key of [
        'scenes',
        'actors',
        'skills',
        'triggers',
        'items',
        'equipments',
        'states',
        'events',
        'ui',
        'animations',
        'particles',
        'tilesets',
      ] as Array<PackedMetaListKey>) {
        const group = manifest[key]
        for (const [guid, data] of Object.entries(group)) {
          idDescriptor.value = guid
          pathDescriptor.value = `File.${guid}`
          Object.defineProperties(data, idAndPathDescriptors)
        }
        if (key in this) {
          this[key] = group as HashMap<any>
        }
      }
    } else {
      // 加载未打包的数据
      const fileDescriptor: any = {
        path: '',
        type: 'json',
      }
      const table: Array<[PackedMetaListKey, any, any]> = [
        ['scenes',     {}, null],
        ['actors',     {}, null],
        ['skills',     {}, null],
        ['triggers',   {}, null],
        ['items',      {}, null],
        ['equipments', {}, null],
        ['states',     {}, null],
        ['events',     {}, null],
        ['ui',         {}, null],
        ['animations', {}, null],
        ['particles',  {}, null],
        ['tilesets',   {}, null],
      ]
      // 加载所有对象
      for (const row of table) {
        const key = row[0]
        const group = manifest[key]
        const length = group.length
        const promises = new Array(length)
        for (let i = 0; i < length; i++) {
          fileDescriptor.path = group[i].path
          promises[i] = Loader.get(fileDescriptor)
        }
        row[2] = {group, promises}
      }
      // 等待加载完成并设置ID
      for (const row of table) {
        const key = row[0]
        const map = row[1]
        const {group, promises} = row[2]
        const length = group.length
        for (let i = 0; i < length; i++) {
          const meta = group[i]
          try {
            const data = await promises[i]
            const id = meta.guid
            idDescriptor.value = id
            pathDescriptor.value = meta.path
            Object.defineProperties(data, idAndPathDescriptors)
            map[id] = data
          } catch (error: any) {
            console.warn(`Failed to read file: ${error.message}`)
          }
        }
        this[key] = map
      }
      // 提取技能|物品|装备的文件名(用于排序)
      const guidAndExt = /\.[0-9a-f]{16}\.\S+$/
      for (const key of ['skills', 'items', 'equipments'] as Array<PackedMetaListKey>) {
        const dataMap = this[key]
        for (const {guid, path} of manifest[key]) {
          const item = dataMap![guid]
          if (item !== undefined) {
            const index = path.lastIndexOf('/') + 1
            filenameDescriptor.value = path.slice(index).replace(guidAndExt, '')
            Object.defineProperty(item, 'filename', filenameDescriptor)
          }
        }
      }
    }
    this.precompile()
  }
```

---



文档生成时间：2026/1/31 13:13:58
