---
sidebar_position: 1
title: onFinish 设置移动结束回调函数
---

## onFinish

**类型**: `MethodDeclaration`

**所属类**: `ActorNavigator`

**定义位置**: [`actor.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts)

### 描述

设置移动结束回调函数

参数 `callback`: 在角色停止当前的移动行为后触发

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `callback` | `CallbackFunction` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 2260 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts#L2260)

```typescript
public onFinish(callback: CallbackFunction): void {
		if (this.mode === "stop") {
			return callback();
		}
		if (this.callbacks !== null) {
			this.callbacks.push(callback);
		} else {
			this.callbacks = [callback];
		}
	}
```

---



文档生成时间：2026/1/31 13:13:58
