---
title: "Reduce minPoolCost to 75 ada and increase Plutus Memory Limits (Part 2)"
gov_action_id: "gov_action14dr5yg75pchr2sz42djtuflpvx5qnsek29qg7s7cft8lzrqt5vrqqtqntpk"
type: "Protocol Parameter Change"
vote: "Yes"
vote_date: "2026-08-21"
expires: "2026-09-01"
status: "Committed"
constitution_version: "Cardano Blockchain Ecosystem Constitution v2.4"
tags: ["parameter-change", "minpoolcost", "stake-pools", "spo", "decentralisation", "plutus", "memory-limits", "dapp-capacity", "intersect"]
links:
  adastat: "https://adastat.net/governances/ab474223d40e2e3540555364be27e161a809c33651408f43d84acff10c0ba30600"
  govtool: ""
  forum: ""
  ipfs: ""
---

## Summary

RCADA votes **YES** on **Reduce minPoolCost to 75 ada and increase Plutus Memory Limits (Part 2)**.

RCADA supports this parameter update because both changes are bounded, evidence-based, and aligned with the long-term health of the Cardano ecosystem.

The action reduces `minPoolCost` from **170 ada to 75 ada** and completes the second part of a previously recommended two-step increase to Plutus memory limits. The Plutus change raises `maxTxExecutionUnits[memory]` from **16,500,000 to 17,500,000** and `maxBlockExecutionUnits[memory]` from **72,000,000 to 77,500,000**.

RCADA supports reducing `minPoolCost` because the current fixed-fee floor creates a growing disadvantage for smaller pools as block rewards decline. RCADA has also previously indicated support for this direction during the earlier Intersect / Hydra voting stages relating to `minPoolCost` reduction.

RCADA supports the Plutus memory increase because it completes a staged, reviewed, and guardrail-compliant capacity improvement for Plutus applications.

RCADA notes that bundling two unrelated parameter changes is not ideal, but in this case both changes are individually supportable.

---

## Key Considerations

- This is a **Protocol Parameter Change** governance action.
- The action reduces `minPoolCost` from **170 ada to 75 ada**.
- The action increases `maxTxExecutionUnits[memory]` from **16,500,000 to 17,500,000**.
- The action increases `maxBlockExecutionUnits[memory]` from **72,000,000 to 77,500,000**.
- The Plutus memory-limit change is **Part 2 of 2**.
- Together with Part 1, the Plutus memory-limit changes complete a cumulative **25% increase**.
- The `minPoolCost` reduction supports small-pool competitiveness and economic flexibility.
- Lowering the floor does not force any SPO to reduce their declared pool cost.
- RCADA has previously supported the direction of `minPoolCost` reduction during earlier Intersect / Hydra voting stages.
- The Plutus memory-limit increase gives DApp developers more execution headroom.
- The proposal states that the Plutus memory-limit increase was reviewed through the Parameter Committee and Technical Steering Committee process.
- The proposal states that the full target values were exercised on Preview testnet.
- The proposal states that performance analysis indicates adequate headroom in critical timing metrics.
- The action is guardrail-aware and staged.
- The proposal is transparent that the two changes are otherwise unrelated.
- RCADA notes that bundling unrelated changes is not ideal, but both changes are individually supportable.
- RCADA expects continued monitoring after enactment.

---

## What this action does

This governance action makes two protocol-parameter changes.

| Parameter | Current value | New value | Change |
|---|---:|---:|---:|
| `minPoolCost` | 170 ada | 75 ada | -55.9% |
| `maxTxExecutionUnits[memory]` | 16,500,000 | 17,500,000 | +1,000,000 |
| `maxBlockExecutionUnits[memory]` | 72,000,000 | 77,500,000 | +5,500,000 |

The `minPoolCost` change lowers the minimum fixed cost that a stake pool may declare.

The Plutus memory-limit changes complete the second and final step of a staged increase that began with Part 1. Across both parts, the total increase is:

| Parameter | Starting value before Part 1 | Final value after Part 2 | Cumulative change |
|---|---:|---:|---:|
| `maxTxExecutionUnits[memory]` | 14,000,000 | 17,500,000 | +25.0% |
| `maxBlockExecutionUnits[memory]` | 62,000,000 | 77,500,000 | +25.0% |

No other protocol parameters or Plutus cost model settings are changed by this action.

---

## Analysis Findings

### Constitutional / Guardrails Assessment

- ✔ The proposal identifies the parameters being changed.
- ✔ The proposal identifies the current and proposed new values.
- ✔ `minPoolCost` remains positive.
- ✔ The proposed `minPoolCost` value remains below the applicable ceiling.
- ✔ The Plutus memory-limit increases are staged.
- ✔ The Plutus memory-limit increases remain below applicable guardrail ceilings.
- ✔ The increase to `maxTxExecutionUnits[memory]` is within the permitted per-epoch increase.
- ✔ The increase to `maxBlockExecutionUnits[memory]` is within the permitted per-epoch increase.
- ✔ `maxBlockExecutionUnits[memory]` remains significantly above `maxTxExecutionUnits[memory]`.
- ✔ The proposal states that the relevant notice periods and committee review processes have been satisfied.
- ✔ The proposal explains why SPO voting is required because `maxBlockExecutionUnits[memory]` is critical to blockchain operation.
- ✔ The proposal explains why the DRep vote is required for the relevant parameter groups.
- ⚠ The action bundles two unrelated parameter changes.
- ⚠ Bundling can reduce voter precision where a voter supports one change but not the other.
- ⚠ Reverting `minPoolCost` later would not force already-registered pools that adopted the lower floor to raise their cost until they next re-register.

