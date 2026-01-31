---
sidebar_position: 1
title: create 创建脚本管理器(使用脚本数据)
---

## create

**类型**: `MethodDeclaration`

**所属类**: `ScriptManager`

**定义位置**: [`event.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/event.ts)

### 描述

创建脚本管理器(使用脚本数据)

参数 `owner`: 脚本宿主对象

参数 `data`: 脚本数据列表

返回值:生成的脚本管理器

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `owner` | `object` | - | - |
| `data` | `Array&lt;ScriptData&gt;` | - | - |

### 返回值

类型: `ScriptManager`

生成的脚本管理器

### 源代码

**位置**: [第 916 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/event.ts#L916)

```typescript
public static create(owner: object, data: Array<ScriptData>): ScriptManager {
    const manager = new ScriptManager(owner)
    // 如果脚本列表不为空
    if (data.length > 0) {
      for (const wrap of data) {
        // 如果脚本已禁用，跳过
        if (wrap.enabled === false) continue
        // 初始化以及重构参数列表(丢弃无效参数)
        if (wrap.initialized === undefined) {
          wrap.initialized = true
          wrap.parameters = ScriptManager.compileParamList(wrap.id, wrap.parameters)
        }
        const {id, parameters} = wrap
        const script = Data.scripts[id]
        // 如果不存在脚本，发送警告
        if (script === undefined) {
          const meta = Data.manifest.guidMap[id]
          const name = meta?.path ?? `#${id}`
          console.error(new Error(`The script is missing: ${name}`), owner)
          continue
        }
        // 创建脚本对象实例，并传递脚本参数
        const instance = new script.constructor(owner)
        const length = parameters.length
        for (let i = 0; i < length; i += 2) {
          const key = parameters[i]
          let value = parameters[i + 1]
          if (typeof value === 'function') {
            if (ScriptManager.deferredLoading) {
              // 如果值类型是函数，且开启了延时加载参数开关
              ScriptManager.pushDeferredParameter(instance, key, value)
              continue
            }
            value = value()
          }
          instance[key] = value
        }
        manager.add(instance)
      }
    }
    return manager
  }
```

---



文档生成时间：2026/1/31 13:13:59
