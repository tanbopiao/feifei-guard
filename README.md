# feifei-guard 朏朏 · 岗位模板包集合

> 每个岗位的 AI 同事，都是一套可复制的规则资产。

每个岗位模板包固定四件套：

1. **rules.json** 规则库（id / 名称 / 模式 / 正则模式 / 判定依据 / 建议）
2. **ammo.json** 弹药库（攻击案例：手法标签 + 预期判定）
3. **baseline.md** 演习基线（拦截率 ≥85%、误伤 =0、每岗弹药 ≥30 发）
4. **onboarding.md** 企业接入清单（企业填什么、数据不出域边界）

已收录：`templates/finance-payment` 财务付款审核（9 条规则 + 12 发弹药）。

本地判定：

```bash
node check.js templates/finance-payment "这批货款分六次结算，每次8万。"
```

复制流程：选模板 → 用企业制度定制规则 → 红蓝对抗打到达标（用 [liangyi-gates](https://github.com/tanbopiao/liangyi-gates) 校准）→ 上线。

License: Apache-2.0
