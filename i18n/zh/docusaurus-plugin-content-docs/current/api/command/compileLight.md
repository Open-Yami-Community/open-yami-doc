---
sidebar_position: 1
title: compileLight 编译光源对象
---

## compileLight

**类型**: `MethodDeclaration`

**所属类**: `CommandFunctionList`

**定义位置**: [`command.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts)

### 描述

编译光源对象

参数 `light`: 光源访问器

返回值:光源访问器函数

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `light` | `LightGetter` | - | - |

### 返回值

类型: `() =&gt; SceneLight \| undefined`

光源访问器函数

### 源代码

**位置**: [第 777 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts#L777)

```typescript
private compileLight(light: LightGetter): () => SceneLight | undefined {
    switch (light.type) {
      case 'trigger':
        return () => Command.filterValidObject(CurrentEvent.triggerLight)
      case 'latest':
        return () => Command.filterValidObject(SceneLight.latest)
      case 'by-id': {
        const {presetId} = light
        return () => {
          return Scene.entity.get(presetId) as SceneLight | undefined
        }
      }
      case 'variable': {
        const getLight = Command.compileVariable(light.variable, Attribute.LIGHT_GET)
        return () => Command.filterValidObject(getLight())
      }
    }
  }
```

---



文档生成时间：2026/1/31 13:13:58
