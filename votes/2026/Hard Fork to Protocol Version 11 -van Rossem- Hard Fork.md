---
title: "van Rossem Hard Fork — Protocol Version 11.0"
gov_action_id: "gov_action1lh2x3kjucjkggvwu6l3txggkvmrnhs3flpv8j35lvlcan4gax3xsq3cxfjc"
type: "Hard Fork Initiation"
vote: "Yes"
vote_date: "2026-06-23"
expires: "2026-07-18"
status: "Committed"
constitution_version: "Cardano Blockchain Ecosystem Constitution v2.4"
tags:
  - hard-fork
  - protocol-version-11
  - van-rossem
  - plutus
  - ledger
  - node
  - spo-readiness
links:
  adastat: "https://adastat.net/governances/fdd468da5cc4ac8431dcd7e2b3211666c73bc229f85879469f67f1d9d51d344d00"
  govtool: ""
  forum: ""
  ipfs: ""
---

## Summary

RCADA votes **YES** on the **van Rossem Hard Fork — Protocol Version 11.0**.

The upgrade delivers focused improvements to Plutus, ledger consistency, node diagnostics, and stake-pool security without changing the Conway era or transaction shape. RCADA has upgraded its Mainnet infrastructure and participated in the corresponding Preview and Preprod testnet upgrades. Support remains conditional on confirmation of the required 85% active-stake readiness threshold before ratification.

---

## Key Considerations

- Upgrades Cardano Mainnet from Protocol Version **10.0** to **11.0**.
- Remains within the Conway era; no era transition occurs.
- Does not change transaction shape.
- Introduces new Plutus primitives through CIP-0109, CIP-0132, CIP-0133, CIP-0138, and CIP-0153.
- Makes supported built-ins consistently available across Plutus V1, V2, and V3.
- Introduces native case expressions for `Bool`, `Integer`, and `Data`.
- Improves ledger consistency, governance correctness, operator diagnostics, and VRF key security.
- Complements the previously supported Plutus Cost Models parameter update.
- RCADA has upgraded its Mainnet stake-pool infrastructure to a compatible node version.
- RCADA has also participated in the Preview and Preprod testnet upgrade processes.
- At least **85% of stake pools by active stake** should be running a compatible node before ratification.
- The upgrade has been recommended by Intersect’s Hard Fork Working Group and endorsed by its Technical Steering Committee.
- Reversion would require Cardano’s disaster-recovery process, making readiness and testing especially important.

---

## What this action does

This governance action initiates an intra-era hard fork that upgrades Cardano Mainnet to **Protocol Version 11.0**, known as the **van Rossem hard fork**.

The ledger remains in the Conway era. The action does not introduce a new era or alter the general transaction shape.

The upgrade activates three broad groups of improvements.

### Plutus performance and capability

Protocol Version 11 introduces new Plutus primitives defined through five Cardano Improvement Proposals:

- **CIP-0109:** modular exponentiation;
- **CIP-0132:** efficient `dropList` functionality;
- **CIP-0133:** multi-scalar multiplication over BLS12-381;
- **CIP-0138:** a constant-time Array built-in type;
- **CIP-0153:** native multi-asset `Value` handling.

It also makes supported built-in functions consistently available across Plutus V1, V2, and V3.

Untyped Plutus Core gains native case expressions for `Bool`, `Integer`, and `Data`, reducing the cost and complexity of common branching and data-matching operations.

### Ledger consistency and governance correctness

The upgrade:

- enforces VRF key-hash uniqueness at ledger level;
- revises reference-input rules affecting Plutus V1 and V2 scripts;
- promotes Constitutional Committee voting restrictions from a mempool-only check to a ledger predicate;
- improves the non-matching withdrawals predicate;
- provides clearer and more deterministic validation behaviour.

### Node diagnostics and security

Cardano Node gains improved reporting for protocol-parameter view hash mismatches, helping SPOs and infrastructure operators diagnose configuration issues more effectively.

The ledger-level VRF key uniqueness rule also strengthens stake-pool operational security by preventing duplicate VRF key registration or use.

---

## Analysis Findings

### Constitutional / Guardrails Assessment

The relevant hard-fork guardrails are:

- **HARDFORK-01:** The proposed major version must be equal to or one greater than the immediately preceding version. If increased, the minor version must be zero.
- **HARDFORK-02:** The minor version must not be lower than the preceding minor version.
- **HARDFORK-03:** At least one component of the protocol version must change.
- **HARDFORK-04:** At least 85% of stake pools by active stake should have upgraded to a compatible node version.
- **HARDFORK-05:** Any new updatable protocol parameters must be added to the constitutional appendix with suitable guardrails.
- **HARDFORK-06:** Settings for new protocol parameters must be included in the relevant Genesis file.
- **HARDFORK-07:** Deprecated protocol parameters must be identified.
- **HARDFORK-08:** New Plutus versions must have version-specific cost models covering all available primitives.

Assessment:

