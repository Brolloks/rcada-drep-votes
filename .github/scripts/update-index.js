const fs   = require("fs");
const path = require("path");

const INDEX_START = "<!-- AUTO-INDEX:START -->";
const INDEX_END   = "<!-- AUTO-INDEX:END -->";
const STATS_START = "<!-- AUTO-STATS:START -->";
const STATS_END   = "<!-- AUTO-STATS:END -->";

const IGNORE_BASENAMES = new Set([
  "index.md", "readme.md", "vote_template.md",
]);

function listMarkdownFiles(dir) {
  let out = [];
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) {
      out = out.concat(listMarkdownFiles(p));
    } else if (ent.isFile() && p.toLowerCase().endsWith(".md")) {
      if (!IGNORE_BASENAMES.has(path.basename(p).toLowerCase())) {
        out.push(p);
      }
    }
  }
  return out;
}

function parseFrontMatter(md) {
  if (!md.startsWith("---")) return null;
  const end = md.indexOf("\n---", 3);
  if (end === -1) return null;
  const raw = md.slice(3, end).trim();
  const data = {};
  for (const line of raw.split("\n")) {
    if (/^\s+/.test(line)) continue;
    const m = line.match(/^([A-Za-z0-9_]+)\s*:\s*(.*)\s*$/);
    if (!m) continue;
    let v = (m[2] || "").trim();
    if ((v.startsWith('"') && v.endsWith('"')) ||
        (v.startsWith("'") && v.endsWith("'"))) {
      v = v.slice(1, -1);
    }
    if (v.startsWith("[") && v.endsWith("]")) {
      v = v.slice(1, -1).trim();
    }
    data[m[1]] = v;
  }
  return data;
}

