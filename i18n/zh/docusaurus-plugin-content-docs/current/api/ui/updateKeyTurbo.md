---
sidebar_position: 1
title: updateKeyTurbo 更新按键连发
---

## updateKeyTurbo

**类型**: `MethodDeclaration`

**定义位置**: [`ui.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts)

### 描述

更新按键连发

### 返回值

类型: `void`

### 源代码

**位置**: [第 674 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts#L674)

```typescript
private updateKeyTurbo(): void {
    if (this.dirKey === '') return
    this.keyTurboElapsed += Time.rawDeltaTime
    switch (this.keyTurbo) {
      case false:
        if (this.keyTurboElapsed >= 500) {
          this.keyTurboElapsed -= 500
          this.keyTurbo = true
          this.selectButtonByDirKey(this.dirKey)
        }
        break
      case true:
        if (this.keyTurboElapsed >= 100) {
          this.keyTurboElapsed -= 100
          this.selectButtonByDirKey(this.dirKey)
        }
        break
    }
  }
```

---



文档生成时间：2026/1/31 13:13:59
