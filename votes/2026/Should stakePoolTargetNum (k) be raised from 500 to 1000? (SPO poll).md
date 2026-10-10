---
title: "Should stakePoolTargetNum (k) be raised from 500 to 1000? (SPO poll)"
gov_action_id: "gov_action17m7nv7839mw93hv889tqzj0umv9ckm780f0nq02fep78f50uedxqq6g5mt9"
type: "Info Action"
vote: "Yes"
vote_date: "2026-10-10"
expires: "2026-10-21"
status: "Committed"
constitution_version: "Cardano Blockchain Ecosystem Constitution v2.4"
tags: ["info-action", "spo-poll", "stakepooltargetnum", "k-parameter", "nopt", "decentralisation", "stake-pools", "saturation", "governance-process"]
links:
  adastat: "https://adastat.net/governances/f6fd3678f12edc58dd8739560149fcdb0b8b6fc77a5f303d49c87c74d1fccb4c00"
  govtool: ""
  forum: ""
  ipfs: ""
---

## Summary

RCADA votes **YES** on **Should stakePoolTargetNum (k) be raised from 500 to 1000? (SPO poll)**.

This is an Info Action. It does not itself change the `stakePoolTargetNum` parameter. Instead, it asks whether there is sufficient SPO support to proceed with a later Parameter Change Governance Action that would raise `stakePoolTargetNum`, also known as `k` or `nOpt`, from **500 to 1000**.

RCADA supports this action because stake-pool economics are central to Cardano’s decentralisation, resilience, and long-term network health. A change to `k` would materially affect SPOs, delegators, saturation dynamics, and reward distribution, so it is appropriate to seek a clear standalone SPO signal before moving to a formal parameter-change action.

RCADA’s YES vote should be understood as support for the SPO mandate-seeking process and for continued serious consideration of `k=1000`, not as unconditional approval of every detail of a future parameter-change proposal.

---

## Key Considerations

- This is an **Info Action**.
- The action does not directly change protocol parameters.
- The action asks whether there is sufficient SPO support to proceed toward a later parameter-change action raising `stakePoolTargetNum` from **500 to 1000**.
- `stakePoolTargetNum` is also commonly called `k` or `nOpt`.
- The proposal focuses only on `stakePoolTargetNum`.
- This avoids the bundling issue present in the 2023 SPO poll, which combined `stakePoolTargetNum` with `minPoolCost`.
- The proposal uses standard CIP-1694 voting semantics rather than a custom turnout formula.
- The proposal states that DRep votes are invited but are not included when determining whether an SPO mandate exists.
- The proposal treats sufficient SPO support as explicit SPO YES votes representing more than 50% of applicable active SPO voting stake.
- Raising `k` from 500 to 1000 would lower the saturation point from 1/500 to 1/1000 of circulating ada.
- A higher `k` may encourage stake to spread away from larger saturated pools.
- A higher `k` does not automatically create new independent operators or guarantee improved entity-level decentralisation.
- RCADA supports the clean SPO polling process and the decentralisation objective.
- Any later parameter-change action should still be reviewed separately.

---

## What this action does

This Info Action asks whether there is sufficient SPO support to proceed with a later Parameter Change Governance Action that would raise:

| Parameter | Current value | Proposed future value |
|---|---:|---:|
| `stakePoolTargetNum` / `k` / `nOpt` | 500 | 1000 |

The action itself does **not** enact this change.

If a later parameter-change action were submitted and approved, raising `k` from 500 to 1000 would lower the relative saturation point from **1/500** of circulating ada to **1/1000** of circulating ada. This would make pools reach saturation at a lower amount of delegated stake for reward-calculation purposes.

The proposal is intended to provide a clean standalone SPO signal before any binding parameter-change proposal is submitted.

---

## Analysis Findings

### Constitutional / Guardrails Assessment

- ✔ The action is correctly framed as an Info Action.
- ✔ The action does not directly change protocol parameters.
- ✔ The action clearly identifies the parameter under discussion.
- ✔ The action clearly identifies the potential future change from `k=500` to `k=1000`.
- ✔ The action separates the `k` question from `minPoolCost` and other parameters.
- ✔ The action explains how SPO support should be interpreted.
- ✔ The action follows standard CIP-1694 voting semantics rather than creating a special turnout-based formula.
- ✔ The action recognises that DRep votes are not included when determining whether an SPO mandate exists.
- ✔ The action recognises that a later parameter-change action would still be required.
- ⚠ Because this is an Info Action, the >50% SPO support standard is a declared interpretation of the poll result, not an on-chain ratification threshold for the Info Action itself.
- ⚠ If the SPO mandate is not reached, the result should not be treated as support for a different `k` value.
- ⚠ Any later parameter-change proposal should still be reviewed on its own merits.

**Assessment:** Appropriate Info Action seeking a clean SPO mandate before a potential future parameter change

---

### Process & Governance Quality

