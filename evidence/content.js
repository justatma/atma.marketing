const PORTAL_CASES = {
  "marketing": {
    "label": "Bayesian Analytical Engine",
    "title": "Campaign decisions, with reasons.",
    "claim": "A live campaign is flowing through the engine. It turns campaign observations into decisions about where to allocate budget, what to keep testing, and when to wait.",
    "problem": "A dashboard can show a winner before enough conversions have arrived to justify moving money. The real decision is whether the apparent difference is useful, affordable, and likely to last.",
    "input": "Campaign observations, conversion timing, commercial assumptions, and the budget available for learning.",
    "process": "The decision layer estimates uncertainty, accounts for delayed conversions, checks whether an action is feasible, and weighs the value of more evidence against its cost.",
    "output": "An allocation or stopping recommendation with the conditions and reasoning behind it. The same inputs can be traced through the decision rules.",
    "why": "A CMO can discuss why a recommendation follows from the evidence, including when the sensible action is to keep learning. Statistical reasoning becomes part of the campaign workflow.",
    "evidence": [
      "Current use: Atma confirms that an active campaign is flowing through the engine. Client records remain private.",
      "The inspected implementation includes conversion-maturity checks, economic inputs, allocation constraints, and stopping decisions.",
      "Automated examples exercise these decision rules; exact commands and results are available in the technical record."
    ],
    "anchors": [
      "src/bayesian_marketing/decision/stopping.py",
      "src/bayesian_marketing/decision/allocation.py",
      "tests/unit/p9/test_p9_units.py"
    ],
    "questions": [
      "Show one campaign observation and the decision it produced.",
      "What new evidence would make you reverse that recommendation?"
    ],
    "technical": "The local P9 run passed 18 tests on 19 November 2026. Current campaign use is an owner-provided operational statement, recorded on the same date.",
    "links": []
  },
  "council": {
    "label": "Atma Council",
    "title": "Five models. A working think tank.",
    "claim": "A think tank with five frontier-model seats: Claude, GPT, Gemini, DeepSeek, and Mistral. It brings different readings of a problem into a structured process of challenge and synthesis.",
    "problem": "A difficult decision often contains two legitimate concerns that pull in opposite directions. Repeating the most confident answer loses the disagreement that could reveal a better solution.",
    "input": "A decision, a design, or a genuine conflict, with the relevant context and constraints.",
    "process": "Council gathers independent analyses before synthesis. Socratic dialogue supports exploration. Its separate dialectical protocol builds strong opposing positions, maps their assumptions, generates alternatives, and subjects the proposed resolution to critics.",
    "output": "A reasoned synthesis: the proposed solution, the concerns it preserves, the assumptions it changes, and the tradeoffs that remain. The record retains how the answer developed.",
    "why": "Founders can use it to examine strategic choices and design decisions from multiple perspectives. The dialectical method seeks a new way to organize the problem when the opposing concerns warrant one.",
    "evidence": [
      "Five model integrations are present in the current Council configuration.",
      "An executable seven-stage dialectical protocol and five completed research cases retain the positions, critiques, candidates, and resolutions.",
      "The launch-governance example shows a concrete change from fixed activity milestones to dated decisions supported by evidence."
    ],
    "anchors": [
      "config.py",
      "agents/agent_base.py",
      "council.py",
      "dialectics/protocol.py",
      "documents/dialectics_vc_first_five_scorecard.md"
    ],
    "questions": [
      "Which disagreement changed the eventual solution?",
      "What did a critic find that the first synthesis missed?"
    ],
    "technical": "The five archived dialectical experiments used one fixed model to examine the method. They are distinct from the five-model Council roster. Council’s local software suite passed 176 tests on 19 November 2026.",
    "links": [
      {
        "label": "Read the recorded worked example",
        "url": "council-example.html"
      }
    ]
  },
  "core": {
    "label": "AtmaOS Core",
    "title": "The work continues across sessions.",
    "claim": "A persistent, model-independent foundation for specialist AI: shared records, memory, context, permissions, and action history live outside any one model conversation.",
    "problem": "Marketing work spans clients, projects, revisions, and months of decisions. Each new conversation needs the relevant history, the current decision, and clear rules about what it may read or do.",
    "input": "Source material, project context, recorded decisions, specialist roles, and permissions.",
    "process": "AtmaOS stores canonical records in PostgreSQL, selects permitted context for a task, and records execution as durable events. Corrections create new records. Memory curation checks the evidence and authority behind proposed additions.",
    "output": "A specialist can work from selected, source-linked context while the system retains the record of what was used, what changed, and what action occurred.",
    "why": "The organization’s working knowledge can carry forward when a session ends or a model changes. A reviewer can trace an answer to its sources and examine the rules governing its use.",
    "evidence": [
      "A concrete control: a task allowed to observe cannot execute a tool. The authority tests attempt the forbidden action and expect the policy engine to refuse it.",
      "GitHub records a successful test workflow on 14 November 2026, including database-backed test jobs on Python 3.12 and 3.13.",
      "Current source and the historical test run are identified separately in the downloadable evidence record."
    ],
    "evidence_excerpt": {
      "after": 0,
      "src": "images/01-authority-test.png",
      "width": 2520,
      "height": 900,
      "alt": "Sixteen lines of Python test code from tests/scope/test_authority.py.",
      "caption": "Excerpt from the authority tests. A task allowed only to observe asks to propose and then to run a tool. The test requires the policy engine to refuse both under rule 10.6."
    },
    "anchors": [
      "src/atmaos/core/context/compiler.py",
      "src/atmaos/core/memory/evidence.py",
      "src/atmaos/core/policy/engine.py",
      "src/atmaos/core/runtime/durability.py",
      "tests/scope/test_authority.py"
    ],
    "questions": [
      "Show how a corrected decision becomes current while the earlier version remains traceable.",
      "Show which source passages a specialist received and why it was allowed to use them."
    ],
    "technical": "GitHub run 43620393431 succeeded at commit 6625d4cd9b35406d825dba4814ca5dcbcf7c9162 on 14 November 2026. All eight test-matrix jobs succeeded. The workflow is currently manually triggered; this is a dated result, not a claim about the latest commit. New source inspection is recorded separately.",
    "links": []
  },
  "boswell": {
    "label": "Boswell Engine",
    "title": "From language to usable intelligence.",
    "claim": "A semantic and linguistic cognitive compiler: it turns a person’s documented language into a structured, source-linked account of how they express ideas, explain causes, and repeat patterns across contexts.",
    "problem": "A list of job titles and keywords says little about how someone reasons or what makes communication relevant to them. A useful interpretation needs to survive comparison with the actual record.",
    "input": "Authorized source material: published writing, interviews, talks, and other attributable language.",
    "process": "Boswell separates linguistic expression, stated causal reasoning, and patterns across independent contexts. Its compiler checks quoted evidence against exact source locations, tests alternative explanations, and routes ambiguous findings for review.",
    "output": "A linked collection of supported findings and a readable report. Those findings can inform buyer research, conversation preparation, or a specialist’s body of knowledge.",
    "why": "A marketer can inspect the connection between what a person has actually said and the communication approach chosen for them. The research becomes reusable, structured intelligence.",
    "evidence": [
      "The compiler produces distinct linguistic, semantic, and pattern reports from validated findings.",
      "Its register instrument examines when a speaker changes style and tests whether topic, editing, translation, or another factor explains the difference.",
      "A published B2B study compares the same writer with and without Boswell’s research. Two AI judges preferred the supported version in six assessments across three prospects."
    ],
    "anchors": [
      "run_compiler.py",
      "compiler/engine.py",
      "compiler/contracts.py",
      "compiler/instruments/s4_register_architecture.py",
      "compiler/instruments/s5_causal_statements.py",
      "compiler/instruments/s6_independent_recurrence.py"
    ],
    "questions": [
      "Trace one finding back to the exact words that support it.",
      "How did the research change the communication strategy?"
    ],
    "technical": "The public comparison is an internal, AI-judged B2B writing study. It assesses those outputs, not buyer response. The inspected semantic demonstration instrument identifies explicit causal statements; the compiler records the instrument and scope supporting each finding.",
    "links": [
      {
        "label": "Read the public comparison",
        "url": "https://boswell.atma.marketing/white-paper.html"
      },
      {
        "label": "Explore Boswell",
        "url": "https://boswell.atma.marketing/"
      }
    ]
  }
};
const EVIDENCE_STORIES = {
  "council": {
    "title": "See what the disagreement produced.",
    "type": "Recorded research",
    "summary": "A board wants dated commitments. A growth lead needs room to learn. The recorded experiment changes the commitment from completing tactics to reaching evidence-backed decisions.",
    "meaning": "You can inspect the original tension, the proposed arrangement, and what the critics changed.",
    "case": "council",
    "link": {
      "label": "Read the worked example",
      "url": "council-example.html"
    }
  },
  "bayesian": {
    "title": "Follow campaign data into a decision.",
    "type": "Live campaign use",
    "summary": "The engine weighs conversion delays, uncertainty, economics, and the cost of more testing before recommending an action.",
    "meaning": "The useful review is one observation, the recommendation it produced, and the reason. Current live use is confirmed by Atma; client records stay private.",
    "case": "marketing"
  },
  "atmaos": {
    "title": "Follow a decision through time.",
    "type": "Implementation + GitHub history",
    "summary": "Sources, decisions, permissions, and execution history persist beyond a chat. Context is selected from that record for each task.",
    "meaning": "Inspect how a correction is retained, how allowed material reaches a specialist, and how completed work is recorded.",
    "case": "core"
  },
  "boswell": {
    "title": "Compare the same writer, with better intelligence.",
    "type": "Public worked comparison",
    "summary": "Boswell compiles language into sourced findings about expression, reasoning, and recurring patterns. Its public study shows how research changed the resulting outreach.",
    "meaning": "Read the before-and-after example and the method. The comparison used the same writer, with two AI judges and three prospects.",
    "case": "boswell",
    "link": {
      "label": "Read the public study",
      "url": "https://boswell.atma.marketing/white-paper.html"
    }
  },
  "edge_hunter": {
    "title": "Check the rule behind the opportunity.",
    "type": "Implementation + automated checks",
    "summary": "Edge Hunter examines the source rules behind an apparent market opportunity and keeps the verification trace.",
    "meaning": "The practical question is whether the underlying rules support the apparent comparison. Its verifier checks exercise that logic."
  },
  "project_management": {
    "title": "Keep the evidence with the work.",
    "type": "Implementation + automated checks",
    "summary": "The project management system connects objectives, dependencies, source versions, and evidence records.",
    "meaning": "A reviewer can see what a task rests on and what supports its completion. This portal uses that evidence workflow."
  }
};