function esc(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function voteBadge(vote) {
  const v = (vote || "").toLowerCase();
  if (v === "yes")     return '<span class="badge badge-yes">Yes</span>';
  if (v === "no")      return '<span class="badge badge-no">No</span>';
  if (v === "abstain") return '<span class="badge badge-abstain">Abstain</span>';
  return '<span class="badge badge-type">' + esc(vote) + '</span>';
}

function voteCardClass(vote) {
  const v = (vote || "").toLowerCase();
  if (v === "yes")     return "vote-card yes-card fade-in";
  if (v === "no")      return "vote-card no-card fade-in";
  if (v === "abstain") return "vote-card abstain-card fade-in";
  return "vote-card fade-in";
}

// Scan vote files
const votesDir = "votes";
const files = fs.existsSync(votesDir) ? listMarkdownFiles(votesDir) : [];

const rows = [];
let countYes = 0, countNo = 0, countAbstain = 0;

for (const f of files) {
  const md = fs.readFileSync(f, "utf8");
  const fm = parseFrontMatter(md);
  if (!fm) continue;

  const status = (fm.status || "").toLowerCase();
  if (status && status !== "committed") continue;

  const vote = fm.vote || "";
  const v = vote.toLowerCase();

  if (v === "yes")          countYes++;
  else if (v === "no")      countNo++;
  else if (v === "abstain") countAbstain++;

  rows.push({
    date:  fm.vote_date || path.basename(f).slice(0, 10),
    title: fm.title     || path.basename(f),
    vote,
    type:  fm.type || "",
    link:  f.replace(/\\/g, "/").replace(/\.md$/i, ".html"),
  });
}

rows.sort(function(a, b) {
  return a.date < b.date ? 1 : a.date > b.date ? -1 : 0;
});

const totalVotes = countYes + countNo + countAbstain;

// Build AUTO-INDEX block
const N      = 10;
const latest = rows.slice(0, N);

let indexBlock;
if (latest.length === 0) {
  indexBlock = '<p style="color:var(--text-dim);font-family:var(--mono);font-size:13px;">No committed votes yet.</p>';
} else {
  const cards = latest.map(function(r) {
    var card = '  <div class="' + voteCardClass(r.vote) + '">' + "\n";
    card += '    <div class="vote-date">' + esc(r.date) + '</div>' + "\n";
    card += '    <strong><a href="' + esc(r.link) + '">' + esc(r.title) + '</a></strong>' + "\n";
    card += '    ' + voteBadge(r.vote) + "\n";
    if (r.type) {
      card += '    <span class="badge badge-type">' + esc(r.type) + '</span>' + "\n";
    }
    card += '  </div>';
    return card;
  }).join("\n");
  indexBlock = '<div class="vote-list">' + "\n" + cards + "\n" + '</div>';
}

// Build AUTO-STATS block
var statsBlock = '<div class="stats-row">' + "\n";
statsBlock += '  <div class="stat-cell"><span class="stat-num total">' + totalVotes    + '</span><span class="stat-label">Total Votes</span></div>' + "\n";
statsBlock += '  <div class="stat-cell"><span class="stat-num yes">'   + countYes      + '</span><span class="stat-label">Yes</span></div>'         + "\n";
statsBlock += '  <div class="stat-cell"><span class="stat-num no">'    + countNo       + '</span><span class="stat-label">No</span></div>'          + "\n";
statsBlock += '  <div class="stat-cell"><span class="stat-num abstain">'+ countAbstain + '</span><span class="stat-label">Abstain</span></div>'     + "\n";
statsBlock += '</div>';

// Patch index.html
function replaceBlock(src, startMarker, endMarker, newContent) {
  const s = src.indexOf(startMarker);
  const e = src.indexOf(endMarker);
  if (s === -1 || e === -1 || e < s) {
    console.error("Markers not found: " + startMarker);
    process.exit(1);
  }
  return (
    src.slice(0, s + startMarker.length) +
    "\n" + newContent + "\n" +
    src.slice(e)
  );
}

const indexPath = "index.html";
let html = fs.readFileSync(indexPath, "utf8");
html = replaceBlock(html, STATS_START, STATS_END, statsBlock);
html = replaceBlock(html, INDEX_START, INDEX_END, indexBlock);
fs.writeFileSync(indexPath, html, "utf8");

console.log("index.html updated — " + totalVotes + " votes (Y:" + countYes + " N:" + countNo + " A:" + countAbstain + "), showing " + latest.length + " latest");

// ── Generate year index pages ─────────────────────────────────────────────────
// Group all rows by year
var byYear = {};
for (var i = 0; i < rows.length; i++) {
  var r = rows[i];
  var year = r.date.slice(0, 4);
  if (!byYear[year]) byYear[year] = [];
  byYear[year].push(r);
}

var years = Object.keys(byYear).sort(function(a, b) { return b - a; });

for (var yi = 0; yi < years.length; yi++) {
  var year = years[yi];
  var yearRows = byYear[year];
  var yearDir = path.join("votes", year);

  // Build markdown table rows
  var tableRows = yearRows.map(function(r) {
    // link is e.g. "votes/2026/Foo.html" — make it relative to the year dir
    var filename = path.basename(r.link);
    var voteLabel = r.vote || "";
    var typeLabel = r.type || "";
    return "| " + r.date + " | [" + r.title.replace(/\|/g, "\\|") + "](" + filename + ") | " + voteLabel + " | " + typeLabel + " |";
  }).join("\n");

  var yearCountYes     = yearRows.filter(function(r) { return r.vote.toLowerCase() === "yes"; }).length;
  var yearCountNo      = yearRows.filter(function(r) { return r.vote.toLowerCase() === "no"; }).length;
  var yearCountAbstain = yearRows.filter(function(r) { return r.vote.toLowerCase() === "abstain"; }).length;

  var yearPage = "---\n";
  yearPage += "layout: default\n";
  yearPage += "title: \"RCADA Votes \u2014 " + year + "\"\n";
  yearPage += "---\n\n";
  yearPage += "## RCADA Votes \u2014 " + year + "\n\n";
  yearPage += "**" + yearRows.length + " committed votes** \u00b7 ";
  yearPage += "Yes: " + yearCountYes + " \u00b7 ";
  yearPage += "No: " + yearCountNo + " \u00b7 ";
  yearPage += "Abstain: " + yearCountAbstain + "\n\n";
  yearPage += "| Date | Proposal | Vote | Type |\n";
  yearPage += "|---|---|---|---|\n";
  yearPage += tableRows + "\n";

  var yearIndexPath = path.join(yearDir, "index.md");
  fs.writeFileSync(yearIndexPath, yearPage, "utf8");
  console.log("votes/" + year + "/index.md updated — " + yearRows.length + " votes");
}
