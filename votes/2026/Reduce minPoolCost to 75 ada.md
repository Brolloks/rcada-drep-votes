---
title: "Reduce minPoolCost to 75 ada"
gov_action_id: "gov_action1whncs25w727rj5tml7lmv48gnaf9mm66sdjds8s3l306et7xmkdsqzqd7s2"
type: "Protocol Parameter Change"
vote: "Yes"
vote_date: "2026-10-10"
expires: "2026-10-11"
status: "Committed"
constitution_version: "Cardano Blockchain Ecosystem Constitution v2.4"
tags: ["parameter-change", "minpoolcost", "stake-pools", "spo", "decentralisation", "small-pools", "pcp-006", "rewards"]
links:
  adastat: "https://adastat.net/governances/75e7882a8ef2bc39517bffbfb654e89f525def5a8364d81e11fc5facafc6dd9b00"
  govtool: ""
  forum: ""
  ipfs: ""
---

## Summary

RCADA votes **YES** on **Reduce minPoolCost to 75 ada**.

RCADA supports this standalone parameter update because it is a measured, evidence-based step that improves flexibility for smaller stake pools and supports decentralisation.

This action reduces `minPoolCost` from **170 ada to 75 ada**. Unlike the earlier bundled action reviewed by RCADA, this proposal changes only `minPoolCost` and does not bundle unrelated protocol parameter changes.

RCADA has already supported this policy direction during earlier Intersect / Hydra voting stages and in the previous bundled parameter-change action. This standalone version is cleaner from a governance-process perspective because DReps can assess the `minPoolCost` reduction on its own merits.

---

## Key Considerations

- This is a **Protocol Parameter Change** governance action.
- The action reduces `minPoolCost` from **170 ada to 75 ada**.
- No other protocol parameters are changed.
- The reduction is approximately **55.9%**.
- The proposal is based on PCP-006.
- PCP-006 was published on the Cardano Forum on 30 March 2026.
- The proposal states that the Technical Steering Committee ratified the reduction on 2026-07-09.
- RCADA has previously supported the direction of `minPoolCost` reduction.
- Lowering the floor does not force any SPO to reduce their declared pool cost.
- The change gives smaller pools more flexibility to compete.
- The proposal frames 75 ada as a staged interim step, not a move to zero.
- The action affects reward distribution and pool economics, not block production, propagation, or Plutus execution limits.
- RCADA expects continued monitoring of pool behaviour, stake fragmentation, small-pool competitiveness, and Treasury impact.

---

## What this action does

This governance action reduces the minimum fixed cost that a stake pool may declare.

| Parameter | Current value | New value | Change |
|---|---:|---:|---:|
| `minPoolCost` | 170 ada | 75 ada | -55.9% |

No other protocol parameters are changed by this action.

The proposal explains that as reserve-funded block rewards decline, the current fixed-fee floor has become increasingly punitive for smaller pools, especially pools producing only one or a few blocks per epoch.

---

## Analysis Findings

### Constitutional / Guardrails Assessment

- ✔ The proposal identifies the parameter being changed.
- ✔ The proposal identifies the current and proposed new values.
- ✔ The proposed `minPoolCost` value remains positive.
- ✔ The proposed value remains below the applicable ceiling.
- ✔ The proposal states that the required notice period has been satisfied.
- ✔ The proposal states that `minPoolCost` is a governance-critical parameter requiring DRep approval and Constitutional Committee approval.
- ✔ The proposal states that a `minPoolCost` parameter change does not require SPO approval.
- ✔ The proposal includes a reversion discussion.
- ✔ The proposal changes only `minPoolCost`, avoiding the bundling concern present in the earlier combined action.
- ⚠ Reverting `minPoolCost` later would not force already-registered pools that adopted the lower floor to raise their cost until they next re-register.
- ⚠ The ecosystem should monitor for unintended effects, including stake fragmentation, Treasury impact, or unexpected delegation behaviour.

**Assessment:** Guardrail-aware standalone parameter update with low operational risk and clear decentralisation rationale

---

### Process & Governance Quality

