# Compliance Engine

Built by [Growth Bastards](https://growthbastards.com/). Part of [AtmaOS](/atma_os.html) · The Agentic Agency.

**Marketing copy, pre-cleared.**

## Every word, read the way a regulator reads it.

A two-engine review pipeline that checks marketing copy against your regulatory perimeter and writes a tamper-evident record of what it found. It catches the implied guarantee with no trigger word, the number nobody can source, and the disclosure that is technically present but buried under a hero image.

[Request a walkthrough](mailto:atma@growthbastards.com?subject=Compliance%20Engine%20walkthrough)

---

## 1. One scan, annotated

**Five sentences. Five different problems.** A real scan of a landing-page hero, as the engine returns it. Every flag says which engine raised it and why.

Draft (landing-page hero): "Lock in [1] growth with the Horizon Plan, the smartest way to guarantee [2] your family's future. Our members have earned 12% a year [3] since launch, and unlike insurance [4], there are no medical questions. Enrollment closes Friday. Don't be left behind. [5]"

1. **Implied guarantee** (Engine 2, semantic). No prohibited word is present. "Lock in" promises a fixed outcome the product cannot deliver.
2. **Prohibited absolute term** (Engine 1, rule GT-07). "Guarantee" matched deterministically. Same result on the same text, every time.
3. **Unsupported figure** (numeric registry). 12% does not appear in the governed values. The performance claim is also unqualified.
4. **False positive suppressed** (Engine 2 over Engine 1). Rule IN-02 flagged "insurance." The context is a disclaimer of insurance status. Rationale logged.
5. **Fear-based urgency** (Engine 2, semantic). Deadline pressure paired with loss framing. Flagged for rewrite.

**Required disclosure, injected** (channel: web, audience: retail): "Past performance does not guarantee future results. Investing involves risk, including the possible loss of principal. See the governing documents for fees and terms."

Reviewer: J. Alvarez, Marketing. Legend: stopped, unsupported, suppressed. SHA-256 9f2c…e41a. Ledger row sealed.

## 2. Why it was built this way

**Most compliance tools find words. Regulators read meaning.** A keyword filter catches "guaranteed" and misses "lock in." A language model catches "lock in" and, left alone, hallucinates a rule that does not exist. This engine runs both, lets each correct the other, and records every decision so an examiner can see exactly why a sentence was cleared or stopped.

- **The floor: deterministic first.** Regular expressions over a loaded Regulatory Requirements Index return the same verdict on the same text in milliseconds. The part of the review that never has an opinion and never has a bad day.
- **The judgment: semantic second.** A Claude model reads what no pattern can: the guarantee with no trigger word, the performance claim with no qualifier, the urgency built from fear. It also filters the first engine, suppressing false positives and logging why.
- **The record: one verdict, sealed.** Both engines resolve into a single reconciled report. Every scan writes to an immutable ledger hashed against the original file, stamped with a named reviewer. No scan is anonymous. No row can be edited after the fact.

Flow: copy in → engine 1 (rules) → engine 2 (meaning) → one sealed report.

> The machine never changes a rule on its own. A human moderator signs every one.

## 3. Seventeen capabilities, four layers

**What the engine does, in the order a document meets it.**

### Layer 1: Ingestion (4)
- **Multi-modal intake.** Pasted text, PDF, Word, PNG and JPG. Files are extracted to text; PDFs and images are also rendered as pictures for a visual pass.
- **Visual context assessment.** For images and rendered pages the model assesses disclosure prominence, font size and layout hierarchy. It catches the footnote that is present and unreadable.
- **Guarded URL fetcher.** Paste a live URL. Fetches run behind SSRF protection so the engine cannot be pointed at your own internal infrastructure.
- **Input size guard.** Oversized submissions get a soft warning to split into sections. A document never fails silently for being too long.

### Layer 2: Scanning and reasoning (6)
- **Deterministic engine (Engine 1).** Pattern rules over the loaded index. Fast, repeatable, auditable. The Savvly deployment shipped with 68 rules; the index grows through the governance layer.
- **Semantic engine (Engine 2).** A Claude model reads for implied guarantees, unqualified performance claims and fear-based urgency, none of which a pattern can catch.
- **Dual architecture, single output.** Both engines merge into one reconciled report, with nothing counted twice.
- **Intelligent suppression.** Engine 2 filters Engine 1. When a rule fires on "insurance" inside "unlike insurance," the finding is suppressed and the exact rationale is written down.
- **Numeric registry validation.** Every number in the copy is checked against your authoritative values, drawn from your governing documents. Engine 1 checks stated figures exactly; Engine 2 catches a number written into prose that the registry does not support.
- **Context-aware disclosure injector.** Reads product type, distribution channel, audience and any special-status flags, then inserts the exact boilerplate that piece is required to carry.

### Layer 3: Learning and governance (3)
- **Feedback and aggregation.** Reviewers mark findings right, wrong or missed in the interface. Corrected examples accumulate across reviewers, not just within one.
- **AI-assisted rule authoring.** When a corrected pattern crosses a configurable threshold across enough different reviewers, a human moderator opens a scoped session that drafts a new deterministic rule.
- **Human-gated, validated commits.** Before a drafted rule can ship, the system confirms it compiles, conflicts with no governed number, and catches the examples that prompted it. Only the moderator can accept. Every acceptance, rejection and reversal is recorded.

### Layer 4: Audit, identity and reporting (4)
- **Tamper-evident ledger.** Every scan writes to an immutable Postgres ledger sealed with a SHA-256 hash of the original file. A database trigger blocks any later change to the row. Hashing has only ever been extended, never replaced, so older records stay verifiable.
- **Coverage-gap transparency.** If the semantic layer cannot finish within its deadline, the scan completes on the deterministic layer and the record names precisely which sections were not semantically reviewed.
- **PDF compliance reports.** A branded report from any scan, formatted for an examiner's file rather than a dashboard.
- **Approved-users identity layer.** Access control backed by a reviewed roster. Every user selects a pre-approved name and title before scanning, and that identity is stamped into the audit record.

## 4. Fitting it to your regime

**Three things are yours. Everything else is already built.** The engine does not know your regulator. It knows how to read against one. Adapting it to a new perimeter means supplying three inputs and leaving the pipeline alone.

1. **The rule index.** A file of deterministic patterns, each tied to a citation in your regime. It is what Engine 1 reads. For example: a fund (SEC Marketing Rule, ERISA), a broker-dealer (FINRA 2210), a consumer brand (FTC endorsement guides).
2. **The numeric registry.** Your authoritative figures, taken from whatever document governs you (a prospectus, a rate sheet, a product label or policy). Any number the registry cannot support gets flagged, whether typed as a figure or written out in a sentence.
3. **The disclosure map.** For each combination of product, channel, audience and status flag, the exact boilerplate the copy must carry. The injector reads the context and inserts it.

**The pipeline does not change:** the two engines, the suppression logic, the feedback loop, moderated rule authoring, the sealed ledger, the reporting.

**Ledger row (illustrative, scan 0419):** scan_id 0419 · submitted_by J. Alvarez, Marketing (approved roster) · source_hash sha256:9f2c7b…e41a · modality docx → text + rendered pages · engine_1 complete, 3 findings, 1 suppressed · engine_2 complete, 3 findings, 1 suppression rationale · coverage 100%, no sections skipped · disclosures 1 injected (web / retail / non-ERISA) · row_mutable false (trigger: block_update) · report PDF generated, 2 pp. The real row holds the full finding set, every suppression rationale, and the reviewer's later feedback.

## 5. Already built, already running

**We have done this. Here is one that works.** We built this engine for **Savvly**, an SEC-registered closed-end longevity fund. It is in use there today, reading their marketing copy against the SEC Marketing Rule, ERISA, their prospectus and their fee disclosures before anything ships.

*The Savvly Compliance Engine one-sheet (image on the page): marketing copy checked against SEC 206(4)-1 (marketing rule), Rule 204-2 (books and records), prospectus (fund-level), principal risks disclosure, conflicts and fees (Form ADV), and ERISA (29 U.S.C. ch. 18).*

## The engine in five numbers

- **2** engines, one verdict
- **17** capabilities, four layers
- **5** input modalities
- **30–90 s** first full scan
- **SHA-256** per-scan seal

## The walkthrough

**Bring us the ad copy you are worried about.** We run your own marketing material through the engine, live, with your rules loaded. You see what it catches, what it suppresses, and the ledger row it leaves behind. Thirty minutes, no slides.

[Request a walkthrough](mailto:atma@growthbastards.com?subject=Compliance%20Engine%20walkthrough) · [atma@growthbastards.com](mailto:atma@growthbastards.com)

---

Compliance Engine · built by Growth Bastards, part of AtmaOS. [← AtmaOS · the agentic agency](/atma_os.html). Educational support for review. Not legal advice. Your counsel signs off; the engine shows them why.
