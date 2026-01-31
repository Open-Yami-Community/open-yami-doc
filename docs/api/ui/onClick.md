---
sidebar_position: 1
title: onClick 
---

## onClick

**类型**: `MethodDeclaration`

**所属类**: `ButtonElement`

**定义位置**: [`ui.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts)

### 返回值

类型: `void`

### 源代码

**位置**: [第 4530 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts#L4530)

```typescript
public onClick(): void {
      if (!this.button.isProtected()) {
        this.button.playClickSound()
      }
    }
```

---



文档生成时间：2026/1/31 13:13:59
