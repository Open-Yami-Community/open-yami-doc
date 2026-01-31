---
sidebar_position: 1
title: remapScripts 重新映射脚本路径(TS->JS)
---

## remapScripts

**类型**: `MethodDeclaration`

**定义位置**: [`data.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/data.ts)

### 描述

重新映射脚本路径(TS->JS)

### 返回值

类型: `void`

### 源代码

**位置**: [第 618 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/data.ts#L618)

```typescript
private remapScripts(): void {
    if (this.config.deployed) return
    const tsExtname = /\.ts$/
    const tsOutDir = this.tsOutDir
    for (const meta of this.manifest.script) {
      if (tsExtname.test(meta.path)) {
        meta.path = tsOutDir + meta.path.replace(tsExtname, '.js')
      }
    }
  }
```

---



文档生成时间：2026/1/31 13:13:58
