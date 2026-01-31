---
sidebar_position: 1
title: displayMessage 显示消息
---

## displayMessage

**类型**: `MethodDeclaration`

**所属类**: `CacheList`

**定义位置**: [`util.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/util.ts)

### 描述

显示消息

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `message` | `string` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 673 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/util.ts#L673)

```typescript
public displayMessage(message: string): void {
    if (!GL.container.log) {
      // 创建消息日志元素
      const log = document.createElement('div') as MessageElement
      log.style.position = 'absolute'
      log.style.left = '0'
      log.style.bottom = '0'
      log.style.font = '12px sans-serif'
      log.style.color = 'white'
      log.style.textShadow = '1px 1px black'
      log.style.pointerEvents = 'none'
      log.style.userSelect = 'none'
      // 创建更新器
      log.updater = {
        update: () => {
          // 持续显示消息5000ms
          if (log.timestamp + 5000 <= Time.timestamp) {
            // 结束时延迟移除消息元素和更新器
            setTimeout(() => {
              delete GL.container.log
              GL.container.removeChild(log)
              Game.updaters.remove(log.updater)
            })
          }
        }
      }
      // 添加消息元素和更新器
      GL.container.log = log
      GL.container.appendChild(log)
      Game.updaters.add(log.updater)
    }
    GL.container.log.textContent = message
    GL.container.log.timestamp = Time.timestamp
  }
```

---



文档生成时间：2026/1/31 13:13:59
