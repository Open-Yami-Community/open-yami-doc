---
sidebar_position: 1
title: compileParamList 编译脚本参数列表
---

## compileParamList

**类型**: `MethodDeclaration`

**所属类**: `ScriptManager`

**定义位置**: [`event.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/event.ts)

### 描述

编译脚本参数列表

参数 `id`: 脚本文件ID

参数 `parameters`: 脚本参数数据列表

返回值:编译后的脚本参数列表

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `id` | `string` | - | - |
| `parameters` | `HashMap&lt;unknown&gt;` | - | - |

### 返回值

类型: `Array&lt;unknown&gt;`

编译后的脚本参数列表

### 源代码

**位置**: [第 965 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/event.ts#L965)

```typescript
public static compileParamList(id: string, parameters: HashMap<unknown>): Array<unknown> {
    const script = Data.scripts[id]
    // 如果不存在脚本，返回空列表
    if (script === undefined) {
      return Array.empty
    }
    const defParameters = script.parameters
    const length = defParameters.length
    // 如果不存在参数，返回空列表
    if (length === 0) {
      return Array.empty
    }
    // 创建扁平化的参数列表
    const parameterList = new Array(length * 2)
    for (let i = 0; i < length; i++) {
      const defParameter = defParameters[i]
      const {key, type} = defParameter
      let value = parameters[key]
      // 根据默认参数类型，对实参进行有效性检查
      // 如果实参是无效的，则使用默认值
      switch (type) {
        case 'boolean':
        case 'number':
          if (typeof value !== type) {
            value = defParameter.value
          }
          break
        case 'variable-number':
          if (typeof value !== 'number') {
            if ((value as ScriptVariableGetter)?.getter === 'variable') {
              value = Command.compileVariable(value as VariableGetter, Attribute.NUMBER_GET)
            } else {
              value = Function.undefined
            }
          }
          break
        case 'option':
          if (!defParameter.options!.includes(value as boolean | number | string)) {
            value = defParameter.value
          }
          break
        case 'number[]':
        case 'string[]':
          if (Array.isArray(value)) {} else {
            value = defParameter.value
          }
          break
        case 'attribute':
          value = Attribute.get(value as string)
          break
        case 'attribute-key':
          value = Attribute.getKey(value as string)
          break
        case 'enum':
          value = Enum.get(value as string)
          break
        case 'enum-value':
          value = Enum.getValue(value as string)
          break
        case 'actor': {
          const id = value as string
          value = () => Scene.entity.get(id)
          break
        }
        case 'region': {
          const id = value as string
          value = () => Scene.entity.get(id)
          break
        }
        case 'light': {
          const id = value as string
          value = () => Scene.entity.get(id)
          break
        }
        case 'animation': {
          const id = value as string
          value = () => Scene.entity.get(id)
          break
        }
        case 'particle': {
          const id = value as string
          value = () => Scene.entity.get(id)
          break
        }
        case 'parallax': {
          const id = value as string
          value = () => Scene.entity.get(id)
          break
        }
        case 'tilemap': {
          const id = value as string
          value = () => Scene.entity.get(id)
          break
        }
        case 'element': {
          const id = value as string
          value = () => UI.entity.get(id)
          break
        }
        case 'keycode':
          if (typeof value !== 'string') {
            value = defParameter.value
          }
          break
        case 'variable-getter':
          if ((value as ScriptVariableGetter)?.getter === 'variable') {
            value = Command.compileVariable(value as VariableGetter, Attribute.GET)
          } else {
            value = Function.undefined
          }
          break
        case 'variable-setter':
          if ((value as ScriptVariableGetter)?.getter === 'variable') {
            value = {
              get: Command.compileVariable(value as VariableGetter, Attribute.GET),
              set: Command.compileVariable(value as VariableGetter, Attribute.SAFE_SET),
            }
          } else {
            value = Function.undefined
          }
          break
        case 'actor-getter':
          if ((value as ScriptActorGetter)?.getter === 'actor') {
            value = Command.compileActor(value as ActorGetter)
          } else {
            value = Function.undefined
          }
          break
        case 'skill-getter':
          if ((value as ScriptSkillGetter)?.getter === 'skill') {
            value = Command.compileSkill(value as SkillGetter)
          } else {
            value = Function.undefined
          }
          break
        case 'state-getter':
          if ((value as ScriptStateGetter)?.getter === 'state') {
            value = Command.compileState(value as StateGetter)
          } else {
            value = Function.undefined
          }
          break
        case 'equipment-getter':
          if ((value as ScriptEquipmentGetter)?.getter === 'equipment') {
            value = Command.compileEquipment(value as EquipmentGetter)
          } else {
            value = Function.undefined
          }
          break
        case 'item-getter':
          if ((value as ScriptItemGetter)?.getter === 'item') {
            value = Command.compileItem(value as ItemGetter)
          } else {
            value = Function.undefined
          }
          break
        case 'element-getter':
          if ((value as ScriptElementGetter)?.getter === 'element') {
            value = Command.compileElement(value as ElementGetter)
          } else {
            value = Function.undefined
          }
          break
        case 'position-getter':
          if ((value as ScriptPositionGetter)?.getter === 'position') {
            const getPoint = Command.compilePosition(value as PositionGetter)
            value = () => {
              const point = getPoint()
              return point ? {x: point.x, y: point.y} : undefined
            }
          } else {
            value = Function.undefined
          }
          break
        default:
          if (typeof value !== 'string') {
            value = defParameter.value
          }
          break
      }
      const pi = i * 2
      parameterList[pi] = key
      parameterList[pi + 1] = value
    }
    return parameterList
  }
```

---



文档生成时间：2026/1/31 13:13:59
