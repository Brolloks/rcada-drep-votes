---
title: "Reduce the committeeMinSize parameter from 7 to 5"
gov_action_id: "gov_action1cadmygtqv6r64pvwezw859wg36wpwp209cz94cc7ej9fdp7dyphqq58n5ur"
type: "Parameter Update"
vote: "Abstain"
vote_date: "2026-06-11"
expires: "2026-07-08"
status: "Committed"
constitution_version: "Cardano Blockchain Ecosystem Constitution v2.4"
tags: ["parameter-update", "constitutional-committee", "committeeMinSize", "governance", "resilience"]
links:
  adastat: "https://adastat.net/governances/c75bb221606687aa858ec89c7a15c88e9c17054f2e045ae31ecc8a9687cd206e00"
  prior_action: "https://adastat.net/governances/dfdac5921ab657241fce58583d61bef59a369e01d2ba78191d6df6632a07fdfd00"
  govtool: ""
  forum: ""
  ipfs: ""
---

## Summary

RCADA votes **ABSTAIN** on **Reduce the committeeMinSize parameter from 7 to 5**.

RCADA recognises the genuine operational issue this proposal addresses. With both the current Constitutional Committee and `committeeMinSize` set at 7, the system has no buffer. A single resignation, term expiry, registration issue, or temporary inactivity can affect the committee’s ability to ratify governance actions that require Constitutional Committee approval, including parameter changes, Treasury withdrawals, Constitution updates, and hard forks.

RCADA agrees that Cardano governance should not be fragile enough that one or two committee availability issues can create system-wide disruption.

However, RCADA is not fully convinced that lowering the minimum from 7 to 5 is the strongest long-term governance design. While the proposal addresses an immediate pain point, it does so by reducing the floor of one of Cardano’s key constitutional safeguards.

RCADA believes a stronger long-term structure may be to expand the target Constitutional Committee size while maintaining a higher minimum. For example, electing 9 members with a minimum of 7 could provide a similar operational buffer while better preserving representation, legitimacy, and resilience.

This abstain is not opposition to improving governance resilience. RCADA supports fixing the current brittleness, but prefers solving it through a broader discussion on Constitutional Committee design rather than only lowering the minimum parameter.

---

## Key Considerations

- The proposal reduces `committeeMinSize` from **7** to **5**.
- The current Constitutional Committee has 7 members, equal to the current minimum.
- With a 7-member committee and a minimum of 7, there is no operational buffer.
- If the committee falls below `committeeMinSize`, governance actions requiring Constitutional Committee approval cannot be ratified.
- The proposal does not directly remove current committee members.
- The proposal does not change the maximum number of Constitutional Committee members.
- The stated intent is operational resilience, not reducing the desired committee size.
- The prior version of this action became invalid due to parameter-action coordination issues.
- RCADA’s prior abstain was largely procedural, not opposition to the resilience objective.
- Lowering the minimum to 5 could make it easier over time to normalise operating with a smaller committee.
- A possible stronger long-term model would be a 9-member committee with a 7-member minimum.
- RCADA supports the goal of preventing governance inoperability, but does not fully endorse this parameter change as the best long-term path.

---

## What this action does

This Parameter Update governance action changes the `committeeMinSize` protocol parameter from **7** to **5**.

The `committeeMinSize` parameter defines the minimum number of Constitutional Committee members registered on-chain required for the committee to function for governance actions requiring Constitutional Committee approval.

The proposal is intended to create an operational buffer. If the committee temporarily drops from 7 members to 6 or 5 members, governance actions requiring Constitutional Committee approval could still progress.

The proposal states that it does **not**:

- reduce the current number of Constitutional Committee members;
- imply that reducing the committee size is desired;
- change the maximum number of Constitutional Committee members;
- attempt to centralise Cardano governance.

The proposal also includes a temporal dependency on the live **Update Plutus Cost Models** parameter update action. The metadata states that there is no technical interaction between the two parameter changes, but the enactment sequence matters to avoid the type of invalidation issue seen in the previous `committeeMinSize` action.

---

## Analysis Findings

### Constitutional / Guardrails Assessment

Relevant guardrails identified in the proposal:

- **CMS-01:** `committeeMinSize` must not be negative.
- **CMS-02:** `committeeMinSize` must not be lower than 3.
- **CMS-03:** `committeeMinSize` must not exceed 10.
- **PARAM-06a:** At least 90 days should normally pass between publication of an off-chain proposal to change a governance-critical parameter and submission of the corresponding on-chain action.

Assessment:

