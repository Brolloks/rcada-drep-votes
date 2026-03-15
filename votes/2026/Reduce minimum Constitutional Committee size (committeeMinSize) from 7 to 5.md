---
title: "Reduce minimum Constitutional Committee size (committeeMinSize) from 7 to 5"
gov_action_id: "gov_action1mldvtys6ketjg87wtpvr6cd77kdrd8sp62a8sxgadhmxx2s8lh7sqp2qedq"
type: "Protocol Parameter Change"
vote: "Abstain"
vote_date: "2026-03-15"
expires: "2026-03-15"
status: "Committed"
constitution_version: "Cardano Blockchain Ecosystem Constitution v2.4"
tags: ["ParameterChange"]
links:
  adastat: "https://adastat.net/governances/dfdac5921ab657241fce58583d61bef59a369e01d2ba78191d6df6632a07fdfd00"
  govtool: ""
  forum: ""
  ipfs: ""
---

## Summary
- What the proposal is.
- The key reason RCADA voted as recorded above.
- (Optional) Signal or condition communicated.

---

## Key Considerations
- Extremely **low DRep turnout** and insufficient participation to reach ratification thresholds.
- Proposal outcome effectively **determined prior to RCADA vote submission**.
- **Parameter update coordination issue** involving multiple actions referencing the same previous parameter update.
- Importance of maintaining **procedural clarity and coordination** for governance actions with on-chain effects.
- Desire to **avoid signaling a directional vote** when participation levels did not reflect meaningful ecosystem consensus.

---

## What this action does
The proposal attempted to update the protocol parameter (`committeeMinSize`), reducing the minimum allowable size of the Constitutional Committee from **7 members to 5**.

The intent was to improve governance resilience by ensuring that the committee could continue to function if one or two members became unavailable. Under the current parameter, the committee risks becoming temporarily unable to ratify governance actions if its membership falls below seven before replacements are appointed.

The proposed change would not alter the intended committee size or its voting thresholds but would allow the committee to remain operational with fewer active members.

---

## Analysis Findings

### Constitutional / Guardrails Assessment
- ✔ Proposed value remains within allowed committee size guardrails (3–10 members).
- ✔ No direct conflict with constitutional tenets or governance structure.
- ⚠ Alters the operational tolerance of a core governance body.
- ⚠ Structural governance parameter changes ideally benefit from broad participation.

**Assessment:** Pass

---

### Process & Governance Quality
- Proposal structure was clear and properly documented.
- Parameter update submission followed established formatting and metadata practices.
- ⚠ Coordination issue observed with multiple parameter updates referencing the same previously enacted action.
- ⚠ Limited ecosystem engagement and discussion prior to expiration.

**Assessment:** Mixed

---

### Impact & Risk Analysis
- Potential improvement to **governance operational resilience**.
- Minimal technical or security risk to the protocol.
- ⚠ Governance participation risk highlighted by low DRep turnout.
- ⚠ Slight governance design trade-off between resilience and structural safeguards.

**Assessment:** Low

---

## Ratings (Decision Support Only)

| Dimension | Score (1–5) |
|-----------|-------------|
| Constitutional clarity | 4 |
| Governance quality | 3 |
| Execution credibility | 4 |
| Ecosystem value | 3 |
| Risk balance | 4 |

---

## RCADA Rationale

**RCADA Vote: ABSTAIN**

This proposal seeks to reduce the minimum Constitutional Committee size (`committeeMinSize`) from seven to five in order to improve operational resilience while maintaining constitutional safeguards.

RCADA recognizes the rationale behind the proposal. Ensuring that the Constitutional Committee can remain operational in the event of temporary vacancies or member unavailability is an important consideration for the long-term stability of Cardano’s governance system. At the same time, the minimum committee size is a structural safeguard within the constitutional framework, and adjustments to parameters that shape the functioning of governance institutions warrant careful consideration and broad participation.

At the time of casting this vote, participation among DReps is extremely low and the proposal appears unlikely to reach the required approval threshold before the voting deadline. In such circumstances, the resulting signal from the electorate does not provide a sufficiently representative view of the ecosystem’s position on the matter. RCADA therefore does not believe that casting a decisive vote meaningfully contributes to the outcome of the action at this stage.

This proposal has also highlighted a technical coordination issue within the current governance process. Multiple parameter update proposals have been submitted referencing the same previously enacted parameter action. Because parameter updates must reference the most recently enacted action of their type, this situation can create potential conflicts where the first successful proposal invalidates subsequent ones that reference an outdated predecessor. While this does not introduce risk to the network itself, it does demonstrate the need for clearer coordination and communication around governance actions with on-chain effects.

RCADA believes improvements to proposal coordination and governance workflow will help ensure that technically sound parameter updates can be evaluated on their merits without procedural complications or avoidable conflicts.

This vote is recorded **off-chain only**. At the time this rationale was prepared, the proposal had already transitioned to a non-ratifiable state within the governance interface and the GovTool interface no longer permitted additional vote submissions, despite the nominal voting deadline not yet having elapsed. As a result, RCADA was unable to register a vote through the on-chain voting interface and therefore records this position for transparency and archival purposes.

For these reasons, RCADA records an **ABSTAIN** position on this action.
