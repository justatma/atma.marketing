# The Ernest-Faulkner Engine

Part of [AtmaOS](/atma_os.html) · author branch. A new class of machine-driven editorial intelligence.

**Not AI writing and editing. Editorial judgment, from a machine with a human editor's mindset.**

Most AI writing tools rewrite first and justify later. Ernest-Faulkner does the opposite. It analyzes what a passage costs the reader, what the writer gains from that choice, argues for leaving it alone, and only recommends intervention when the evidence is strong enough.

*Ernest Hemingway and William Faulkner: compression and accumulation, in one conversation.*

## The four numbers

- **10 competing editorial forces.** Ernest-Faulkner judges 10 fundamental writing tensions: clarity vs. implication, simplicity vs. necessary complexity, restraint vs. emotional force, economy vs. resonance, and more. It doesn't apply style rules. It weighs tradeoffs.
- **15 ways writing can actually fail.** Not "bad grammar." Fifteen families of editorial failure covering meaning, logic, evidence, agency, structure, voice, rhythm, context, and integrity.
- **120 gold-standard editorial tests.** The first evaluation corpus contains 120 difficult cases designed to test judgment, including good writing that conventional AI editors would wrongly "fix."
- **30 context-reversal tests.** Same or nearly identical words, different context, different correct editorial decision.

---

# Part one: how it thinks

## 1. The problem
**Most AI writing tools are built to rewrite your words.** You give them a paragraph. They make it shorter, smoother, clearer, or more polished. That sounds useful. But the AI often starts writing the way it thinks good writing should sound.

What the rewrite does: it removes odd sentences; explains things that were meant to stay implied; shortens long sentences that were working; tones down anger; cleans up fragments; replaces unusual words with safer ones.

The result may be easier to read. It may also be less interesting, less precise, less human, and less like you.

**The idea it was built around:** the AI should have to prove that something is wrong before it earns the right to change it. That sounds simple. It changes almost everything.

## 2. The first question: it is not a rewriting engine
It does not begin by asking "how can I improve this sentence?" It begins by asking **"is there actually a problem here?"**

A long sentence is not automatically bad. A short sentence is not automatically good.

| | It can be a problem | It can also be the point |
|---|---|---|
| Repetition | It can be wasteful. | It can create rhythm, pressure, humor, or emotion. |
| Ambiguity | It can confuse the reader. | It can be exactly what makes a scene work. |
| Strong emotional language | It can be melodrama. | It can be completely justified. |
| A difficult sentence | It can be badly written. | It can carry a difficult idea that should not be made falsely simple. |

The engine has to tell the difference.

## 3. Cost and gain
**Every editorial choice has a cost and a gain.** Every writing choice asks something from the reader. But the same choice may produce something valuable.

| The choice | What it may cost | What it may give back |
|---|---|---|
| A long sentence | May require more memory. | May build pressure. |
| A metaphor | May require interpretation. | May explain an idea better than literal language. |
| A fragment | May interrupt the rhythm. | May create force. |
| A technical word | May slow a general reader down. | May be the only accurate word. |

Ernest-Faulkner does not ask whether a writing choice has a cost. Almost every good writing choice has one. It asks: **does the value of the choice justify the cost?** That is editorial judgment.

## 4. The case for no change: the engine argues against itself
Before it recommends a meaningful change, it must make the strongest case it can for leaving the passage alone.

- *Cost:* This sentence is long and takes more effort to read. *Case for leaving it:* But the repeated structure makes the argument easier to follow, and the length creates a strong buildup. **Verdict: I would leave it alone.**
- *Cost:* This phrase is ambiguous, *case for leaving it:* but both meanings appear intentional and useful. Clarifying it would make the sentence easier to understand and less interesting. **Verdict: Keep it.**

The engine does not win by finding more errors. It wins by making better decisions.

## 5. Two separate steps: observation and judgment
A normal style checker detects passive voice, then recommends active voice. The pattern is treated as a rule.

Ernest-Faulkner separates the steps. **Observation:** passive construction detected. **Judgment:** does the missing actor matter?
- "The samples were stored at −80°C." The person who put them in the freezer may not matter at all. Leave it alone.
- "The records were destroyed after the investigation began." The missing actor may matter a great deal. Now there may be a real agency problem.

The same surface feature can produce opposite editorial judgments. That is why the engine does not treat grammar patterns as rules.

## 6. Ten editorial tensions
It works through competing editorial forces. These are not sliders where the best answer is always somewhere in the middle.

compression ↔ accumulation · explicitness ↔ implication · precision ↔ productive ambiguity · speed ↔ immersion · simplicity ↔ necessary complexity · regularity ↔ disruption · restraint ↔ emotional force · linear progression ↔ associative movement · transparency ↔ textural richness · economy ↔ resonance

Sometimes the right sentence should be brutally short. Sometimes it should run for half a page. Sometimes the writer should explain the point clearly. Sometimes explaining it would kill it. Sometimes the language should disappear so the reader sees only the information. Sometimes the language itself is part of the experience.

