--- 
title: "Pebble & Ecosystem maintenance: TypeScript core of Cardano" 
gov_action_id: "gov_action1ggr2uz7prwn5l84cdn2krwngfez0p7wluy4u3u3ez9pz5ls2whesqnsjly8" 
type: "Treasury Withdrawals" 
vote: "Yes" 
vote_date: "2026-05-20" 
expires: "2026-06-08" 
status: "Committed" 
constitution_version: "Cardano Blockchain Ecosystem Constitution v2.4" 
tags: 
  - treasury
  - developer-experience
  - tooling
  - infrastructure
  - hlabs
  - pebble
  - typescript
  - ecosystem-maintenance 
links: 
  adastat: "https://adastat.net/governances/4206ae0bc11ba74f9eb86cd561ba684e44f0f9dfe12bc8f23911422a7e0a75f300" 
  govtool: "" 
  forum: "" 
  ipfs: "" 
---

## Summary 
- This Treasury Withdrawal requests ₳4,600,000 to fund Harmonic Laboratories’ Pebble smart contract language development and maintenance of core TypeScript infrastructure used across the Cardano ecosystem.
- RCADA votes YES because the proposal is strategically aligned, technically credible, and supported by strong governance safeguards, including audited escrow, milestone-based disbursement, independent oversight, refund protections, and public reporting.
- RCADA’s support includes caveats around contingency design, measurable adoption, and the need to ensure Pebble expands Cardano’s developer base rather than fragmenting existing ecosystem attention.

--- 

## Key Considerations 
- Proposal is directly related to the broader HLabs 2026 infrastructure initiative RCADA previously supported, but is now more modular by separating Gerolamo into an independent governance action.
- Pebble offers a TypeScript-shaped, imperative smart contract language intended to lower onboarding friction for Web2, JavaScript/TypeScript, and Solidity developers.
- TypeScript tooling maintenance is a practical ecosystem resilience need, particularly around hard fork readiness and protocol compatibility.
- Governance structure is strong: audited smart-contract escrow, milestone gating, independent oversight board, pause rights, refund mechanisms, and automatic sweep-back of unused funds.
- Acceptance criteria are unusually inspectable, relying on public artifacts such as tagged releases, npm packages, GitHub repositories, test logs, benchmark reports, and preview/preprod execution evidence.
- The 15% contingency reserve is refundable and milestone-gated, but RCADA remains cautious about normalizing embedded contingency buffers in treasury asks.
- Developer adoption and downstream usage should be reported transparently, not only technical delivery.
 
---

## What this action does 
This action funds a 12-month Harmonic Laboratories program covering two complementary workstreams: 
1. **Pebble**
   - Development of a production-ready, imperative, TypeScript-shaped smart contract language targeting UPLC.
   - Delivery of language features, compiler stability, Plutus V4 support, standard library expansion, benchmarking, REPL, sourcemaps, documentation, tutorials, and onboarding materials.
     
2. **TypeScript ecosystem maintenance**
   - Ongoing maintenance of key HLabs TypeScript libraries, including `cardano-ledger-ts`, `ouroboros-miniprotocols-ts`, `plutus-machine`, and `uplc`.
   - Hard-fork readiness and continued compatibility with upcoming protocol changes, including Plutus V4 and revised cost model updates.

The total request is ₳4,600,000, composed of a ₳4,000,000 base budget plus a refundable ₳600,000 contingency reserve. 

Funds are administered through audited SundaeSwap treasury escrow contracts with milestone-based release, independent oversight, public reporting, and automatic return of unused funds. 

--- 

## Analysis Findings 

### Constitutional / Guardrails Assessment 
- ✔ Proposal identifies a clear purpose, duration, budget, administrator structure, refund mechanism, and intended ecosystem benefit.
- ✔ Treasury Withdrawal standards are addressed through milestone-based disbursement, independent oversight, auditability, public reporting, and refund provisions.
- ✔ Proposal states Net Change Limit compliance and denominates the request in ada.
- ✔ Treasury funds held in escrow are delegated to the predefined abstain voting option and do not participate in SPO delegation.
- ✔ Strong alignment with constitutional tenets around developer access, long-term sustainability, resource stewardship, and ecosystem resilience.
- ⚠ Pebble’s long-term value depends on meaningful adoption, not only technical completion.
- ⚠ Funding another smart contract language introduces some fragmentation risk if not clearly positioned as complementary to Aiken and existing tooling.

**Assessment:** Pass 

--- 

### Process & Governance Quality 
- Proposal is well structured, detailed, and more modular than the earlier broader HLabs proposal.
- Bundling of Pebble and TypeScript maintenance is acceptable because the workstreams are closely related through the TypeScript developer stack.
- Administration and oversight are clearly defined through audited escrow contracts and an independent oversight board.
- Milestone acceptance criteria are tied to public and inspectable artifacts.
- Monthly updates, quarterly reports, and a public transaction journal provide strong transparency.
- Precedent risk remains around embedded contingency reserves, even where refundable and milestone-gated.

