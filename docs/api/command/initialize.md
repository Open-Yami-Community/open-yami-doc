---
sidebar_position: 1
title: initialize 初始化自定义指令
---

## initialize

**类型**: `MethodDeclaration`

**所属类**: `CommandFunctionList`

**定义位置**: [`command.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts)

### 描述

初始化自定义指令

### 返回值

类型: `void`

### 源代码

**位置**: [第 97 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts#L97)

```typescript
public initialize(): void {
		const commands = Data.commands;
		const parameters = {};
		// 给自定义指令添加空的参数表
		for (const command of commands) {
			command.parameters = parameters;
		}
		// 创建自定义指令的脚本管理器
		this.custom = ScriptManager.create({}, commands);
		// 获取脚本实例，以GUID作为键进行注册
		for (const instance of this.custom.instances) {
			const guid: string = instance.constructor.guid;
			this.scriptMap[guid] = instance;
		}
	}
```

---



文档生成时间：2026/1/31 13:13:58