The engine asks what the passage is trying to do, and judges the choice against that purpose.

## 7. Context
**Context can completely change the answer.** Consider one sentence: "Mistakes were made."
- In a corporate statement after misconduct: an **agency problem.** The sentence may hide responsibility.
- Spoken by a cowardly character in a novel ("Mistakes were made," Daniel said, staring at the floor): **good characterization.** Now the hidden responsibility may be the whole point.

The sentence did not change. The context did. The engine's 30 context-reversal tests check exactly this.

## 8. Voice
**It protects the writer from the AI.** AI is very good at producing language that sounds clean, balanced, professional, and reasonable. That is also how it can destroy a writer's voice.

- "They lied." → "Their statements may not have been fully accurate."
- "Ain't nobody told me nothing." → "No one told me anything."
- A strange, memorable sentence → a sentence that could have been written by anyone.

Ernest-Faulkner treats voice as something worth protecting. A cleaner sentence is not automatically a better sentence. A clearer sentence is not automatically better if the clarity destroys the intended experience. And a revision is never better if it becomes less true.

---

# Part two: how it is built
*The process, the safeguards, the rules, and the tests behind the engine. Ernest-Faulkner is in development: its test corpus already exists and is growing, and the final editorial intelligence is being built against it.*

## 9. The process
**Judgment and rewriting are separate jobs.** The judgment steps:
1. Observe the text. What is actually happening?
2. Identify the possible reader cost.
3. Identify the possible gain.
4. Make the strongest case for leaving it alone.
5. Decide whether there is really a problem.
6. Decide whether intervention is justified.
7. Define exactly what may be changed.

**The boundary.** Only then can a revision system touch the prose. That boundary keeps the AI from turning every editorial observation into a rewrite.

## 10. Revision checks
**Even a good revision can fail.** It fixes an unclear pronoun but changes who is responsible: fails. It makes the sentence clearer but removes a joke: fails. It shortens a paragraph but destroys a phrase that returns at the end of the chapter: fails.

Every revision is checked against what must survive: meaning, facts, agency, attribution, certainty, causality, scope, voice, rhythm, humor, emotional posture, ambiguity, character, motifs and callbacks.

The goal is not simply "did the sentence improve?" It is: **did we solve the identified problem without breaking anything that was already working?**

## 11. Silence
**The engine is allowed to say nothing.** If a sentence is unusual but working: no action. If the evidence is weak: no action. If the issue is merely preference: no action. If the engine cannot tell whether the writer intended something: ask a question. The engine is not trying to prove its value by constantly touching the prose.

## 12. Governed rules
**Its rules are governed, not hidden in prompts.** A typical editing prompt ("Act as an expert editor. Improve clarity, style, flow, and readability.") leaves editorial policy hidden inside the model.

Every Ernest-Faulkner rule has a name, a version, evidence requirements, exceptions, known false positives, successful counterexamples, a risk level, and limits on what it is allowed to change.

A rule cannot simply say "avoid repetition." It has to know the difference between useless repetition and a refrain, a rhythm, a legal requirement, a technical term, or deliberate emotional insistence. The rules can be tested. They can be challenged. They can be changed without silently changing the whole system.

## 13. The test corpus
**It has a test system built before the editor.** We are not building the editor first and then asking whether it seems smart. We are building the test system before the final editorial intelligence. A growing gold-standard corpus already contains cases such as:

| Good writing it must leave alone | Real problems it must catch |
|---|---|
| Repetition that is necessary | Repetition that is wasteful |
| Productive ambiguity that must survive | False precision that must be corrected |
| Strong anger that is justified | Strong anger that outruns the evidence |
| Associative prose that is coherent | Associative prose that has lost the thread |
| A long sentence that must not be shortened | A local sentence that works but becomes annoying when repeated across a document |
| A passive sentence that should stay passive | A revision that fixes one problem and creates a worse one |

The system is tested not only on whether it finds problems. It is tested on whether it leaves good writing alone.

## 14. The difference
**That changes what "better AI editing" means.** The normal path: better generation, better rewriting, better imitation of a human editor. Ernest-Faulkner: **better editorial judgment.** That is a much harder problem.

- A co-writer asks: What should we write?
- A rewriting tool asks: How can I make this sound better?
- A grammar tool asks: Does this follow standard rules?
- Ernest-Faulkner asks: What is this passage trying to accomplish? What does this choice cost? What does it gain? Is the tradeoff working? **And have I earned the right to interfere?**

That last question is what makes the engine fundamentally different.

---

## The burden of proof
The writer does not have to prove that a strange sentence deserves to survive. **The editor has to prove that changing it is justified.**

That is the Ernest-Faulkner Engine. Not AI writing and editing. Editorial judgment, from a machine with a human editor's mindset.

*AI can rewrite a sentence. Ernest-Faulkner decides when and how.*

---

[← atmaOS](/atma_os.html) · atma.marketing

Ernest-Faulkner is in development. The figures describe the engine's design and its first evaluation corpus, not audited results.