**Assessment:** Strong 

--- 

### Impact & Risk Analysis 
- **Ecosystem benefit:** High. Pebble may expand Cardano’s developer funnel, while TypeScript tooling maintenance supports production systems and hard-fork readiness.
- **Execution risk:** Medium. HLabs appears technically credible, but delivering a production-ready language and maintaining core infrastructure over 12 months remains complex.
- **Financial / governance risk:** Medium. Escrow, oversight, reporting, and refund mechanisms reduce risk, but the contingency reserve and adoption uncertainty require continued scrutiny.

**Assessment:** Medium 

--- 

## Ratings (Decision Support Only) 

| Dimension | Score (1–5) | 
|---------|-------------| 
| Constitutional clarity | 5 | 
| Governance quality | 5 | 
| Execution credibility | 4 | 
| Ecosystem value | 4 | 
| Risk balance | 3 | 

--- 

## RCADA Rationale 

RCADA supports this treasury withdrawal proposal from Harmonic Laboratories for Pebble and TypeScript ecosystem maintenance as a strategically important investment in Cardano’s long-term developer accessibility, tooling resilience, and ecosystem continuity. 

This proposal funds two tightly related workstreams: the continued development of Pebble, an imperative, TypeScript-shaped smart contract language targeting UPLC, and the ongoing maintenance of critical TypeScript infrastructure libraries that underpin a significant portion of Cardano’s developer ecosystem. These libraries are used directly or transitively by projects such as Mesh, Lucid Evolution, Midgard, wallet integrations, indexers, and other production systems. Ensuring they remain synchronized with protocol upgrades and future hard forks represents meaningful ecosystem maintenance rather than optional experimentation. 

RCADA previously voted YES on the broader HLabs 2026 infrastructure proposal, which included Gerolamo, Pebble, and TypeScript tooling maintenance as a tightly integrated stack spanning infrastructure, developer onboarding, and ecosystem resilience. This proposal represents a more modular and independently reviewable version of that vision, separating Gerolamo into its own governance action. We view this increased granularity positively and consistent with RCADA’s long-standing preference for more focused treasury proposals. 

From a governance perspective, this proposal demonstrates a strong degree of maturity and accountability. Funds are managed through audited SundaeSwap treasury escrow contracts with milestone-based disbursement, independent oversight, pause mechanisms, refund protections, and automatic treasury return of unused funds at expiry. Importantly, milestone acceptance criteria are tied to objective, publicly inspectable artifacts such as tagged releases, npm packages, benchmark submissions, test logs, and observable execution on preview or pre-production networks. RCADA places considerable weight on verifiable delivery mechanisms, and this proposal compares favorably to many prior treasury requests in that regard. 

We also acknowledge the strategic case for expanding Cardano’s developer funnel. Cardano has historically faced onboarding friction, particularly for developers accustomed to imperative and TypeScript-based environments. Pebble attempts to lower this barrier by offering a familiar development model while targeting the same underlying UPLC runtime as existing languages. We do not view this as a replacement for Aiken, but rather as a complementary pathway that may broaden participation among Web2 and Solidity developers who might otherwise find Cardano’s smart contract stack less accessible. 

That said, our support comes with several caveats. 

First, while we appreciate the proposal’s detailed governance structure, we continue to hold reservations around the use of upfront contingency reserves within treasury asks. Although the 15% contingency is refundable, milestone-gated, and smaller than structures seen elsewhere, RCADA remains cautious about the precedent that pre-allocated contingency buffers can establish for treasury discipline. Future proposals should continue exploring more conditional or milestone-triggered approaches wherever feasible rather than normalizing embedded reserves. 

Second, while we recognize Pebble’s potential to improve onboarding, developer adoption ultimately remains the key measure of success. A new language ecosystem introduces some risk of fragmentation, duplicated effort, or ecosystem complexity if adoption fails to materialize meaningfully. For this reason, we strongly encourage transparent reporting not only on technical delivery, but also on measurable ecosystem usage — including developer onboarding, tooling adoption, educational uptake, and downstream integration into real applications. 

Third, RCADA continues to emphasize the importance of maintaining multiple complementary developer pathways without creating unnecessary competition for scarce ecosystem attention or treasury resources. Pebble’s success should be evaluated on whether it expands Cardano’s total addressable developer base rather than merely redistributing existing developers across another toolset. In summary, RCADA believes this proposal meets the standard for responsible treasury funding. It addresses genuine ecosystem needs, demonstrates mature governance and accountability mechanisms, and aligns with long-term goals around decentralization, developer accessibility, and infrastructure resilience. Our support should be interpreted as endorsement of this specific implementation, governance structure, and reporting model — while signaling continued scrutiny around contingency design, measurable adoption outcomes, and ecosystem fragmentation risk. 

RCADA votes YES.
