# AtmaOS

**Twenty years of knowledge. One expanding intelligence.**

AtmaOS was born because, while AI could help me edit a page I wrote, it couldn't reliably remember the thousands of pages I wrote prior.

[Or see it as one picture →](/atma_os_architecture.html)

Part one, the story: sections 1–5. Part two, under the hood: 6–11. The vision: 12.

---

# Part one: the story

## 1. The lifetime of work
**It began with twenty years of work.** I have spent more than 20 years writing books, developing ideas, studying human behavior, and working in marketing. Over that time I built an enormous collection of writing: thousands of pages across books, manuscripts, research, notes, and articles.

- **Startup Genius:** my first published book, on how founders tap their own entrepreneurial genius
- **Zero to a Million:** my new marketing book, on the science behind modern marketing
- **American Face Reading:** a four-volume work
- **The Power of Nothing:** modern philosophy
- **An Inadvertent Racist:** modern culture
- **atma.blog:** ongoing writing on politics, psychology, and philosophy
- **Autobiography:** one of my largest upcoming projects

The problem was never a shortage of ideas. It was how to manage, connect, develop, and improve so much work.

## 2. The AI limitation
**A large context window is not a memory.** AI gave me powerful new ways to research, write, edit, and create. But I ran into a major limit. I work directly with the APIs of different AI models through the terminal. They can read and analyze large amounts of text, but each new request does not automatically carry the full history of everything I have written and everything we have done before.

- An AI could help edit one chapter, yet know nothing about a related idea in another book.
- It could suggest a change without knowing why I had rejected a similar change months earlier.
- It could help design or market one book without understanding how that book fits into the rest of my work.
- Switching to another AI model could mean rebuilding that context all over again.

I needed AI that could work with my entire body of writing, not just the document in front of it.

## 3. The original invention
**So I built a permanent home for the work.** AtmaOS was designed to become a permanent home for my writing and the knowledge behind it, with its own database, file history, search tools, memory system, and rules for handling information. Instead of depending on one AI model to remember everything, AtmaOS keeps the records and gives each model the information it needs.

One AI model, another model, a future model: AtmaOS keeps the records, the same writing, research, versions, and editorial history, whichever model is doing the work. It remembers what was written, what changed, and why.

Built to: understand thousands of pages of work; find connections between ideas; support research; track manuscript versions; give serious editorial help across many books.

It also had to support the wider work of being an author: developing books, preparing them for publication, creating designs, and planning their marketing. That meant building something more lasting than an AI chat.

## 4. The expansion
**One foundation. Two ways to put it to work.** As the architecture developed, I realized the same system could do more. If AtmaOS could preserve my knowledge and help me work across decades of writing, it could also put my marketing experience to work through a team of specialized AI agents. That led to a second branch.

- **The author branch.** Where AtmaOS began. It focuses on my books, research, ideas, and editorial work: developing my thinking, finding connections across decades of writing, and improving drafts without losing my voice. Its intelligence for specialized literary judgment is [Ernest-Faulkner](/ernest-faulkner).
- **The agency branch.** Uses the same shared foundation to support AI product managers, designers, copywriters, developers, advertising experts, and analysts. They draw on approved knowledge, work together on projects, and build a lasting record of their decisions and results. Not copies of me: they bring skills of their own, can question my ideas, and add new insights.

**One brain:** the knowledge and experience that first inspired atmaOS, shared by both branches. The agency is a major extension of the vision, not its origin.

[See the whole architecture at a glance →](/atma_os_architecture.html): both branches, the fourteen, and the engines in one picture.

## 5. The larger vision
**An extension of my life's work. Not a copy of my mind.** AtmaOS is a developing digital extension of my intellectual and professional life. It is designed to preserve more than 20 years of writing and experience, make that knowledge available to AI, and support new work without losing the history behind it.

Not just a library. Not just a chatbot. Not simply a team of AI agents. It is an organized, searchable, lasting representation of the knowledge, the methods, the writing, and the decisions I have documented.