- ✔ The proposed value of 5 is not negative.
- ✔ The proposed value of 5 is not lower than 3.
- ✔ The proposed value of 5 does not exceed 10.
- ✔ The proposal states that the off-chain proposal was published on 2025-11-11.
- ✔ The proposal states that the action underwent review through the Parameter Committee process.
- ✔ The proposal states that the Civics Committee approved submission on 2026-03-13.
- ✔ The proposal states that the Technical Steering Committee approved submission on 2026-06-03.
- ✔ The proposal includes a reversion plan.
- ⚠ The parameter is governance-critical and changes the operating floor of the Constitutional Committee.
- ⚠ Lowering the minimum may affect long-term expectations around committee operating size.
- ⚠ The proposal depends on correct sequencing with another live parameter update action.

**Assessment:** Pass, with governance-design concerns

---

### Process & Governance Quality

- ✔ The proposal clearly explains the operational resilience problem.
- ✔ The proposal explains the prior invalidation issue and why the action was resubmitted.
- ✔ The proposal distinguishes between minimum required size and desired committee size.
- ✔ The proposal acknowledges voting-threshold effects at different committee sizes.
- ✔ The proposal states that the intended operating model remains a 7-seat Constitutional Committee.
- ✔ The proposal includes committee review and socialisation history.
- ⚠ The resubmission still depends on careful sequencing with the Plutus Cost Models parameter update.
- ⚠ The proposal solves the buffer issue by lowering the minimum rather than expanding the committee.
- ⚠ The community may benefit from a broader discussion on whether 9 members with a 7-member minimum is a stronger long-term design.

**Assessment:** Mixed to Strong

---

### Impact & Risk Analysis

- **Operational resilience value:** High
- **Governance continuity value:** High
- **Technical risk:** Low
- **Constitutional guardrail compliance:** High
- **Governance-design risk:** Medium
- **Normalisation risk:** Medium
- **Committee concentration risk:** Medium
- **Sequencing risk:** Low to Medium

RCADA recognises that this proposal addresses a real governance fragility. However, lowering the minimum to 5 may not be the strongest long-term design choice. A larger committee with a higher minimum may provide similar resilience while preserving a stronger safeguard.

**Assessment:** Valid resilience objective / imperfect long-term design

---

## Ratings (Decision Support Only)

| Dimension | Score (1–5) |
|---|---:|
| Constitutional clarity | 4 |
| Governance quality | 3 |
| Operational resilience value | 4 |
| Long-term design strength | 3 |
| Risk balance | 3 |
| **Overall score** | **🟡 66% — ABSTAIN; valid resilience goal, but design concerns remain** |

---

## RCADA Rationale

RCADA votes **ABSTAIN** on **Reduce the committeeMinSize parameter from 7 to 5**.

RCADA recognises the genuine operational issue this proposal addresses. With both the current Constitutional Committee and `committeeMinSize` set at 7, the system has no buffer. A single resignation, term expiry, registration issue, or temporary inactivity can immediately affect the committee’s ability to ratify governance actions that require Constitutional Committee approval, including parameter changes, Treasury withdrawals, Constitution updates, and hard forks.

This is a real governance resilience concern. RCADA agrees that Cardano governance should not be fragile enough that one or two committee availability issues can create system-wide disruption.

RCADA also recognises that this resubmission gives the community a proper opportunity to review the proposal after the previous action was affected by parameter-action coordination issues. RCADA’s prior abstain was largely procedural and should not be read as opposition to improving Constitutional Committee resilience.

However, RCADA is not fully convinced that lowering the minimum from 7 to 5 is the strongest long-term governance design.

While the proposal addresses an immediate pain point, it does so by reducing the floor of one of Cardano’s key constitutional safeguards. Even if the current intention is to keep operating with a seven-member committee, protocol parameters can shape future behaviour. A lower minimum may make it easier over time to normalise operating with fewer committee members.

RCADA believes a stronger long-term structure may be to expand the target Constitutional Committee size while maintaining a higher minimum. For example, electing 9 members with a minimum of 7 could provide a similar operational buffer while better preserving representation, legitimacy, and resilience.

RCADA also remains cautious about voting dynamics at a smaller committee size. Under the current two-thirds threshold, a seven-member committee requires 5 constitutional votes to approve, while a five-member committee requires 4. At five members, inactivity or opposition from a small number of members can have a larger effect on whether governance actions progress.

This abstain is not opposition to improving governance resilience. RCADA supports fixing the current brittleness. However, we prefer solving it through a broader discussion on Constitutional Committee design rather than only lowering the minimum parameter.

The preferred steady state should remain a healthy, full-sized Constitutional Committee, not one operating near the bare minimum.

For these reasons, RCADA votes **ABSTAIN**. We support preventing governance inoperability, but do not fully endorse reducing `committeeMinSize` to 5 as the best long-term path forward.
