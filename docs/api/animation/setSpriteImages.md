---
sidebar_position: 1
title: setSpriteImages 设置精灵图像映射表
---

## setSpriteImages

**类型**: `MethodDeclaration`

**所属类**: `AnimationPlayer`

**定义位置**: [`animation.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/animation.ts)

### 描述

设置精灵图像映射表

参数 `images`: 优先使用的精灵图像映射表

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `images` | `HashMap&lt;string&gt;` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 329 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/animation.ts#L329)

```typescript
public setSpriteImages(images: HashMap<string>): void {
    // 让指定的图像映射表(更高优先级)继承当前的动画图像映射表
    this.images = Object.setPrototypeOf(images, this.images)
  }
```

---



文档生成时间：2026/1/31 13:13:58
