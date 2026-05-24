---
title: "IO & VacuumLabs: Enhancing Plutus - Performance, Correctness, and Usability"
gov_action_id: "gov_action1w0shrfxqwv95kk0v4cn34wylz25a2cmqkq5jpc0e2yrahhqava3qvczhx6t"
type: "Treasury Withdrawals"
vote: "Yes"
vote_date: "2026-05-24"
expires: "2026-05-24"
status: "Committed"
constitution_version: "Cardano Blockchain Ecosystem Constitution v2.4"
tags: ["treasury", "plutus", "smart-contracts", "developer-tools", "formal-methods", "infrastructure"]
links:
  adastat: "https://adastat.net/governances/73e171a4c0730b4b59ecae271ab89f12a9d56360b02920e1f95107dbdc1d676206"
  govtool: ""
  forum: ""
  ipfs: ""
---

## Summary

RCADA votes **YES** on the **IO & VacuumLabs: Enhancing Plutus - Performance, Correctness, and Usability** Treasury Withdrawal proposal.

RCADA supports this proposal because Plutus is foundational to Cardano’s smart contract ecosystem. The proposal targets three connected areas: lower execution costs and expanded capabilities, stronger formal specification and conformance testing, and improved developer experience.

RCADA views the IO and VacuumLabs collaboration positively as a step toward broader multi-party stewardship of Cardano’s core smart contract infrastructure.

This YES vote supports development readiness, formalisation, testing, and implementation work. It should not be interpreted as automatic approval of any future hard-fork activation, which should remain subject to separate technical, governance, ecosystem, and constitutional review.

---

## Key Considerations

- Plutus performance, correctness, and usability directly affect Cardano’s ability to support serious smart contract applications.
- Lower execution costs and better built-ins can improve application viability and user experience.
- Formal specification and property-based conformance testing are important as node diversity and alternative evaluators mature.
- Developer-experience improvements can reduce setup friction, improve error reporting, and help more developers build with Plutus.
- The IO and VacuumLabs co-venture supports distributed stewardship of shared public infrastructure.
- Some benefits depend on future hard-fork activation and should receive separate review.
- Future proposals would benefit from clearer partner-level cost attribution and milestone-level budget detail.
- Downstream tooling teams should be engaged early to avoid unnecessary disruption.

---

## What this action does

This Treasury Withdrawal proposal requests **₳11,877,575** to improve Plutus across three connected workstreams.

The first workstream improves Plutus capabilities and primitives, including built-in casing on `Data`, implementation of `multiIndexArray` from CIP-0156, additional `BuiltinValue` functions from CIP-0168, investigation of scope-check removal, a SNARK-friendly Poseidon hash CIP, and research into laziness and memoization in UPLC.

The second workstream strengthens formal specification, correctness, and security through property-based conformance testing, Agda formalisation of Plutus primitives, and structured review of evaluator and costing logic.

The third workstream improves developer experience through compiler and optimizer improvements, clearer source-level error messages, reduced boilerplate, broader GHC support, and simpler setup without heavy Nix or native dependency friction.

Funds are to be administered through Intersect-managed Treasury smart contracts with milestone-based controls, third-party assurance, oversight mechanisms, public auditability, and refund conditions for unused funds.

---

## Analysis Findings

### Constitutional / Guardrails Assessment

- ✔ The proposal specifies a clear Treasury ask of **₳11,877,575**.
- ✔ The proposal identifies the purpose of the withdrawal: Plutus performance, correctness, and usability improvements.
- ✔ The proposal includes defined workstreams, deliverables, and roadmap items.
- ✔ The proposal includes budget categories and delivery resources.
- ✔ The proposal includes refund conditions for unused funds or reduced scope.
- ✔ The proposal discloses prior Treasury receipts for IO and affiliated entities.
- ✔ The proposal states that it does not breach the applicable **350M ADA Net Change Limit** at the time of submission.
- ✔ Funds are to be administered via Intersect-managed Treasury smart contracts with third-party assurance and oversight mechanisms.
- ⚠ Some benefits depend on future hard-fork activation and should not be treated as automatically approved by this vote.
- ⚠ Public cost attribution could be clearer, with 86% of the request grouped under “Development.”
- ⚠ Downstream tooling coordination is important because Plutus changes can affect compilers, wallets, indexers, auditors, alternative evaluators, and DApp developers.

**Assessment:** Conditional Pass

---

### Process & Governance Quality

- ✔ The proposal has a coherent theme focused on Plutus as shared smart contract infrastructure.
- ✔ The three workstreams are connected through performance, correctness, and usability.
- ✔ The roadmap contains concrete technical outputs, including CIPs, implementation work, conformance tests, audit reports, compiler improvements, and documentation.
- ✔ The VacuumLabs collaboration supports broader ecosystem stewardship.
- ✔ Intersect administration, third-party assurance, refund provisions, and public auditability are positive governance features.
- ⚠ Future proposals should provide clearer partner-level cost attribution.
- ⚠ Hard-fork-dependent outputs should remain subject to later governance and ecosystem review.