**Assessment:** Guardrail-compliant parameter update with one process caveat around bundling unrelated changes

---

### Process & Governance Quality

- ✔ The `minPoolCost` reduction is based on a public Parameter Change Proposal process.
- ✔ The proposal explains the economic rationale for further reducing `minPoolCost`.
- ✔ The proposal connects the change to declining block rewards and small-pool competitiveness.
- ✔ The proposal discusses Sybil and stake-fragmentation considerations.
- ✔ The proposal frames the reduction to 75 ada as an interim step rather than an immediate move to zero.
- ✔ The Plutus memory-limit change completes a previously reviewed two-step process.
- ✔ The proposal references Parameter Committee and Technical Steering Committee review.
- ✔ The proposal references Preview testnet exercise and performance analysis.
- ✔ The proposal includes a reversion discussion for both parameter areas.
- ✔ RCADA’s YES vote is consistent with its earlier support during Intersect / Hydra voting stages on `minPoolCost` reduction.
- ⚠ The two changes are otherwise unrelated.
- ⚠ Future parameter actions should avoid unnecessary bundling where practical.
- ⚠ Ongoing monitoring is needed after enactment.

**Assessment:** Strong evidence-based process, with acceptable but noted concern around bundling

---

### Impact & Risk Analysis

- **Small-pool competitiveness:** Positive
- **SPO economic flexibility:** Positive
- **Delegator choice:** Positive
- **Decentralisation support:** Positive
- **Treasury inflow impact:** Low to Medium
- **Sybil / stake-fragmentation risk:** Low to Medium, monitor
- **DApp developer headroom:** Positive
- **Plutus execution capacity:** Positive
- **Network performance risk:** Low to Medium, supported by staged testing and benchmarking
- **Governance-process risk from bundling:** Medium
- **Reversion complexity:** Medium for `minPoolCost`, Low for Plutus memory limits

RCADA believes the combined impact is positive. The `minPoolCost` reduction helps reduce a structural disadvantage faced by smaller pools, while the Plutus memory-limit increase provides additional execution headroom for DApps and completes a staged, reviewed process.

The main governance concern is bundling, not the substance of either change.

**Assessment:** YES — positive decentralisation and developer-capacity impact, with monitoring recommended

---

## Ratings (Decision Support Only)

| Dimension | Score (1–5) |
|---|---:|
| Constitutional clarity | 4 |
| Guardrail alignment | 4 |
| Governance process | 4 |
| Decentralisation impact | 5 |
| Developer / DApp impact | 4 |
| Risk balance | 4 |
| Bundling quality | 3 |
| **Overall score** | **🟢 82% — YES for evidence-based parameter changes supporting small pools and Plutus capacity** |

---

## RCADA Rationale

RCADA votes **YES** on **Reduce minPoolCost to 75 ada and increase Plutus Memory Limits (Part 2)**.

RCADA supports this parameter update because both changes are bounded, evidence-based, and aligned with the long-term health of the Cardano ecosystem.

RCADA supports the reduction of `minPoolCost` from **170 ada to 75 ada**. As block rewards continue to decline, the current fixed-fee floor creates a growing disadvantage for smaller pools, especially pools producing only one or a few blocks per epoch. This can make it harder for smaller independent SPOs to compete for delegation and can weaken the practical diversity of the stake pool ecosystem.

RCADA has already indicated support for this direction during the earlier Intersect / Hydra voting stages relating to `minPoolCost` reduction. This vote is consistent with that position. Lowering the floor to **75 ada** does not force any operator to reduce fees, but it gives smaller pools more flexibility to compete and helps reduce a structural disadvantage in the delegation market.

RCADA also supports the Plutus memory-limit increase. This action completes the second part of a previously recommended two-step increase, raising `maxTxExecutionUnits[memory]` to **17,500,000** and `maxBlockExecutionUnits[memory]` to **77,500,000**, completing the cumulative **25%** increase. This provides additional headroom for Plutus scripts and can reduce pain points for DApp developers and users.

RCADA recognises that the two changes are not directly related. Bundling unrelated parameter changes is not ideal because it can make voter choice less precise. However, in this case both changes are individually supportable, both have gone through relevant review processes, and the proposal is transparent about the bundling.

RCADA expects continued monitoring after enactment. For `minPoolCost`, the ecosystem should watch for any unexpected effects on stake fragmentation, treasury inflows, and pool registration behaviour. For Plutus memory limits, the ecosystem should continue monitoring block performance, DApp usage, and whether the additional headroom improves developer experience without creating network stress.

On balance, RCADA supports this action because it improves small-pool competitiveness, supports decentralisation, completes a staged and reviewed Plutus capacity increase, and reflects a measured approach to parameter governance.
