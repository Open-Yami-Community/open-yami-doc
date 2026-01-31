---
sidebar_position: 1
title: initialize 初始化界面管理器
---

## initialize

**类型**: `MethodDeclaration`

**定义位置**: [`ui.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts)

### 描述

初始化界面管理器

### 返回值

类型: `void`

### 源代码

**位置**: [第 36 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts#L36)

```typescript
public initialize(): void {
    // 创建元素管理器
    this.manager = new UIElementManager()

    // 创建实体对象管理器
    this.entity = new UIEntityManager()

    // 加载预设元素
    this.loadPresets()

    // 创建根元素
    this.root = new RootElement()
    this.root.resize()

    // 设置初始界面缩放系数
    this.setScale(Data.globalData.uiScale)

    // 元素类映射表(数据类名->类)
    this.elementClassMap = {
      image: ImageElement,
      text: TextElement,
      textbox: TextBoxElement,
      dialogbox: DialogBoxElement,
      progressbar: ProgressBarElement,
      button: ButtonElement,
      animation: AnimationElement,
      video: VideoElement,
      window: WindowElement,
      container: ContainerElement,
    }

    // 侦听事件
    window.on('resize', this.resize)
    Input.on('keydown', this.keydown)
    Input.on('keyup', this.keyup)
    Input.on('mousedown', this.mousedown)
    Input.on('mousedownLB', this.mousedownLB)
    Input.on('mousedownRB', this.mousedownRB)
    Input.on('mouseup', this.mouseup)
    Input.on('mouseupLB', this.mouseupLB)
    Input.on('mouseupRB', this.mouseupRB)
    Input.on('mousemove', this.mousemove)
    Input.on('mouseleave', this.mouseleave)
    Input.on('doubleclick', this.doubleclick)
    Input.on('wheel', this.wheel)
    Input.on('touchstart', this.touchstart)
    Input.on('touchmove', this.touchmove)
    Input.on('touchend', this.touchend)
    Input.on('gamepadbuttonpress', this.gamepadbuttonpress)
    Input.on('gamepadbuttonrelease', this.gamepadbuttonrelease)
    Input.on('gamepadleftstickchange', this.gamepadleftstickchange)
    Input.on('gamepadrightstickchange', this.gamepadrightstickchange)
  }
```

---



文档生成时间：2026/1/31 13:13:59