**Assessment:** Strong, with transparency and downstream-coordination improvements recommended

---

### Impact & Risk Analysis

- **Ecosystem benefit:** High
- **Strategic alignment:** High
- **Developer impact:** High
- **Security/correctness impact:** High
- **Execution complexity:** Medium
- **Hard-fork dependency risk:** Medium
- **Treasury risk:** Medium
- **Downstream tooling risk:** Medium

RCADA believes this proposal has strong strategic value because it strengthens the smart contract foundation that many Cardano applications depend on. The main risks relate to hard-fork dependency, cost transparency, and downstream coordination rather than the value of the work itself.

**Assessment:** High value / Medium risk

---

## Ratings (Decision Support Only)

| Dimension | Score (1–5) |
|---|---:|
| Constitutional clarity | 4 |
| Governance quality | 4 |
| Execution credibility | 4 |
| Ecosystem value | 5 |
| Risk balance | 4 |
| **Overall score** | **🟢 84% — Strong support case with accountability expectations** |

---

## RCADA Rationale

RCADA votes **YES** on the **IO & VacuumLabs: Enhancing Plutus - Performance, Correctness, and Usability** Treasury Withdrawal proposal.

We support this proposal because Plutus is foundational to Cardano’s smart contract ecosystem. The cost, expressiveness, correctness, and usability of Plutus directly affect what developers can build, how safely they can build it, and whether Cardano can remain competitive as a serious platform for DeFi, high-assurance applications, zero-knowledge use cases, and broader on-chain utility.

This proposal addresses three connected areas: improving Plutus capabilities and execution efficiency, strengthening formal specification and conformance testing, and improving developer experience. RCADA sees these as mutually reinforcing rather than unrelated workstreams. A smart contract platform should be cheaper to use, easier to build with, and more rigorously specified as the ecosystem matures.

The performance and capability work is important because execution costs remain a practical constraint for Cardano applications. Features such as built-in casing on `Data`, implementation of `multiIndexArray` from CIP-0156, additional `BuiltinValue` functions from CIP-0168, and investigation into scope-check removal, laziness, and memoization could reduce script size, lower execution budgets, and unlock more efficient contract patterns. These improvements can make Cardano more attractive to developers and improve the user experience of applications that depend on Plutus.

RCADA also values the formal specification, correctness, and security work. As alternative node implementations and independent Plutus evaluators become more realistic, Cardano needs stronger implementation-independent specifications and conformance testing. A property-based conformance framework, Agda formalisation of built-in semantics, and structured security review of evaluator and costing logic all help reduce the risk of subtle consensus or execution differences. This is exactly the type of foundational work that supports a safer multi-client future.

The developer-experience work is also welcome. Cardano smart contract development has a reputation for being powerful but difficult to approach. Better compiler architecture, clearer source-level error messages, reduced boilerplate, broader GHC support, and simpler setup without heavy Nix or native dependency friction could help more developers move from experimentation to production. RCADA has consistently encouraged practical documentation, tooling, and onboarding improvements, and this proposal includes meaningful steps in that direction.

We also view the collaboration with **VacuumLabs** positively. RCADA does not want Cardano’s core infrastructure to depend indefinitely on a single organisation. At the same time, the answer is not simply to replace one dominant provider with another. The healthier path is progressive multi-party stewardship, where specialist teams contribute to shared public infrastructure according to their strengths. The IO and VacuumLabs co-venture is a constructive example of that model for Plutus.

However, our YES vote should not be read as unconditional endorsement of every future protocol change described in this proposal.

Some of the benefits depend on future hard-fork activation. The proposal states that language and built-in extensions require a hard fork for activation on mainnet, with Dijkstra as the target. RCADA views this vote as support for development readiness, formalisation, testing, and implementation work. Any future hard-fork activation should remain subject to separate technical, governance, ecosystem, and constitutional review.

We also note the familiar concern around budget transparency. The proposal requests **₳11,877,575**, with a large share grouped under development. While specialist compiler, language, formal-methods, and security work is expensive and requires rare expertise, future proposals would benefit from clearer partner-level cost attribution, staffing assumptions, and milestone-level payment detail. Treasury-funded technical work should be understandable and auditable by the wider community, not only by insiders.

RCADA also encourages early and continuous coordination with downstream tooling teams. Plutus changes can affect compilers, wallets, indexers, auditors, alternative evaluators, DApp developers, and educational resources. To avoid unnecessary disruption, these improvements should be accompanied by strong documentation, migration guidance, conformance tests, examples, and public communication.

Overall, RCADA believes this proposal is well aligned with Cardano’s strategic needs. It strengthens the smart contract foundation, supports formal correctness, improves performance, improves developer usability, and helps distribute Plutus stewardship across expert teams. It is a broad proposal, but the workstreams are connected by a coherent goal: making Plutus cheaper, safer, and easier to use.

For these reasons, RCADA votes **YES**, while emphasising the importance of downstream coordination, clear documentation, separate scrutiny for future hard-fork activation, measurable delivery, and improved cost transparency in future Plutus funding requests.