Real-world experience helps the system grow. AI expands what I can do with it. My knowledge is the foundation. It continues to develop through new work, recorded decisions, and tested lessons.

---

# Part two: under the hood
*What it took to solve the original problem. Items marked planned are designed but not yet running software.* [See the architecture at a glance →](/atma_os_architecture.html)

## 6. What the core does
**The core: twelve jobs, one foundation.** The shared core keeps the records, finds the right knowledge, enforces the rules, and connects the AI models that do the thinking. *(Planned areas of responsibility, not finished modules.)*

1. **Main database:** keeps the official record of facts, projects, decisions, and history
2. **File storage and versions:** preserves source files and older versions; a new version never erases an old one
3. **Evidence tracking:** records where every piece of information came from
4. **Long-term memory:** keeps useful knowledge beyond one conversation
5. **Search:** finds the right facts, passages, and past work, by exact words and by meaning
6. **Permission rules:** controls who can see and use information
7. **Context compiler:** selects what an AI expert needs for a task
8. **Model connections:** lets different AI models work with the system; the model can change, the memory stays
9. **Agent runtime:** runs work under a named agent and role
10. **Tool connections:** connects agents to outside services such as ad platforms and analytics
11. **Action history:** records what agents and tools did
12. **Testing and checks:** tests accuracy, safety, and rule enforcement

Planned building blocks: a PostgreSQL database for the official record, Cloudflare R2 for files and their history, word search plus meaning search (full-text search and pgvector), and connections to AI models from companies such as Anthropic and OpenAI.

### The context compiler: the right information for the job
AtmaOS does not simply give an AI everything it knows. For each task, the compiler checks the rules, leaves out what the specialist is not allowed to use, and selects only what matters. Everything the system knows → checks the rules, picks what matters → a ContextPlan (what, from where, and why) → the specialist does the work.

*Example.* A copywriter needs to write a landing page. It may need the client's goals, product details, past research, brand voice, current campaign results, and relevant ideas from my books. It does not need every document in the system. *The ContextPlan* is a record of what information was given to the AI, where it came from, and why it was selected, so every piece of work can be explained later.

## 7. How work moves through the system
**The models do the thinking. AtmaOS keeps the memory, the records, and the rules.** An AI expert can stop working, return later, and pick up with the right history, and the system does not have to depend on one AI company or one model to remember everything.

1. A task comes in ("write the landing page")
2. The rules are checked (what may this specialist see and do?)
3. The right knowledge is found (not everything, what matters)
4. A specialist AI does the work (the model does the thinking)
5. The result is recorded (with its sources and reasons)
6. The history is kept (so work can continue and improve over time)

Keep the history. Change a decision by making a new decision, not by hiding the old one. If an idea turns out to be wrong, the original stays in the record and the correction is added with its evidence.

## 8. The specialist intelligences
**One editor. Fourteen agency roles.** Each specialist has a lasting identity, a main job, a set of work rules, and a history of past work. The AI model running it may change; the specialist's records and role do not have to disappear. *(Planned team.)*

**Author branch: [Ernest-Faulkner](/ernest-faulkner).** An AI editorial expert. Its job is to study writing, find problems, weigh evidence, and suggest improvements across books, essays, notes, manuscripts, claims, and earlier drafts. It does not own the books or change them on its own. It makes findings and proposals. The approved editing process controls what becomes final.

**Agency branch: fourteen role types.** Executive orchestrator (assigns work, tracks progress, brings specialists together) · head of product · design thinking director · UX/UI design lead · senior copywriter · brand and campaign designer · principal developer/engineer · paid media director · Google Ads strategist · Meta Ads strategist · LinkedIn Ads strategist · Bayesian analytics lead (weighs the evidence and tests, keeps the uncertainty visible) · SEO and organic growth lead · quality and accessibility lead. The team can grow: new roles can be added without creating a new atmaOS.

