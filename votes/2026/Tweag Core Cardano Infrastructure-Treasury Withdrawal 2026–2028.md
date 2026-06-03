---
title: "Tweag Core Cardano Infrastructure: Treasury Withdrawal 2026–2028"
gov_action_id: "gov_action14u26vcn3wmcnhc5pqrt6494ypugr7c7f3e2ns60r32cntl6zjtxsqqgeu8p"
type: "Treasury Withdrawals"
vote: "Abstain"
vote_date: "2026-06-03"
expires: "2026-06-03"
status: "Committed"
constitution_version: "Cardano Blockchain Ecosystem Constitution v2.4"
tags: ["treasury", "core-infrastructure", "peras", "leios", "testing", "observability", "developer-tooling", "tweag", "intersect"]
links:
  adastat: "https://adastat.net/governances/af15a6627176f13be28100d7aa96a40f103f63c98e553869e38ab135ff4292cd00"
  govtool: ""
  forum: ""
  ipfs: ""
---

## Summary

This governance action requests **₳39,787,316**, stated as approximately **$9,946,829 USD**, to fund Tweag by Modus Create’s delivery of **17 work packages across 9 core infrastructure areas** for the Cardano ecosystem over the 2026–2028 period.

The proposal’s headline focus is the mainnet deployment of **Peras**, intended to improve finality from approximately 12 minutes today to around 2 minutes. The broader scope includes Peras v1 and v2, History Expiry, Hard Fork Mempool Bridger, conformance testing, adversarial fork testing, Canonical Ledger State and Mithril work, Plutus Script Re-Executor, mutation testing, Hoarding Node work, block cost investigation, and ongoing maintenance of Genesis Sync Accelerator and the Cardano Node Emulator.

RCADA votes **ABSTAIN**.

This abstention should not be read as rejection of Tweag, Peras, or the proposed infrastructure roadmap. RCADA recognises that much of the work is important, technically credible, and relevant to Cardano’s long-term resilience, scalability, developer experience, and decentralisation.

However, for a treasury withdrawal approaching **₳40 million** over two years, RCADA believes the proposal should provide stronger modularity, clearer per-work-package costing, explicit review gates, and sharper risk partitioning. RCADA abstains as a constructive signal: the work is important, but the proposal structure does not give enough governance confidence for a full YES.

---

## Key Considerations

- The proposal funds core public infrastructure, not a commercial subsidy or marketing initiative.
- The work includes several strategically important areas: Peras, History Expiry, testing, observability, Plutus tooling, and network resilience.
- Tweag has a long-standing role in Cardano core infrastructure and is a credible technical contributor.
- The work packages appear technically connected rather than arbitrary.
- The proposal explicitly frames the 17 work packages as a single delivery pipeline, not a modular menu.
- The request is very large: **₳39,787,316** over a two-year period.
- The all-or-nothing structure limits DRep ability to approve the most urgent or highest-confidence components separately.
- The visible metadata does not provide enough per-work-package costing and prioritisation detail for RCADA to support the full package confidently.
- The proposal includes several positive safeguards: Intersect administration, legal contract, milestone-based delivery, third-party assurance, smart contract treasury handling, public dashboarding, refund conditions, prior treasury disclosure, and Net Change Limit compliance.
- RCADA believes important technical work must be matched by high-quality proposal design so that valuable projects do not fail because DReps lack sufficient governance clarity.
- RCADA would be more comfortable supporting a revised or staged version with stronger phase gates, more granular costing, and clearer risk separation.

---

## What this action does

This action requests treasury funding for Tweag by Modus Create to deliver a two-year programme of Cardano core infrastructure work from 2026 to 2028.

The proposal covers 17 work packages across 9 core infrastructure areas. The primary focus is Peras mainnet deployment and related protocol-readiness work. The broader package includes:

- Peras v1 production cryptography, KillSwitch, and mainnet readiness;
- Peras v2 pre-agreement algorithm, cooldown recovery, and performance optimisations;
- History Expiry to support partial-history nodes and reduce SPO storage costs;
- Hard Fork Mempool Bridger to preserve transactions during fork incidents;
- conformance testing extended for Peras and Leios;
- adversarial fork testing and Genesis property-based test improvements;
- Canonical Ledger State and Mithril work;
- Plutus Script Re-Executor tooling for DApp developers;
- mutation testing for Haskell/Cardano test-suite adequacy;
- Hoarding Node live deployment, distributed mode, embedded consensus validation, and transaction collection;
- block cost investigation;
- ongoing maintenance of Genesis Sync Accelerator and the Cardano Node Emulator.

The proposal requests that Intersect serve as proposal and contract administrator. Deliverables are described as open-source and publicly tracked.

---

## Analysis Findings

### Constitutional / Guardrails Assessment

