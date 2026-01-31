---
sidebar_position: 1
title: add 添加角色状态
---

## add

**类型**: `MethodDeclaration`

**所属类**: `StateManager`

**定义位置**: [`actor.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts)

### 描述

添加角色状态

参数 `state`: 状态实例

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `state` | `State` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 3781 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts#L3781)

```typescript
public add(state: State): void {
		const { id } = state;
		const { idMap } = this;
		// 如果存在该状态，先移除
		if (id in idMap) {
			this.remove(idMap[id]!);
		}
		idMap[id] = state;
		this.version++;
		this.countdownList.append(state);
		state.parent = this;
		state.emit("stateadd");
	}
```

---



文档生成时间：2026/1/31 13:13:58
