#!/usr/bin/env node
/* 朏朏 · 模板包检查器：用模板包 rules.json 对一段文本做本地判定。
 * 规则字段：patterns 为正则字符串数组，mode=hard 硬拦 / soft 提示。 */
const fs = require("fs");
function check(rulesDoc, text) {
  const hits = [];
  for (const r of rulesDoc.rules) {
    for (const ps of r.patterns) {
      const re = new RegExp(ps, "g"); re.lastIndex = 0;
      if (re.test(text)) { hits.push({ id: r.id, name: r.name, mode: r.mode }); break; }
    }
  }
  const hard = hits.some(h => h.mode === "hard");
  return { v: hits.length ? (hard ? "red" : "amber") : "green", hits };
}
module.exports = { check };
if (require.main === module) {
  const [tplDir, text] = [process.argv[2], process.argv[3]];
  if (!tplDir || !text) { console.error("用法: node check.js <模板包目录> '<待检文本>'"); process.exit(1); }
  const r = check(JSON.parse(fs.readFileSync(`${tplDir}/rules.json`, "utf8")), text);
  console.log(`判定: ${r.v}`);
  r.hits.forEach(h => console.log(`  [${h.id}] ${h.name}（${h.mode === "hard" ? "硬拦" : "提示"}）`));
}