- ✔ The action is correctly framed as a Treasury Withdrawal.
- ✔ The proposal states the purpose of the withdrawal: funding Tweag’s 2026–2028 core infrastructure delivery programme.
- ✔ The proposal identifies the delivery period as 2026–2028.
- ✔ The proposal discloses prior treasury receipts of **₳11,070,322.68**.
- ✔ The proposal states refund conditions for undisbursed funds, partial delivery, and scope reduction.
- ✔ The proposal states Net Change Limit compliance at the time of submission.
- ✔ The proposal identifies Intersect as administrator.
- ✔ The proposal describes use of a legal contract with Cardano Development Holdings.
- ✔ The proposal includes milestone-based delivery, third-party assurance, and public reporting.
- ✔ The proposal describes use of Intersect treasury smart contract infrastructure.
- ✔ The proposal states that TRSC and PSSC funds cannot be staked with an SPO and will be delegated to the auto-abstain predefined DRep.
- ⚠ The proposal is large and long-running, creating a higher burden for cost transparency and staged accountability.
- ⚠ The proposal bundles 17 work packages into one treasury withdrawal, limiting DRep choice even where the packages are technically related.
- ⚠ Some value depends on later governance actions, hard fork activation, CIP progression, or ecosystem adoption outside Tweag’s sole control.
- ⚠ The visible metadata does not provide enough per-package costing or annual gate structure for RCADA to support the full withdrawal confidently.

**Assessment:** Conditional Pass

The proposal appears to address the main constitutional structure expected of a Treasury Withdrawal. RCADA’s concern is not that the proposal is constitutionally defective, but that a treasury withdrawal of this size and duration requires a higher standard of granularity, reviewability, and risk partitioning.

---

### Process & Governance Quality

The proposal has several governance-quality strengths.

It identifies Intersect as administrator, references a legal contract with CDH, describes milestone acceptance, includes third-party assurance, uses treasury smart contract infrastructure, provides refund conditions, discloses prior treasury receipts, and commits to public tracking and community engagement.

RCADA welcomes these elements. They demonstrate an attempt to align with Cardano’s developing treasury governance standards and reduce the risk of unaccountable lump-sum funding.

The proposal also makes a serious argument that the work packages are interdependent. This is not a random bundle of unrelated items. Peras, Leios-readiness, History Expiry, conformance testing, adversarial testing, Hoarding Node observability, block-cost analysis, and tooling all contribute to a broader infrastructure-readiness pathway.

However, the governance concern remains.

Even when a bundle is technically coherent, it can still be difficult for DReps to evaluate and approve responsibly when it spans **17 work packages**, **two years**, and nearly **₳40 million**. RCADA would have preferred clearer separation between critical-path items, supporting items, maintenance items, and lower-priority or more experimental work. A phased proposal, annual renewal gate, or clearer modular structure would have allowed DReps to support the highest-confidence work while maintaining stronger fiscal control.

RCADA also believes that important and much-needed work can fail if proposal quality does not match technical importance. The more important the work, the more important it is that the proposal gives DReps confidence through clear cost breakdowns, milestones, dependencies, reporting expectations, and review gates.

**Assessment:** Mixed

The administration and oversight framework is strong, but the size, duration, and bundled structure reduce RCADA’s confidence.

---

### Impact & Risk Analysis

The potential ecosystem impact is high.

If delivered successfully, the proposal could support faster finality through Peras, improve readiness for future scaling, reduce storage pressure on SPOs through History Expiry, strengthen conformance and adversarial testing, improve observability of live network behaviour, support developer debugging through Plutus tooling, and maintain useful infrastructure components such as Genesis Sync Accelerator and the Cardano Node Emulator.

These are meaningful public-good outcomes. They support Cardano’s resilience, decentralisation, developer experience, and long-term competitiveness.

The main risk is not that the work is unimportant. The main risk is that the treasury is being asked to commit a very large amount of ADA to a single two-year delivery pipeline without enough visible granularity for DReps to calibrate support across the individual components.

There is also dependency risk. Some work may be “ready-for-activation” rather than directly activated, because final value may depend on future governance actions, hard fork combinator windows, CIP progression, integration by other teams, or broader ecosystem adoption. The proposal acknowledges this separation, which is positive, but it still means the treasury may fund readiness work whose realised network value depends on later decisions and coordination.

The scale also raises fiscal-discipline concerns. A nearly **₳40 million** request requires particularly strong accountability because it affects treasury capacity, Net Change Limit headroom, and precedent for future large infrastructure proposals.

**Assessment:** High potential value / Medium-to-high governance risk

The work is valuable, but the proposal structure does not give RCADA enough confidence to vote YES.

---

## Ratings (Decision Support Only)

