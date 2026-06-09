---
title: "Update Plutus Cost Models"
gov_action_id: "gov_action1eqhnsdyf3exhp5mqt7sdjtl7xy69wqg8tvg854psns2jt72cra3qqrcnr8r"
type: "Parameter Update"
vote: "Yes"
vote_date: "2026-06-09"
expires: "2026-06-28"
status: "Committed"
constitution_version: "Cardano Blockchain Ecosystem Constitution v2.4"
tags: ["parameter-update", "plutus", "cost-models", "van-rossem", "protocol-version-11", "smart-contracts"]
links:
  adastat: "https://adastat.net/governances/c82f3834898e4d70d3605fa0d92ffe31345701075b107a54309c1525f9581f6200"
  govtool: ""
  forum: ""
  ipfs: ""
---

## Summary

RCADA votes **YES** on **Update Plutus Cost Models**.

This is a technical parameter update, not a Treasury withdrawal.

RCADA supports this action because it is a necessary and benchmarked update to Plutus cost models that prepares Cardano for new Plutus primitives after the van Rossem hard fork to Protocol Version 11. The proposal also improves consistency across Plutus V1, V2, and V3 and updates costs for some existing primitives based on benchmarking data.

Cost models are important because they determine how Plutus script execution is priced in CPU and memory terms. Without accurate cost models, new primitives cannot be safely or responsibly enabled on mainnet.

The proposal has been reviewed by Intersect’s Parameter Committee, confirmed by Intersect’s Technical Steering Committee, tested through equivalent changes on SanchoNet, Preview, and Preprod, and appears consistent with the applicable constitutional guardrails.

---

## Key Considerations

- This is a **Parameter Update**, not a Treasury withdrawal.
- The action updates Plutus cost models ahead of the van Rossem hard fork to **Protocol Version 11**.
- New primitives will only become available after the hard fork to Protocol Version 11.
- Some cost changes for existing primitives take effect immediately when this governance action is enacted.
- The update enables new Plutus primitives related to cryptography, list manipulation, array operations, and value/data manipulation.
- The update improves consistency across Plutus V1, V2, and V3.
- Cost settings are based on benchmarking data.
- Equivalent changes were enacted on SanchoNet, Preview, and Preprod before mainnet submission.
- No specific security concerns are identified in the metadata.
- Developers should be aware of the timing difference between immediate cost changes and post-hard-fork primitive availability.

---

## What this action does

This Parameter Update governance action updates the Plutus cost models to support new and existing Plutus primitives.

The proposal has three main objectives:

1. **Prepare for new Plutus primitives after Protocol Version 11**
   - Provides cost model settings for new primitives that become available after the van Rossem hard fork.

2. **Improve consistency across Plutus versions**
   - Makes Plutus primitives available across Plutus V1, V2, and V3 where previously some were limited to Plutus V3.

3. **Update costs for existing primitives**
   - Adjusts cost model settings for some existing primitives based on benchmarking data.

The new primitives are associated with the following CIPs:

- **CIP-0109:** Modular Exponentiation Built-in for Plutus Core
- **CIP-0132:** New Plutus Builtin `dropList`
- **CIP-0133:** Plutus support for Multi-Scalar Multiplication over BLS12-381
- **CIP-0138:** Plutus Core Builtin Type - `Array`
- **CIP-0153:** Plutus Core Builtin Type - MaryEraValue

Examples of newly enabled primitives include:

- `expModInteger`
- `dropList`
- `bls12_381_G1_multiScalarMul`
- `bls12_381_G2_multiScalarMul`
- `indexArray`
- `lengthOfArray`
- `listToArray`
- `insertCoin`
- `lookupCoin`
- `unionValue`
- `valueContains`
- `valueData`
- `unValueData`
- `scaleValue`

The proposal also changes costs for some existing primitives, including `equalsByteString` across Plutus V1, V2, and V3, and `divideInteger`, `modInteger`, `quotientInteger`, and `remainderInteger` in Plutus V3.

---

## Analysis Findings

### Constitutional / Guardrails Assessment

The relevant constitutional guardrails identified in the metadata are:

- **PCM-01:** Cost model values must be set by benchmarking on a reference architecture.
- **PCM-02:** The cost model must be updated if new primitives are introduced or a new Plutus language version is added.
- **PCM-03:** Cost model values should not be negative.

Assessment:

