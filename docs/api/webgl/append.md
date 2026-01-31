---
sidebar_position: 1
title: append 添加基础纹理到管理器中
---

## append

**类型**: `MethodDeclaration`

**所属类**: `TextureManager`

**定义位置**: [`webgl.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/webgl.ts)

### 描述

添加基础纹理到管理器中

参数 `texture`: 基础纹理

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `texture` | `BaseTexture` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 2366 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/webgl.ts#L2366)

```typescript
public append(texture: BaseTexture): void {
    if (texture.index === -1) {
      // 给纹理分配一个未使用的索引
      let i = this.pointer
      const map = this.map
      while (map[i] !== undefined) {i++}
      map[i] = texture
      texture.index = i
      this.pointer = i + 1
      this.count++
    }
  }
```

---



文档生成时间：2026/1/31 13:13:59
