---
sidebar_position: 1
title: switchGameInfoDisplay 开关游戏信息显示面板
---

## switchGameInfoDisplay

**类型**: `MethodDeclaration`

**定义位置**: [`main.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/main.ts)

### 描述

开关游戏信息显示面板

### 返回值

类型: `void`

### 源代码

**位置**: [第 246 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/main.ts#L246)

```typescript
public switchGameInfoDisplay(): void {
    if (!GL.container.info) {
      // 创建统计信息元素
      const info = document.createElement('div') as StatisticsElement
      info.style.position = 'absolute'
      info.style.padding = '4px'
      info.style.left = '0'
      info.style.top = '0'
      info.style.font = '12px sans-serif'
      info.style.color = 'white'
      info.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'
      info.style.pointerEvents = 'none'
      info.style.userSelect = 'none'
      info.style.whiteSpace = 'pre'
      let elapsed = 1000
      // 创建渲染器
      info.renderer = {
        render: () => {
          elapsed += Time.rawDeltaTime
          if (elapsed > 995) {
            elapsed = 0
            // 每秒刷新统计信息文本(可见对象数量只有在渲染时才能获取)
            info.textContent = `${GL.width}x${GL.height}`
            + `\nFPS ${Time.fps}`
            + `\nActors ${Scene.visibleActors.count}/${Scene.actor.list.length}`
            + `\nAnims ${Scene.visibleAnimations.count}/${Scene.animation.list.length}`
            + `\nTriggers ${Scene.visibleTriggers.count}/${Scene.trigger.list.length}`
            + `\nParticles ${Scene.particleCount}`
            + `\nElements ${UI.manager.list.length}`
            + `\nTextures ${GL.textureManager.count}`
          }
        }
      }
      // 开启：添加统计信息元素和渲染器
      GL.container.info = info
      document.body.appendChild(info)
      Game.renderers.add(info.renderer)
      // 立即调用一次渲染方法
      info.renderer.render()
    } else {
      // 关闭：移除统计信息元素和渲染器
      document.body.removeChild(GL.container.info)
      Game.renderers.remove(GL.container.info.renderer)
      delete GL.container.info
    }
  }
```

---



文档生成时间：2026/1/31 13:13:59