- ✔ The proposal states that cost model values were validated by the IOE Plutus Core developer team against the same reference machine and implementation used for existing mainnet Plutus cost model settings.
- ✔ The proposal is required because new Plutus primitives will be introduced following the upgrade to Protocol Version 11.
- ✔ The proposal states that none of the new cost model values are negative.
- ✔ The proposal identifies the relevant guardrails and explains consistency with each.
- ✔ The proposal includes benchmarking references.
- ✔ The proposal includes testnet deployment history.
- ✔ The proposal identifies no specific security concerns.
- ⚠ The guardrails are not automatically checkable by the guardrails script, so the assessment relies on the provided benchmarking, technical review, and committee process.

**Assessment:** Pass

---

### Process & Governance Quality

- ✔ The proposal was recommended by Intersect’s Parameter Committee.
- ✔ The proposal was confirmed by Intersect’s Technical Steering Committee.
- ✔ Equivalent changes were enacted on SanchoNet in March 2026.
- ✔ Equivalent changes were enacted on Preview in April 2026.
- ✔ Equivalent changes were enacted on Preprod in May 2026.
- ✔ The proposal provides a clear technical rationale.
- ✔ The proposal identifies immediate effects and post-hard-fork effects.
- ✔ This is a focused parameter update rather than a broad or bundled governance action.
- ⚠ Developers should be clearly informed that some existing primitive cost changes occur immediately, while new primitives only become available after Protocol Version 11.

**Assessment:** Strong

---

### Impact & Risk Analysis

- **Smart contract capability:** High
- **Developer experience:** Medium to High
- **Protocol readiness:** High
- **Treasury risk:** None
- **Governance complexity:** Low
- **Technical execution risk:** Low to Medium
- **Script cost-change risk:** Low to Medium

This action supports Cardano’s smart contract roadmap by enabling necessary cost model support for new primitives and improving consistency across Plutus versions. The main risk is technical calibration, but this is mitigated by benchmarking, committee review, and prior deployment on multiple testnets.

**Assessment:** Necessary technical enablement / low governance risk

---

## Ratings (Decision Support Only)

| Dimension | Score (1–5) |
|---|---:|
| Constitutional clarity | 5 |
| Governance quality | 5 |
| Technical readiness | 5 |
| Ecosystem value | 4 |
| Risk balance | 4 |
| **Overall score** | **🟢 92% — Strong YES for benchmarked Plutus cost model update** |

---

## RCADA Rationale

RCADA votes **YES** on **Update Plutus Cost Models**.

RCADA supports this parameter update because it is a necessary technical step to prepare Cardano for the new Plutus primitives that become available after the van Rossem hard fork to Protocol Version 11. The proposal also improves consistency by making Plutus primitives available across Plutus V1, V2, and V3, and it updates costs for some existing primitives based on benchmarking data.

This is not a Treasury withdrawal and does not fund a project or vendor. It is a technical parameter update intended to ensure that Plutus script execution is priced correctly and safely as the platform gains new capabilities. Cost models are important because they determine how much CPU and memory a script operation is expected to consume. Without accurate cost models, new primitives cannot be responsibly enabled on mainnet.

RCADA views this as important developer and infrastructure maintenance. The new primitives support areas such as cryptography, list manipulation, array operations, and value/data manipulation. These improvements can make smart contracts more capable, efficient, and predictable, especially for more advanced applications and future interoperability use cases.

The process behind this update appears strong. The proposal states that the changes were recommended by Intersect’s Parameter Committee, confirmed by Intersect’s Technical Steering Committee, and tested through equivalent changes on SanchoNet, Preview, and Preprod before being submitted for mainnet approval.

RCADA also notes that the proposal directly addresses the relevant constitutional guardrails. The metadata states that cost model values were benchmarked on the reference architecture, that the update is required because new Plutus primitives are being introduced, and that none of the new cost model values are negative.

The main caution is timing and communication. The new primitives will only become available after the Protocol Version 11 hard fork, while some changes to existing primitives take effect immediately when this parameter update is enacted. Developers should be aware of that distinction and should review whether any existing scripts are affected by updated costs for current primitives.

Overall, this appears to be a well-scoped, benchmarked, reviewed, and testnet-deployed technical update. It supports Cardano’s smart contract roadmap without creating Treasury spend or broad governance risk.

For these reasons, RCADA votes **YES**.
