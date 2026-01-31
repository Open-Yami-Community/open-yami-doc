---
sidebar_position: 1
title: importFonts 导入字体
---

## importFonts

**类型**: `MethodDeclaration`

**所属类**: `Printer`

**定义位置**: [`printer.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/printer.ts)

### 描述

导入字体

参数 `imports`: 导入字体的文件ID列表

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `imports` | `Array&lt;string&gt;` | - | - |

### 返回值

类型: `Promise&lt;void&gt;`

### 源代码

**位置**: [第 1184 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/printer.ts#L1184)

```typescript
private static async importFonts(imports: Array<string>): Promise<void> {
    const imported = this.imported
    const importing = this.importing
    const fontFaces = this.fontFaces
    const regexp = /([^/]+)\.\S+\.\S+$/
    const promises = []
    for (const guid of imports) {
      const meta = Data.manifest.guidMap[guid] as FontFileMeta | undefined
      if (!meta) continue
      const path = meta.path
      const name = meta.name ?? path.match(regexp)?.[1]
      // 如果没有名字或已经加载，跳过
      if (!name || imported.includes(name)) {
        continue
      }
      imported.push(name)
      if (guid in fontFaces) {
        document.fonts.add(fontFaces[guid]!)
        continue
      }
      importing.push(name)
      promises.push(Loader.get({
        path: path,
        type: 'arraybuffer',
      }).then(
        buffer => {
          new FontFace(name, buffer).load().then(
            font => {
              fontFaces[guid] = font
              importing.remove(name)
              document.fonts.add(font)
              font.guid = guid
              font.name = name
            },
            error => {
              importing.remove(name)
            },
          )
        },
        error => {
          importing.remove(name)
        },
      ))
    }
    await Promise.all(promises)
  }
```

---



文档生成时间：2026/1/31 13:13:59