- ✔ The version changes from 10.0 to 11.0.
- ✔ The new major version is one greater than the preceding version.
- ✔ The minor version remains 0.
- ✔ No new protocol parameters are introduced.
- ✔ No protocol parameters are deprecated.
- ✔ No new Plutus language version is introduced.
- ✔ Companion cost-model entries cover the new primitives across the affected Plutus versions.
- ⚠ The 85% active-stake readiness requirement must be verified before ratification.
- ⚠ Hard-fork enactment represents a permanent ledger-rule change and requires strong operational readiness.

**Assessment:** Pass, conditional on verified SPO readiness

---

### Process & Governance Quality

Positive factors:

- ✔ Reviewed and recommended by Intersect’s Hard Fork Working Group.
- ✔ Endorsed by Intersect’s Technical Steering Committee.
- ✔ Supported by specification and implementation conformance testing.
- ✔ Security review was conducted for relevant Plutus cryptographic primitives and execution costs.
- ✔ Performance testing reports no regressions in standard node benchmarks.
- ✔ Companion Plutus cost-model changes were handled through a separate parameter action.
- ✔ The action explains the readiness requirement and the limited reversion path.
- ✔ The scope is technically focused and avoids an era transition.

RCADA has also gained direct operational experience with the upgrade path. As an SPO, RCADA has upgraded its Mainnet infrastructure and participated in both the Preview and Preprod testnet upgrades.

That experience supports the view that the operational transition is manageable, while not replacing the requirement for broad network-wide readiness.

**Assessment:** Strong

---

### Impact & Risk Analysis

Potential benefits:

- Improved Plutus script performance.
- Reduced script execution overhead.
- Cleaner and more expressive smart-contract logic.
- Better support for pairing-based zero-knowledge cryptography.
- Efficient on-chain modular exponentiation.
- Constant-time indexed data access.
- Improved native multi-asset handling.
- Greater capability for existing Plutus V1 and V2 applications.
- More consistent ledger validation.
- Improved Constitutional Committee voting-rule enforcement.
- Stronger VRF key security.
- Better node-operator diagnostics.
- Reduced ecosystem upgrade burden compared with an era transition.

Risks and considerations:

- Hard-fork changes are effectively permanent after enactment.
- All ecosystem infrastructure must remain compatible with Protocol Version 11.
- The new primitives depend on correct cost-model activation.
- Wallets, exchanges, indexers, SDKs, explorers, and infrastructure providers should continue validating compatibility.
- The network should not ratify the action before the 85% active-stake readiness condition is confirmed.
- Post-activation monitoring remains important despite successful testnet and benchmark results.

**Assessment:** High ecosystem value / manageable risk with readiness verification

---

## Ratings (Decision Support Only)

| Dimension | Score (1–5) |
|---|---:|
| Constitutional clarity | 5 |
| Technical quality | 5 |
| Testing and assurance | 4 |
| Ecosystem value | 5 |
| Operational readiness | 4 |
| Risk balance | 4 |
| **Overall score** | **🟢 90% — YES; strong technical upgrade subject to readiness confirmation** |

---

## RCADA Rationale

RCADA votes **YES** on the **van Rossem Hard Fork — Protocol Version 11.0**.

This is a focused intra-era upgrade that strengthens Plutus capabilities, ledger consistency, node diagnostics, and stake-pool security while keeping Cardano in the Conway era and preserving the existing transaction shape.

RCADA supports the upgrade because it delivers practical improvements for builders and operators. The new Plutus primitives, unified built-in availability across Plutus V1, V2, and V3, and native case expressions should improve script performance, reduce execution costs, and expand what developers can build on Cardano.

The ledger changes also improve consistency and correctness through stronger VRF key-hash rules, revised reference-input handling, deterministic Constitutional Committee voting restrictions, clearer withdrawal validation, and improved protocol-parameter mismatch reporting.

This action is consistent with RCADA’s earlier support for the companion **Update Plutus Cost Models** action. That parameter update provides the cost-model entries required to activate the new primitives safely across the supported Plutus versions. Supporting this hard fork therefore completes a coordinated set of upgrades rather than approving an isolated change.

RCADA is voting from both a DRep and stake-pool operator perspective. As an SPO, RCADA has already upgraded its Mainnet infrastructure to a Protocol Version 11-compatible node and has participated in the corresponding Preview and Preprod testnet upgrades. That operational experience gives us additional confidence that the upgrade path is manageable and that the changes have been exercised across the expected testing environments.

The most important constitutional condition remains **HARDFORK-04**. At least 85% of stake pools by active stake should be running a compatible node version before ratification. RCADA’s support does not replace that network-wide readiness requirement. The Constitutional Committee and the relevant readiness-reporting process should verify that the threshold has been met before enactment proceeds.

RCADA also recognises that a hard fork is a permanent ledger-rule change and cannot be treated casually. The reported testing, security review, conformance work, performance checks, Hard Fork Working Group recommendation, and Technical Steering Committee endorsement are therefore important parts of our support.

For these reasons, RCADA votes **YES**. The van Rossem hard fork is a technically focused and strategically useful upgrade that improves Cardano’s smart-contract platform, ledger correctness, node operation, and long-term developer capabilities, provided the required SPO readiness threshold is confirmed before ratification.
