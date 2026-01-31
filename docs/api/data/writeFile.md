---
sidebar_position: 1
title: writeFile 写入文件(Electron)
---

## writeFile

**类型**: `MethodDeclaration`

**定义位置**: [`data.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/data.ts)

### 描述

写入文件(Electron)

参数 `filePath`: 文件路径

参数 `content`: 数据内容

返回值:等待操作结束

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `filePath` | `string` | - | - |
| `content` | `string` | - | - |

### 返回值

类型: `Promise&lt;void&gt;`

等待操作结束

### 源代码

**位置**: [第 650 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/data.ts#L650)

```typescript
public async writeFile(filePath: string, content: string): Promise<void> {
    return require('electron').ipcRenderer.invoke('write-file', filePath, content)
  }
```

---



文档生成时间：2026/1/31 13:13:58