| Dimension | Score |
|---|---:|
| Constitutional clarity | 4 / 5 |
| Governance quality | 2.5 / 5 |
| Execution credibility | 4 / 5 |
| Ecosystem value | 4.5 / 5 |
| Risk balance | 2.5 / 5 |
| **Overall score** | **70% — High-value work, insufficient governance confidence for full support** |

---

## RCADA Rationale

RCADA abstains on the **Tweag Core Cardano Infrastructure: Treasury Withdrawal 2026–2028** proposal.

This is not an abstention against Tweag, Peras, History Expiry, conformance testing, network observability, Plutus tooling, or the broader infrastructure direction described in the proposal. On the contrary, RCADA recognises that much of this work is important, technically credible, and highly relevant to Cardano’s long-term resilience, scalability, developer experience, and decentralisation.

The proposal requests **₳39,787,316** to fund **17 work packages across 9 core infrastructure areas** over the 2026–2028 period. These include Peras v1 and v2, History Expiry, Hard Fork Mempool Bridger, conformance testing, adversarial fork testing, Canonical Ledger State and Mithril work, Plutus Script Re-Executor, mutation testing, Hoarding Node work, block cost investigation, and ongoing maintenance of Genesis Sync Accelerator and the Cardano Node Emulator.

RCADA acknowledges that these work packages are not arbitrary or unrelated. The proposal makes a reasonable technical argument that they form a connected delivery pipeline around Peras, Leios-readiness, testing, observability, node sustainability, and developer tooling. The proposal explicitly states that it is structured as a single delivery pipeline rather than a modular menu, because several of the testing, observability, and audit components support the safe delivery of larger protocol improvements.

That technical connection matters, and it is one of the reasons RCADA does not vote No.

However, RCADA also has a responsibility to uphold strong governance standards, especially for treasury withdrawals of this size and duration. A request approaching **₳40 million** over two years must meet a very high bar for granularity, reviewability, cost transparency, milestone clarity, and risk partitioning. Even where work packages are technically related, DReps are still being asked to approve a large, multi-year, all-or-nothing funding pipeline in a single governance action.

RCADA’s concern is therefore not with the importance of the work, but with the structure of the proposal.

The proposal contains several positive governance features. It identifies Intersect as administrator, refers to a legal contract with Cardano Development Holdings, includes milestone-based delivery and third-party assurance, uses treasury smart contract infrastructure, provides refund conditions for undisbursed or reduced-scope work, discloses prior treasury receipts, and states Net Change Limit compliance. These are meaningful safeguards, and RCADA welcomes them.

Nevertheless, for a proposal of this scale, RCADA would have preferred clearer per-work-package costing, stronger modularity or phase separation, explicit annual review or renewal gates, sharper prioritisation of critical-path deliverables, and clearer handling of dependencies where final ecosystem value depends on later governance actions, hard fork activation, CIP progression, or adoption by other teams.

RCADA is particularly mindful that poor proposal structure can cause important and much-needed work to fail on governance grounds, even where the underlying technical case is strong. This is a message not only to Tweag, but to all proposers seeking treasury support: high-quality work deserves high-quality proposals. The more important the work, the more important it is that the proposal gives DReps and the community enough clarity, granularity, and accountability to support it confidently.

In this case, RCADA is genuinely pained not to vote Yes. The infrastructure direction is valuable, and Tweag’s long-standing involvement in Cardano core development gives the proposal substantial credibility. But RCADA cannot ignore the governance responsibility that comes with approving a large treasury commitment. Supporting important work must not come at the cost of lowering proposal-quality standards, especially when those standards protect the legitimacy and sustainability of Cardano governance itself.

RCADA therefore abstains as a constructive signal.

This abstention should not be read as rejection of Tweag, Peras, or the infrastructure roadmap. It is a request for a more granular, risk-partitioned, and reviewable funding structure. RCADA would be more comfortable supporting a revised proposal that preserves the critical infrastructure objectives while offering clearer cost breakdowns, stronger phase gates, and more opportunity for DReps to assess and approve the highest-priority work on its own merits.

RCADA encourages Tweag and future infrastructure proposers to return with structures that make it easier for DReps to say Yes to important work without compromising governance discipline.

---

## Post-Vote Monitoring Notes

RCADA will monitor whether:

- Tweag submits a revised, narrower, or phased version of the proposal;
- a Peras-first or annual-gated proposal emerges;
- per-work-package budgets and milestones are published with greater clarity;
- dependencies on hard fork activation, CIP progression, or other ecosystem teams are separated from Tweag-controlled deliverables;
- Intersect publishes clear milestone metadata and assurance criteria if any version of this proposal is funded;
- prior treasury-funded Tweag work is reconciled clearly against new requested work;
- the community receives regular public demos and status updates as committed;
- any unspent or reduced-scope funds are returned under the stated refund conditions.
