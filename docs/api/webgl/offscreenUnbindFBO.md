---
sidebar_position: 1
title: offscreenUnbindFBO 
---

## offscreenUnbindFBO

**类型**: `FunctionDeclaration`

**定义位置**: [`webgl.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/webgl.ts)

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `this` | `typeof GL` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 1418 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/webgl.ts#L1418)

```typescript
function offscreenUnbindFBO(this: typeof GL) {
        this.binding = null
        this.flip = 1
        // 重新绑定到当前离屏纹理的FBO
        this.bindFramebuffer(this.FRAMEBUFFER, this.offscreen.current.fbo)
      }
```

---



文档生成时间：2026/1/31 13:13:59
