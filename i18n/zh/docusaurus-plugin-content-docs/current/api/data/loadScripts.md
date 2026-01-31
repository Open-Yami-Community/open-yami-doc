---
sidebar_position: 1
title: loadScripts 加载脚本文件(动态导入模块)
---

## loadScripts

**类型**: `MethodDeclaration`

**定义位置**: [`data.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/data.ts)

### 描述

加载脚本文件(动态导入模块)

### 返回值

类型: `Promise&lt;void&gt;`

### 源代码

**位置**: [第 588 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/data.ts#L588)

```typescript
private async loadScripts(): Promise<void> {
    this.remapScripts()
    const promises: Array<LoadingScriptPromise> = []
    const scripts: HashMap<ScriptWrap> = this.scripts = {}
    // 动态导入所有脚本文件
    for (const meta of this.manifest.script) {
      const promise = import(`../../${meta.path}`) as LoadingScriptPromise
      promise.meta = meta
      promises.push(promise)
    }
    for (const promise of promises) {
      try {
        // 等待导入完成，获取构造函数
        const module = await promise
        const constructor = module.default
        if (typeof constructor === 'function') {
          const {meta} = promise
          constructor.guid = meta.guid
          scripts[meta.guid] = {
            constructor: constructor,
            parameters: meta.parameters ?? [],
          }
        }
      } catch (error) {
        console.error(error)
      }
    }
  }
```

---



文档生成时间：2026/1/31 13:13:58
