---
sidebar_position: 1
title: preload 预加载文件
---

## preload

**类型**: `MethodDeclaration`

**定义位置**: [`loader.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/loader.ts)

### 描述

预加载文件

### 返回值

类型: `Promise&lt;void&gt;`

### 源代码

**位置**: [第 42 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/loader.ts#L42)

```typescript
public async preload(): Promise<void> {
    const {preload, deployed} = Data.config
    if (preload === 'never' ||
      preload === 'deployed' && !deployed) {
      return
    }
    // 筛选出需要加载的文件，并统计字节数
    const images = []
    const audio = []
    let totalBytes = 0
    for (const {guid, size} of Data.manifest.images) {
      if (size !== 0) {
        totalBytes += size!
        images.push(guid)
      }
    }
    for (const {path, size} of Data.manifest.audio) {
      if (size !== 0) {
        totalBytes += size!
        audio.push(path)
      }
    }

    // 临时修改相关方法
    // 等待预加载事件中的文件加载完毕
    const {finish} = this
    this.finish = () => {
      finish.call(this)
      this.totalBytes = totalBytes
    }
    this.finish()
    this.updateLoadingStats = Function.empty
    EventManager.emit('preload')
    await this.promise
    // @ts-ignore
    delete this.updateLoadingStats

    // 开始预加载文件
    const promises = []
    for (const guid of images) {
      promises.push(Loader.loadImage({guid}))
    }
    for (const path of audio) {
      promises.push(Loader.getBlobUrl(path))
    }
    await Promise.all(promises)
  }
```

---



文档生成时间：2026/1/31 13:13:59