They work across roles, without losing their own roles. Working together does not mean every agent gets every permission. A copywriter may help plan an ad test; that does not mean the copywriter can spend money on the ad account.

## 9. How it learns: the experience ledger
**Remembering a conversation is not learning from experience.** The Experience Ledger tracks the full story of a piece of work, so a result can be traced back to what was seen, thought, suggested, and decided. *(Planned feature.)*

What we saw → what we thought it meant → what we suggested → what we decided → what we did → what happened → what we learned.

*For example.* An advertising specialist notices a campaign is getting more expensive. It forms a theory about why and asks the agency's Bayesian statistics tool to study the evidence. The tool returns results, including how certain or uncertain they are. The specialist suggests a change. An authorized person or agent approves it. The change is made and the team measures what happens next. That whole history becomes part of the project record.

A guess is not a fact. A suggestion is not a decision. A result is not always proof. A lesson must be checked before it becomes shared agency knowledge. The Bayesian tool does the statistical math; the agents explain and use its results, they do not replace them with guesses.

Seven kinds of recorded knowledge: observation, hypothesis, recommendation, decision, outcome, lesson, doctrine.

## 10. The safety and authority rules
**Seeing is not doing.** Each specialist has a role constitution: a written set of rules for its job, its standards, the evidence it needs, and when a person or another agent must review its work. Every action falls into one of three levels.

- **Observe:** look, study, and report (e.g. review campaign results)
- **Propose:** suggest a change (e.g. recommend a new ad budget)
- **Execute:** make an approved change (e.g. update the budget within allowed limits; some actions still need human approval)

**Access to information** is what an agent may see and use. It comes from the core's permission system, never from an agent's own instructions. **Permission to act** is what an agent may change. These are different things.

Rules that apply across the system:
- **One official record.** Agents may keep notes, but approved project facts live in the shared record.
- **Evidence matters.** A guess is not a fact; a suggestion is not a decision.
- **Client information stays protected.** One client's information is not used for another unless the rules allow it.
- **Old history stays available.** Rejected ideas, failed tests, and past versions remain in the record.
- **Agents cannot approve their own new powers.**
- **The owner controls major doctrine.** An agent cannot turn a personal opinion into an official agency rule.
- **Important actions can be traced:** which agent acted, what it used, what permission it had, and what happened.

## 11. The scale of the architecture
**The size of the plan.** These figures describe the scope of the architecture. They are planning estimates (broad categories, not verified software packages or code written today).

- **2** main branches
- **12** shared core functions
- **7** author-branch functions, including Ernest-Faulkner
- **10** agency-branch functions
- **11** agency specialist role types
- **8** outside tool categories (Google Ads, Meta Ads, LinkedIn Ads, the Bayesian tool, analytics systems, design tools, code repositories, deployment tools)

**48** mapped functional building blocks (12 + 7 + 10 + 11 + 8). The two main branches are shown separately and not added again. One category may contain many smaller services or software parts.

Also: **5** levels of working state (agency-wide, client/project, role, agent memory, current task) · **7** kinds of recorded knowledge · **3** authority levels (observe, propose, execute) · **1** shared source of truth: the record belongs to atmaOS, not to any model or agent.

## 12. The vision
**atmaOS is a living library of my knowledge and experience.** It began as a solution to a writer's problem: how can AI help me manage and develop a lifetime of writing when no single conversation can hold it all? It has grown into a larger vision: a lasting intelligence system that can help me write, think, create, publish, market, and build.

The goal is not to replace my thinking. It is to extend its reach, so the ideas, lessons, judgment, and experience of two decades become a resource I can work with, build upon, and put into action.

*atmaOS began as a way to give AI access to my life's work. It is becoming a way to put that life's work into action.*

---

Atma · Marketer · Author · Systems Engineer · atma.marketing

Figures marked as estimates are planning numbers, not audited results. Items marked planned are not yet running software.
