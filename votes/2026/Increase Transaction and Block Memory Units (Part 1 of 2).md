---
title: "Increase Transaction and Block Memory Units (Part 1 of 2)"
gov_action_id: "gov_action1cgdsp7g0rr7wgqp7maptpvx525fxuqwfgm5qe3f5r20ew5x2772sq0m5y83"
type: "Protocol Parameter Change"
vote: "Yes"
vote_date: "2026-02-11"
expires: "2026-02-13"
status: "Committed"
constitution_version: "Cardano Blockchain Ecosystem Constitution v2.4"
tags: ["ParameterChange"]
links:
  adastat: "https://adastat.net/governances/c21b00f90f18fce4003edf42b0b0d455126e01c946e80cc5341a9f9750caf79500"
  govtool: ""
  forum: ""
  ipfs: ""
---

## Summary

This governance action proposes a measured increase to Plutus memory limits at both the transaction and block level. It represents Part 1 of a staged two-step update.

RCADA voted **YES** because the proposal is guardrail-compliant, benchmark-supported, and improves developer flexibility without altering monetary policy, treasury funds, or cost model parameters.

This vote applies strictly to Part 1. Any subsequent increase must be independently assessed based on post-enactment mainnet data.

---

## What this action does

The proposal increases:

- `maxTxExecutionUnits[memory]` from 14,000,000 → 16,500,000  
- `maxBlockExecutionUnits[memory]` from 62,000,000 → 72,000,000  

No other protocol parameters are changed.  
No Plutus cost model values are modified.  
No treasury funds are involved.

The coordinated adjustment preserves the structural ratio between per-transaction and per-block limits, maintaining the current block capacity shape (e.g., four maximum-sized transactions per block).

The stated objective is to reduce friction for Plutus developers and enable more work to be executed within a single transaction or block.

---

## Analysis Findings

### Constitutional / Guardrails Assessment

- ✔ Within MTEU-M-04 and MBEU-M-03 per-epoch adjustment limits  
- ✔ Consistent with NETWORK-01 and NETWORK-02 coordination requirements  
- ✔ Maintains compliance with PARAM-03a (SPO co-approval required)  
- ✔ No impact on Tenet 10 (monetary stability)  
- ✔ Strengthens Tenet 3 (developer freedom and application deployment)  
- ⚠ Requires continued monitoring under Tenet 8 (resource discipline)

**Assessment:** Pass

---

### Process & Governance Quality

- Clear parameter specification and naming discipline  
- Explicit mapping to constitutional guardrails  
- Public benchmarking referenced  
- Testnet deployment on Preview and PreProd prior to mainnet vote  
- Staged approach required by guardrails rather than bundled escalation  

No bundling issues. No treasury implications. No administrative ambiguity.

**Assessment:** Strong

---

### Impact & Risk Analysis

**Ecosystem Benefit:**  
Improves DApp ergonomics, reduces artificial execution ceilings, and supports scalable application design.

**Execution Risk:**  
Benchmarking indicates sufficient propagation headroom. However, parameter increases create path dependency if widely adopted.

**Governance Risk:**  
Low for Part 1. Future increases must be evaluated cumulatively to avoid incremental drift beyond safe diffusion budgets.

**Assessment:** Low–Medium (manageable and bounded)

---

## Ratings (Decision Support Only)

| Dimension | Score (1–5) |
|-----------|------------|
| Constitutional clarity | 5 |
| Governance quality | 4 |
| Execution credibility | 4 |
| Ecosystem value | 4 |
| Risk balance | 4 |

---

## RCADA Rationale

RCADA votes **YES** on Part 1 of this protocol parameter update.

This proposal reflects disciplined governance design: it is incremental, benchmark-supported, testnet-validated, and compliant with the Cardano Blockchain Ecosystem Constitution v2.4 and its Guardrails.

The increase to Plutus memory limits improves developer flexibility without modifying cost model parameters, monetary policy, or treasury funds. It remains within defined per-epoch adjustment bounds and preserves structural block composition.

I support measured scaling where evidence demonstrates sufficient performance headroom. At the same time, I recognize that parameter increases create forward path dependency once developers build against higher ceilings.

For that reason, this vote applies strictly to Part 1. It does not constitute pre-approval of Part 2. Any subsequent increase must be evaluated independently following observable mainnet performance data, including propagation metrics and real-world usage patterns.

Incremental scaling must remain evidence-driven and constitutionally grounded.

RCADA's full vote assessment can be found here:  
"https://brolloks.github.io/rcada-drep-votes/"
