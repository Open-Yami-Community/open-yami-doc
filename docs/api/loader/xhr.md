---
sidebar_position: 1
title: xhr 使用XHR方法加载文件
---

## xhr

**类型**: `MethodDeclaration`

**定义位置**: [`loader.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/loader.ts)

### 描述

使用XHR方法加载文件

返回值:响应数据

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `\{path, type\}` | `\{
    /\*\* 文件路径 \*/
    path\: string
    /\*\* 资源类型 \*/
    type\: 'text' \| 'json' \| 'blob' \| 'arraybuffer'
  \}` | - | - |

### 返回值

类型: `Promise&lt;any&gt;`

响应数据

### 源代码

**位置**: [第 143 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/loader.ts#L143)

```typescript
public xhr({path, type}: {
    /** 文件路径 */
    path: string
    /** 资源类型 */
    type: 'text' | 'json' | 'blob' | 'arraybuffer'
  }): Promise<any> {
    return new Promise((resolve, reject) => {
      const meta = Data.manifest?.pathMap[path]
      const size = meta?.size ?? 0
      const request = new XMLHttpRequest()
      const progress = new LoadingProgress(size)
      // 开始新的加载任务
      if (this.complete) {
        this.complete = false
        this.promise = new Promise(resolve => {
          this.resolve = resolve
        })
      }
      this.loadingProgressList.push(progress)
      // 更新加载进度
      request.onloadstart =
      request.onprogress = event => {
        progress.update(event)
      }
      request.onload = event => {
        progress.update(event)
        resolve(request.response)
      }
      request.onerror = event => {
        progress.loaded = size
        reject(request.response)
      }
      request.open('GET', path)
      request.responseType = type
      request.send()
    })
  }
```

---



文档生成时间：2026/1/31 13:13:59
