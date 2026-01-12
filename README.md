# RCADA DRep Voting Record

This repository is the canonical public archive of RCADA’s on-chain governance votes and full rationales.

- **Website (GitHub Pages):** see `index.md` once Pages is enabled.
- **Votes:** stored as single Markdown files under `votes/YYYY/`.

## How to browse
- Start at **index.md** (homepage-style navigation).
- Or browse by year under **/votes/**.

## Adding a new vote (web UI)
1. Go to `votes/<YEAR>/`
2. Create a new file named: `YYYY-MM-DD-short-title.md`
3. Paste the template from `VOTE_TEMPLATE.md`
4. Commit

## Conventions
- One governance action = one Markdown file
- Always include `gov_action_id`
- Keep the vote status accurate:
  - `Draft` (pre-vote)
  - `Committed` (vote cast)
  - `Superseded` (replaced/amended)

## License
Content is provided for transparency and community reference.
