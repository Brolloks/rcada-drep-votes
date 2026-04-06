---
title: "Dingo: a Production-Grade Block Producer in Go by Blink Labs"
gov_action_id: "gov_action17dfgtkeufcy945e3ssanqpmn09ft3gezhvepvvg7msmlmaz260dqqjtsmpe"
type: "Treasury Withdrawals"
vote: "Yes | No | Abstain"
vote_date: "2026-04-06"
expires: "2026-04-09"
status: "Committed"
constitution_version: "Cardano Blockchain Ecosystem Constitution v2.4"
tags:
  - governance
  - treasury
  - infrastructure
  - node
  - decentralisation
links:
  adastat: "https://adastat.net/governances/f35285db3c4e085ad331843b3007737952b8a322bb3216311edc37fdf44ad3da00"
  govtool: ""
  forum: ""
  ipfs: ""
---

## Summary
- This Treasury Withdrawal requests 6.9M ADA to fund development of Dingo, a Go-based Cardano node, toward mainnet block production readiness.
- RCADA votes YES based on strong ecosystem value, demonstrated delivery, and robust governance and treasury controls.
- This vote signals support for strategic infrastructure development while maintaining expectations of execution discipline and accountability.

---

## Key Considerations
- Node diversity is a critical factor in network resilience and systemic risk reduction.
- Proposal demonstrates significant prior progress and is not early-stage.
- Strong governance design: escrow contracts, oversight board, milestone-based disbursement.
- Expands developer accessibility through Go ecosystem adoption.
- Execution complexity and long-term maintenance implications acknowledged.
- Broader treasury coordination concerns noted but not decisive for this proposal.

---

## What this action does
This proposal requests treasury funding to complete development of Dingo, a Go-based Cardano node, over a twelve-month period.

The project aims to:
- Achieve mainnet-ready block production capability.
- Implement Ouroboros Praos consensus.
- Support the Dijkstra hard fork and Plutus V4.
- Develop a Go implementation of CIP-0164 Linear Leios alongside IO Engineering.
- Conduct a full independent security audit.
- Deliver operational tooling, documentation, and ecosystem integration.

Funds are managed through smart contract escrow with milestone-based releases, independent oversight, and full public reporting.

---

## Analysis Findings

### Constitutional / Guardrails Assessment
- ✔ Aligns with infrastructure resilience and decentralisation principles.
- ✔ Strong treasury compliance with defined scope, timeline, and controls.
- ✔ Transparent reporting and auditability mechanisms.
- ⚠ Execution success dependent on technical delivery and audit outcomes.
- ⚠ Single vendor concentration introduces limited centralisation risk.

**Assessment:** Pass

---

### Process & Governance Quality
- High-quality proposal structure with detailed scope and deliverables.
- Strong accountability through escrow, oversight board, and reporting.
- Clear linkage between funding and measurable outcomes.
- ⚠ Minor issues such as outdated constitutionality checklist template.
- ⚠ Oversight structure relatively small but functional.

**Assessment:** Strong

---

### Impact & Risk Analysis
- Very high ecosystem value through node diversity and developer expansion.
- Medium execution risk due to complexity of consensus and mainnet readiness.
- Medium financial risk mitigated through escrow and milestone controls.

**Assessment:** High Value / Medium Risk

---

## Ratings (Decision Support Only)

| Dimension | Score (1–5) |
|---------|-------------|
| Constitutional clarity | 4 |
| Governance quality | 5 |
| Execution credibility | 4 |
| Ecosystem value | 5 |
| Risk balance | 3 |

---

## RCADA Rationale

RCADA supports this treasury withdrawal as a strategically important investment in Cardano’s infrastructure resilience, decentralisation, and long-term ecosystem accessibility.

This proposal addresses a fundamental structural consideration within the network: reliance on a single production node implementation. By advancing Dingo—a Go-based Cardano node—toward mainnet block production readiness, it contributes directly to node diversity, which is essential for reducing systemic risk and improving network robustness. Multiple independent implementations strengthen Cardano’s ability to withstand client-specific defects, an approach that has proven critical in other blockchain ecosystems.

We recognise the substantial progress already demonstrated by the Blink Labs team. With a significant body of merged code, full Plutus V1–V3 conformance, and working implementations of key node components, this proposal represents the continuation of an already credible and actively developed infrastructure effort rather than a speculative or early-stage initiative.

The governance and treasury management structure presented is notably strong. The use of audited smart contract escrow mechanisms, milestone-based disbursements, independent oversight, and a public transaction journal establishes a high standard of accountability and transparency. These mechanisms align closely with responsible treasury usage and represent a positive precedent for future funding proposals.

We also acknowledge the broader strategic value of a Go-based implementation. Go is widely adopted across high-performance distributed systems and blockchain infrastructure, and its inclusion expands accessibility to a significantly larger developer ecosystem. This has potential long-term benefits for adoption, integration, and contributor growth within Cardano.

At the same time, we recognise and take seriously several concerns raised within the community.

First, questions around overall treasury coordination and budget visibility remain valid. The current environment, where multiple treasury withdrawal proposals are assessed independently, can make it difficult to evaluate cumulative impact and prioritisation across competing initiatives. While this is a systemic governance consideration rather than a deficiency specific to this proposal, it remains an area that requires continued improvement.

Second, we acknowledge the argument that funding multiple node implementations introduces long-term maintenance considerations and may risk spreading resources too thinly. These concerns are legitimate and highlight the importance of disciplined treasury management. However, we consider node diversity to be a foundational requirement rather than a discretionary enhancement. Progressing toward a multi-client ecosystem should not be treated as strictly sequential, as doing so may delay meaningful risk reduction at the protocol level.

Third, execution risk remains non-trivial. Delivering a production-ready block-producing node requires successful completion of consensus implementation, operational hardening at scale, and a comprehensive security audit. These risks are inherent to the scope of the work. However, they are explicitly acknowledged within the proposal and are mitigated through structured milestones, escrow-based disbursement controls, independent oversight, and contingency planning.

We also note minor shortcomings, such as the use of an outdated constitutionality checklist template, which, while not materially affecting the validity of the proposal, reflects an area for improvement in future submissions.

On balance, RCADA finds that this proposal meets the threshold for treasury funding. It combines demonstrated delivery capability, strong governance design, and clear ecosystem value. It represents a meaningful step toward improving Cardano’s infrastructure resilience and developer accessibility.

Our YES vote reflects support for this specific proposal and its merits. It should not be interpreted as a blanket endorsement of all future node implementations or ongoing funding without the same level of scrutiny. Each subsequent proposal must independently justify its value, cost, and alignment with ecosystem priorities.

RCADA remains committed to supporting initiatives that strengthen decentralisation, improve governance standards, and deliver long-term value to the Cardano ecosystem..