- ✔ The action is based on a public Parameter Change Proposal process.
- ✔ The proposal explains the economic rationale for further reducing `minPoolCost`.
- ✔ The proposal connects the change to declining block rewards and small-pool competitiveness.
- ✔ The proposal discusses Sybil and stake-fragmentation considerations.
- ✔ The proposal frames the reduction to 75 ada as an interim step rather than an immediate move to zero.
- ✔ RCADA’s YES vote is consistent with its earlier support during Intersect / Hydra voting stages on `minPoolCost` reduction.
- ✔ RCADA’s YES vote is also consistent with its prior support for the earlier bundled parameter-change action.
- ✔ This standalone action improves voter clarity by separating `minPoolCost` from unrelated Plutus memory-limit changes.
- ⚠ Ongoing monitoring is needed after enactment.

**Assessment:** Strong evidence-based process and cleaner governance design than the earlier bundled action

---

### Impact & Risk Analysis

- **Small-pool competitiveness:** Positive
- **SPO economic flexibility:** Positive
- **Delegator choice:** Positive
- **Decentralisation support:** Positive
- **Treasury inflow impact:** Low to Medium
- **Sybil / stake-fragmentation risk:** Low to Medium, monitor
- **Operational network risk:** Low
- **Protocol execution risk:** None
- **Governance clarity:** High
- **Reversion complexity:** Medium

RCADA believes the impact is positive. The current fixed-fee floor has become increasingly difficult for smaller pools as rewards decline. Reducing the floor gives small and independent SPOs more flexibility while preserving operator choice.

The main risks are economic rather than technical and should be monitored after enactment.

**Assessment:** YES — positive decentralisation and small-pool competitiveness impact, with monitoring recommended

---

## Ratings (Decision Support Only)

| Dimension | Score (1–5) |
|---|---:|
| Constitutional clarity | 4 |
| Guardrail alignment | 4 |
| Governance process | 5 |
| Decentralisation impact | 5 |
| Small-pool support | 5 |
| Risk balance | 4 |
| Monitoring / reversibility | 3 |
| **Overall score** | **🟢 88% — YES for a standalone, evidence-based reduction supporting small pools and decentralisation** |

---

## RCADA Rationale

RCADA votes **YES** on **Reduce minPoolCost to 75 ada**.

RCADA supports this standalone parameter update because reducing `minPoolCost` from **170 ada to 75 ada** is a measured, evidence-based step that improves flexibility for smaller stake pools and supports decentralisation.

As block rewards continue to decline, the current fixed-fee floor creates a growing disadvantage for smaller pools, especially pools producing only one or a few blocks per epoch. This can make it harder for smaller independent SPOs to compete for delegation and can weaken the practical diversity of the stake pool ecosystem.

RCADA has already indicated support for this direction during earlier Intersect / Hydra voting stages relating to `minPoolCost` reduction. RCADA also supported the earlier bundled parameter-change action that included this same reduction alongside Plutus memory-limit changes. This vote is therefore consistent with RCADA’s previous position.

This standalone version is cleaner from a governance-process perspective because it addresses only `minPoolCost` and does not bundle unrelated protocol changes. RCADA previously noted that bundling unrelated parameter changes was not ideal, even where both changes were individually supportable. This action removes that concern.

Lowering the floor to **75 ada** does not force any operator to reduce fees, but it gives smaller pools more flexibility to compete and helps reduce a structural disadvantage in the delegation market. RCADA views this as aligned with decentralisation, SPO diversity, and a healthier stake pool ecosystem.

RCADA recognises that this change should be monitored after enactment. The ecosystem should watch for any unexpected effects on stake fragmentation, Treasury inflows, pool registration behaviour, and delegation patterns. RCADA also recognises that if `minPoolCost` were later raised again, pools already registered below 170 ada would not be forced to increase their cost until they next re-register.

On balance, RCADA supports this action because it improves small-pool competitiveness, supports decentralisation, gives SPOs more economic flexibility, and reflects a cleaner standalone implementation of a parameter change RCADA has already supported in principle.
