---
sidebar_position: 1
title: loadMeta 加载文件的元数据清单
---

## loadMeta

**类型**: `MethodDeclaration`

**定义位置**: [`data.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/data.ts)

### 描述

加载文件的元数据清单

### 返回值

类型: `Promise&lt;void&gt;`

### 源代码

**位置**: [第 102 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/data.ts#L102)

```typescript
public async loadMeta(): Promise<void> {
    const path = 'Data/manifest.json'
    return Loader.get({
      path: path,
      type: 'json',
    }).then(
      data => {
        if (!data) {
          throw new SyntaxError(path)
        }
        return this.manifest = data as Manifest
      }
    ).then(manifest => {
      // 创建GUID->元数据映射表
      const guidMap: HashMap<FileMeta> = {}
      const pathMap: HashMap<FileMeta> = {}
      Object.defineProperty(manifest, 'guidMap', {value: guidMap})
      Object.defineProperty(manifest, 'pathMap', {value: pathMap})
      for (const [key, group] of Object.entries(manifest)) {
        switch (key) {
          case 'images':
          case 'audio':
          case 'videos':
          case 'fonts':
          case 'script':
          case 'others':
            // 处理异步资产文件的元数据
            for (const meta of group as Array<FileMeta>) {
              meta.guid = this.parseGUID(meta)
              guidMap[meta.guid] = meta
              pathMap[meta.path] = meta
            }
            break
          default:
            if (!this.config.deployed) {
              // 处理同步资产文件的元数据
              for (const meta of group as Array<FileMeta>) {
                meta.guid = this.parseGUID(meta)
              }
            }
            break
        }
      }
    })
  }
```

---



文档生成时间：2026/1/31 13:13:58