- ✔ The proposal addresses a parameter that materially affects SPO economics and delegator reward dynamics.
- ✔ Seeking an SPO signal before changing a stake-pool economic parameter is good governance practice.
- ✔ The proposal improves on the 2023 poll by considering `stakePoolTargetNum` on its own.
- ✔ The proposal clearly explains that pool count is not the same as operator count.
- ✔ The proposal acknowledges that raising `k` does not automatically guarantee better decentralisation.
- ✔ The proposal describes how participant behaviour will determine real-world outcomes.
- ✔ The proposal distinguishes the mandate-seeking Info Action from any future binding parameter-change action.
- ⚠ The future effects of `k=1000` are uncertain and depend heavily on delegator, wallet, exchange, custodian, and SPO behaviour.
- ⚠ Entity-level concentration and multi-pool behaviour remain important concerns.
- ⚠ Delegators in pools affected by a lower saturation point may need better tooling and education.

**Assessment:** Strong process value as a clean standalone SPO poll, with future implementation risks to assess separately

---

### Impact & Risk Analysis

- **Decentralisation objective:** Positive
- **SPO mandate value:** High
- **Governance-process value:** High
- **Immediate protocol risk:** None, because this is an Info Action
- **Future parameter-change impact:** Potentially significant
- **Delegator impact if later enacted:** Medium to High
- **Small-pool opportunity:** Potentially positive
- **Entity-level decentralisation certainty:** Uncertain
- **Multi-pool response risk:** Medium
- **Wallet / delegator behaviour dependency:** High
- **Need for future analysis:** High

RCADA believes the Info Action is useful because it creates a clearer process for determining whether SPOs want the ecosystem to proceed toward `k=1000`.

The future parameter change itself would still require careful review. Important considerations would include decentralisation impact, delegator effects, entity-level concentration, multi-pool behaviour, exchange and custodian stake, small-pool viability, and interaction with `minPoolCost`, `poolPledgeInfluence`, and other reward parameters.

**Assessment:** YES — support the SPO mandate-seeking process and continued serious consideration of `k=1000`

---

## Ratings (Decision Support Only)

| Dimension | Score (1–5) |
|---|---:|
| Constitutional clarity | 4 |
| Governance-process quality | 5 |
| Decentralisation relevance | 5 |
| SPO mandate value | 5 |
| Immediate risk | 5 |
| Future implementation certainty | 3 |
| Entity-level decentralisation certainty | 3 |
| Delegator impact clarity | 3 |
| **Overall score** | **🟢 80% — YES for a clean SPO mandate process on `k=1000`, with future parameter review still required** |

---

## RCADA Rationale

RCADA votes **YES** on this Info Action asking whether there is sufficient SPO support to proceed with a later parameter-change action to raise `stakePoolTargetNum` / `k` from **500 to 1000**.

RCADA supports this action because stake-pool economics are central to Cardano’s decentralisation, resilience, and long-term network health. A change to `k` would materially affect SPOs, delegators, saturation dynamics, and reward distribution, so it is appropriate to seek a clear standalone SPO signal before moving to a formal parameter-change action.

RCADA appreciates that this proposal separates the `k` question from other parameters. The 2023 SPO poll bundled `stakePoolTargetNum` with `minPoolCost`, which made it harder to interpret as a clean standalone mandate. This Info Action focuses only on whether there is sufficient SPO support to proceed toward `k=1000`, using standard CIP-1694 voting semantics rather than introducing a special turnout formula.

RCADA also supports the decentralisation motivation behind the proposal. Raising `k` from 500 to 1000 would lower the saturation point from 1/500 to 1/1000 of circulating ada, creating stronger reward incentives for stake to spread away from larger saturated pools. While this does not guarantee more independent operators, it may help create conditions where stake distribution can become healthier if delegators, wallets, SPOs, and the wider ecosystem respond constructively.

RCADA recognises that increasing `k` is not a complete decentralisation solution by itself. The proposal correctly notes that a higher `k` would not automatically create new pools, prevent multi-pool operators from registering additional pools, determine where redelegated stake moves, or guarantee improved entity-level decentralisation. Outcomes would depend on participant behaviour, wallet design, delegator awareness, operator grouping, exchange and custodian behaviour, and the interaction with other economic parameters.

RCADA also recognises that there may be disruption for established pools and delegators if the saturation point is lowered. Some pools that are currently healthy could become oversaturated for reward purposes, and some delegators may need to actively reassess their delegation. These effects should be taken seriously and should be part of any later parameter-change review.

However, this Info Action does not itself change `k`. It asks whether there is sufficient SPO support to proceed. RCADA considers that a fair and useful governance step. SPOs are the actors most directly affected by stake-pool economic parameters, and their explicit on-chain signal should carry significant weight before the ecosystem advances to a binding parameter-change action.

RCADA’s YES vote should therefore be understood as support for the SPO mandate-seeking process and for continued serious consideration of `k=1000`, not as unconditional approval of every detail of a future parameter-change proposal. If a later parameter-change action is submitted, RCADA would still expect clear analysis of decentralisation impact, delegator effects, entity-level concentration, multi-pool behaviour, exchange and custodian stake, small-pool viability, and interaction with `minPoolCost`, pledge influence, and other reward parameters.

On balance, RCADA supports this Info Action because it provides a clean, transparent, stake-weighted way for SPOs to express whether the ecosystem should proceed toward `k=1000`. This is a meaningful step toward more evidence-based parameter governance and a healthier discussion about Cardano’s long-term decentralisation.
