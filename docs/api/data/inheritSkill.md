---
sidebar_position: 1
title: inheritSkill 继承父级技能的数据
---

## inheritSkill

**类型**: `MethodDeclaration`

**定义位置**: [`data.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/data.ts)

### 描述

继承父级技能的数据

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `skill` | `SkillFile` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 403 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/data.ts#L403)

```typescript
private inheritSkill(skill: SkillFile): void {
    if (skill.parent) {
      Data.mergeArrayByProperty(skill.attributes, skill.parent.attributes, 'key')
      Object.setPrototypeOf(skill.events, skill.parent.events)
      Data.mergeScripts(skill.scripts, skill.parent.scripts)
    }
  }
```

---



文档生成时间：2026/1/31 13:13:58
