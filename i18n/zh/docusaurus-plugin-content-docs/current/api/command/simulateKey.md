---
sidebar_position: 1
title: simulateKey 模拟按键
---

## simulateKey

**类型**: `MethodDeclaration`

**所属类**: `CommandFunctionList`

**定义位置**: [`command.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts)

### 描述

模拟按键

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `\{ operation, keycode, \}` | `\{
		operation\: "click" \| "press" \| "release";
		keycode\: string;
	\}` | - | - |

### 返回值

类型: `CommandFunction`

### 源代码

**位置**: [第 8943 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts#L8943)

```typescript
protected simulateKey({
		operation,
		keycode,
	}: {
		operation: "click" | "press" | "release";
		keycode: string;
	}): CommandFunction {
		return () => {
			switch (operation) {
				case "click":
					Input.simulateKey("keydown", keycode);
					Input.simulateKey("keyup", keycode);
					break;
				case "press":
					Input.simulateKey("keydown", keycode);
					break;
				case "release":
					Input.simulateKey("keyup", keycode);
					break;
			}
			return true;
		};
	}
```

---



文档生成时间：2026/1/31 13:13:58
