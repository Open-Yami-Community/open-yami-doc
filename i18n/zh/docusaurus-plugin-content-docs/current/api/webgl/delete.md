---
sidebar_position: 1
title: delete 从管理器中删除基础纹理
---

## delete

**类型**: `MethodDeclaration`

**所属类**: `TextureManager`

**定义位置**: [`webgl.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/webgl.ts)

### 描述

从管理器中删除基础纹理

参数 `texture`: 基础纹理

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `texture` | `BaseTexture` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 2383 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/webgl.ts#L2383)

```typescript
public delete(texture: BaseTexture): void {
    const i = texture.index
    const {gl, map} = this
    gl.deleteTexture(texture.glTexture)
    // 通过索引删除映射表中的纹理
    if (map[i] === texture) {
      delete map[i]
      this.count--
      if (this.pointer > i) {
        this.pointer = i
      }
    }
  }
```

---



文档生成时间：2026/1/31 13:13:59
