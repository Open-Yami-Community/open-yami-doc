---
sidebar_position: 1
title: update 更新加载数据
---

## update

**类型**: `MethodDeclaration`

**所属类**: `LoadingProgress`

**定义位置**: [`loader.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/loader.ts)

### 描述

更新加载数据

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `event` | `ProgressEvent&lt;EventTarget&gt;` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 372 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/loader.ts#L372)

```typescript
public update(event: ProgressEvent<EventTarget>): void {
    this.loaded = event.loaded
    this.total = event.total
    this.lengthComputable = event.lengthComputable
  }
```

---



文档生成时间：2026/1/31 13:13:59
