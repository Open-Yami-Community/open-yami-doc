---
sidebar_position: 1
title: setParentSkill 设置父级技能的引用
---

## setParentSkill

**类型**: `MethodDeclaration`

**定义位置**: [`data.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/data.ts)

### 描述

设置父级技能的引用

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `skill` | `SkillFile` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 393 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/data.ts#L393)

```typescript
private setParentSkill(skill: SkillFile): void {
    if (skill.inherit !== '' && skill.inherit !== skill.id) {
      const parent = Data.skills[skill.inherit]
      if (parent !== undefined) {
        skill.parent = parent
      }
    }
  }
```

---



文档生成时间：2026/1/31 13:13:58
