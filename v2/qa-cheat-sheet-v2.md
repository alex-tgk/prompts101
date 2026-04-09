# Q&A Cheat Sheet — Prompt Engineering That Actually Works (v2)

**Presenter:** Alex Carroll, Tech Engineer, COSY Team
**Format:** ~30 min talk + live demos, then ~30 min Q&A
**Audience:** All engineering — front-end, back-end, mobile, platform, DevOps, QA

---

## Key Messages (Bridge Back To These)

1. **Engineer, don't ask** — prompts are specifications, not questions
2. **Constraints are your highest-leverage tool**
3. **Iterate in one thread, don't restart**
4. **Rethink the workflow, don't bolt AI on**
5. **Scale with copilot-instructions.md**

---

## Category 1: Skepticism & Pushback

### "I tried Copilot and the suggestions were terrible. Why should I try again?"

**Quick answer:** The default experience without prompt engineering is like using Google with one-word searches. The whole point of this talk is that the tool is only as good as the input — and most people never learned how to give it good input.

**If they dig deeper:** GitHub's own data shows that developers who use structured prompts with constraints get 55% higher acceptance rates on suggestions (GitHub Next, 2024). The inline tab-complete experience — which is what most people tried first — is the lowest-fidelity way to use Copilot. Chat mode with a well-crafted prompt is a completely different tool. The difference is like comparing autocomplete in your browser address bar to actually using a search engine. If you tried it six months ago, the models have also improved significantly — GPT-4o and Claude 3.5 are meaningfully better than what shipped at launch.

**Bridge back:** This is exactly why "engineer, don't ask" matters. When you treat the prompt like a spec — with constraints, examples, and clear acceptance criteria — you get dramatically different output.

---

### "Isn't this just a crutch? Shouldn't developers know how to code without AI?"

**Quick answer:** Absolutely. You need to understand the code to write good prompts and review the output. This isn't about replacing your skills — it's about applying them at a different altitude. You're doing more architecture and less typing.

**If they dig deeper:** Nobody argues that using an IDE with syntax highlighting and autocomplete is a "crutch." Nobody says we should write code in Notepad to prove we understand it. Every generation of tooling raises the abstraction level. The developers who get the most value from Copilot are the experienced ones, because they know what good code looks like — they can write better prompts and catch bad output faster. A McKinsey study (2023) found that AI coding tools showed the biggest productivity gains for senior engineers, not juniors. The fundamentals matter more now, not less — because you're reviewing and directing, not just typing.

**Bridge back:** This connects to "rethink the workflow." You're not outsourcing thinking. You're spending more time on design and constraints, less time on implementation boilerplate.

---

### "The output still needs reviewing. How is that faster than just writing it myself?"

**Quick answer:** Because reviewing correct code is faster than writing it from scratch. The cognitive cost of verification is lower than the cognitive cost of generation. You still review code in PRs you didn't write — and you don't argue that PR review makes collaboration slower.

**If they dig deeper:** The time savings come from specific categories of work: boilerplate, test cases, type definitions, data transformations, regex, config files — anything with a well-defined pattern. GitHub's research (2022 developer survey) showed a 55% faster task completion rate with Copilot, and that includes review time. The key is knowing where to use it. Nobody's suggesting you let Copilot write your core business logic unsupervised. But if you're writing 15 unit test cases that follow the same pattern, generating them and reviewing takes 3 minutes vs. 20 minutes of typing. The review step is a feature, not a bug — it keeps you in the loop.

**Bridge back:** This is where constraints are your highest-leverage tool. When you constrain the output — "use this pattern, follow this interface, match this example" — the review becomes trivial because you know exactly what correct looks like.

---

### "What about hallucinations? How do I trust the output?"

**Quick answer:** You don't blindly trust it — the same way you don't blindly trust a Stack Overflow answer or a junior dev's PR. The workflow is generate, review, verify. Hallucination risk goes down dramatically when you constrain the output with specific types, interfaces, and examples.

**If they dig deeper:** Hallucinations in coding are different from hallucinations in prose. A model might fabricate a function name that doesn't exist, or misremember an API signature — but TypeScript's compiler catches that immediately. Your linter catches style issues. Your tests catch logic errors. The verification toolchain you already have handles most failure modes. The real risk is subtle logic bugs, which is the same risk you have with any code you didn't write — including your own code from six months ago. The practical mitigation is: (1) constrain the output with types and interfaces so the compiler catches nonsense, (2) always provide examples of what correct looks like, and (3) never skip the review step on generated code.

**Bridge back:** "Engineer, don't ask" is the answer here. When you write a prompt like a spec with explicit constraints and types, you give the model less room to hallucinate. Vague prompts get vague (and wrong) answers.

---

### "Won't this make junior developers worse — they won't learn fundamentals?"

**Quick answer:** Only if they use it wrong. If a junior uses Copilot to skip understanding and just ships generated code, yes, they'll learn nothing. But if they use it as a learning tool — reading the generated code, understanding why it works, asking the model to explain decisions — it's the most patient tutor they've ever had.

**If they dig deeper:** This is a legitimate concern and worth taking seriously. The mitigation is cultural, not technical. Teams should set expectations: juniors should be able to explain any code they ship, whether they wrote it or Copilot did. Code review becomes even more important. The upside is real though — a junior can generate a function, then ask Copilot Chat "explain this code line by line" or "what are the edge cases I'm missing?" and get an interactive explanation that's contextual to their actual code. That's better than reading a generic blog post. Google's internal research (2024) on their Duet AI tool showed that juniors who used AI with structured guidance actually learned patterns faster, because they saw more examples of good code sooner.

**Bridge back:** This is why scaling with copilot-instructions.md matters. When your team's patterns, conventions, and constraints are codified in a file, every developer — including juniors — gets guardrails that teach the right patterns by default.

---

## Category 2: Technical & Practical

### "Does this work for back-end / Python / Go / infrastructure code, or just React?"

**Quick answer:** Everything I showed today works across languages and domains. The prompting techniques are language-agnostic — constraints, examples, iterative refinement. Copilot supports basically every language in common use.

**If they dig deeper:** GitHub reports that Copilot's most-used languages by volume are Python, JavaScript/TypeScript, Java, Go, and C#. The acceptance rate varies — Python and JS tend to have higher acceptance because of larger training corpora. For infrastructure code (Terraform, Kubernetes YAML, CloudFormation), Copilot is actually excellent because IaC is extremely pattern-heavy and well-constrained. I've used these exact techniques with Terraform modules, Docker configs, and CI/CD pipelines. The one area where it's weaker is very domain-specific DSLs or internal frameworks with limited public documentation — but that's exactly where copilot-instructions.md and few-shot examples close the gap.

**Bridge back:** Constraints work in every language. A Go struct definition constrains output the same way a TypeScript interface does. The principle is universal.

---

### "How do I write a good copilot-instructions.md for my team?"

**Quick answer:** Start with three things: your naming conventions, your file structure patterns, and one example of a well-written component or module in your repo. That alone gets you 80% of the value. Iterate from there.

**If they dig deeper:** The structure I recommend: (1) A brief "About this project" section — stack, architecture pattern, key libraries. (2) Code conventions — naming, file structure, import ordering, error handling patterns. (3) Two or three "golden examples" — links to files in the repo that represent the ideal pattern. (4) Anti-patterns — things you explicitly don't want. Keep it under 200 lines. The biggest mistake is trying to document everything — the file should capture the 20% of conventions that cause 80% of PR feedback. Start by looking at your last 10 PR reviews and noting what you corrected most often. Put those patterns in the file. Review and update it quarterly, treat it like living documentation.

**Bridge back:** This is "scale with copilot-instructions.md" in practice. It's your team's engineering standards, machine-readable.

---

### "What's the best way to handle multi-file changes with Copilot?"

**Quick answer:** Use Copilot Chat (or Agent mode in VS Code) rather than inline suggestions. Open the relevant files for context, describe the change holistically, and let it see the full picture. The key is giving it enough context about the relationships between files.

**If they dig deeper:** For multi-file changes, the approach depends on the scope. For 2-3 related files (a component, its tests, and its types), open all three and use Chat to describe the change across them. For larger refactors, break it into sequential steps — change the interface first, then update implementations one at a time. Copilot Agent mode (VS Code Insiders) can actually plan and execute multi-file changes, but you should review each file's changes individually. The technique from the talk applies here: iterate in one thread. Don't start fresh for each file — build on the context of what you've already changed.

**Bridge back:** "Iterate in one thread, don't restart." Multi-file changes are exactly where maintaining context across the conversation pays off.

---

### "How does Copilot Chat differ from inline suggestions? When should I use each?"

**Quick answer:** Inline suggestions (tab-complete) are for flow-state coding — small completions while you're already writing. Chat is for when you need to think before you write — planning, complex generation, debugging. Use inline for lines, Chat for blocks.

**If they dig deeper:** Think of inline as autocomplete on steroids and Chat as pair programming. Inline works best when you've already established context through your code — good variable names, clear function signatures, a comment describing intent. Chat works best when you need to describe what you want in natural language, provide constraints, or ask questions. The prompting techniques from this talk apply mainly to Chat — that's where you engineer prompts with constraints and examples. Inline benefits from copilot-instructions.md and the context of your open files, but you're not writing structured prompts for it. A good workflow: use Chat to generate the skeleton with constraints, then use inline to fill in details as you refine.

**Bridge back:** The "engineer, don't ask" principle is primarily a Chat workflow. Inline is reactive; Chat is proactive.

---

### "Can Copilot help with debugging or just generating new code?"

**Quick answer:** Debugging is one of its strongest use cases. Paste in an error message and the relevant code, and it will identify probable causes faster than scanning Stack Overflow. It's also great for explaining unfamiliar code.

**If they dig deeper:** Practical debugging workflow: (1) Copy the error message and stack trace into Chat. (2) Add the constraint: "Here's the relevant code" and include the function or file. (3) Ask it to explain the error and suggest fixes. This works well because debugging is a pattern-matching task — the model has seen millions of error-to-fix pairs. It's also excellent for "why is this test failing" scenarios where you paste the test, the implementation, and the failure output. For performance debugging, you can paste profiler output and ask for optimization suggestions with specific constraints ("optimize without changing the public API"). The key is giving it all the context it needs — don't just paste the error, paste the code too.

**Bridge back:** Same principle: "engineer, don't ask." Don't say "why is this broken?" Say "here's the error, here's the code, here are the constraints for a fix — identify the root cause and suggest a solution that doesn't change the public interface."

---

### "What about code review — can I use these prompting techniques for reviews?"

**Quick answer:** Yes. You can paste a diff into Chat and ask it to review against specific criteria — your team's conventions, performance considerations, security patterns. It's not a replacement for human review, but it's a solid first pass.

**If they dig deeper:** The most effective way I've found: paste the diff and a structured prompt like "Review this change for: (1) correctness — any logic bugs or edge cases missed, (2) consistency — does this follow [specific pattern], (3) security — any input validation gaps or injection risks, (4) performance — any obvious N+1 queries or unnecessary re-renders." This gives you a structured review against explicit criteria. It catches things humans miss in review (especially off-by-one errors, missing null checks, and inconsistent naming) and it's tireless — it reviews the 400th line of a diff with the same attention as the first. Use it as a pre-review step before requesting human review.

**Bridge back:** Constraints again. An unconstrained "review this code" gets vague feedback. A constrained review with specific criteria gets actionable results.

---

### "How do few-shot examples work in practice? Do I paste in example code every time?"

**Quick answer:** No. The copilot-instructions.md file is your persistent few-shot example. You write it once, and Copilot reads it automatically. For ad-hoc work in Chat, yes, pasting a 10-line example of the pattern you want is worth the 5 seconds it takes.

**If they dig deeper:** Few-shot in practice has three tiers: (1) copilot-instructions.md — always-on examples and patterns that apply to every interaction in the repo. (2) Open files — Copilot uses your currently open files as implicit context, so having a "reference file" open that shows the pattern you want is a form of few-shot. (3) Explicit in-prompt examples — when you're doing something new or unusual, paste a small example of the pattern. You don't need a full file — 5-15 lines showing the structure is enough. The key insight: few-shot examples are constraints. They narrow the solution space. Instead of saying "write a service," you show what a service looks like in your codebase and say "follow this pattern."

**Bridge back:** Few-shot examples are just another form of constraint. They're showing, not telling.

---

## Category 3: Workflow & Process

### "How do we get buy-in from the team to change workflows?"

**Quick answer:** Don't ask for buy-in on "changing workflows." Pick one pain point everyone agrees on — flaky test writing, boilerplate, documentation — solve it visibly with these techniques, and let the results sell the approach.

**If they dig deeper:** The adoption pattern that works: (1) Find one champion per team (that might be you after this talk). (2) Pick the most annoying, repetitive task the team does — writing test boilerplate, creating CRUD endpoints, updating types across files. (3) Document a before/after: "This task took 45 minutes, now it takes 10, here's the prompt." (4) Share it in a PR description or Slack thread — not a formal proposal, just "hey, I tried this." (5) Offer to pair with anyone interested. The worst approach is a top-down mandate or a formal process change. Let people opt in. GitHub's data shows that teams with organic, champion-driven adoption see 2x higher sustained usage than teams with mandated adoption.

**Bridge back:** "Rethink the workflow, don't bolt AI on." Start with the workflow that hurts most, not with the tool.

---

### "What does 'rethink the workflow' actually look like day-to-day?"

**Quick answer:** Instead of thinking "how do I write this code," think "how do I describe what this code needs to do." Your job shifts from typing to specifying. The code is the output, but the spec — the prompt — is where your expertise lives.

**If they dig deeper:** Concrete example from my daily workflow: Before, I'd open a file, start writing a React component, get the JSX down, add props, wire up state, write tests. Now, I start with the spec: "Create a component that does X, accepts these props, follows this pattern from our codebase, handles these edge cases, includes error states." I get a working first draft in 30 seconds. Then I review, adjust, iterate — still in the same thread. The total time is shorter, but more importantly, I spent my cognitive energy on the design and edge cases, not on remembering the syntax for useCallback. Another example: before writing a PR, I paste my diff into Chat and ask it to generate a PR description with a summary, test plan, and migration notes. It takes 10 seconds and the output is better than what I'd write because it's exhaustive — it doesn't forget to mention that one file it changed.

**Bridge back:** This is the core of "rethink the workflow." You're not faster at typing — you're working at a higher abstraction level.

---

### "How long does it take for a team to get good at this?"

**Quick answer:** Individually, a couple of hours of deliberate practice with the techniques from this talk. For a team to develop shared patterns and a solid copilot-instructions.md, about two to three sprints.

**If they dig deeper:** The learning curve has three phases: (1) Week 1-2: Awareness — people try Chat and inline, get inconsistent results, some give up. This is where the techniques from this talk matter — they skip the "bad results" phase by starting with structured prompts. (2) Week 3-4: Pattern development — people find their personal workflows, discover which tasks benefit most, start sharing prompts that work. (3) Sprint 3-4: Team alignment — copilot-instructions.md gets written, shared patterns emerge, code review starts expecting consistent AI-assisted output. The teams I've seen move fastest are the ones that allocate 30 minutes in a retro to share "prompts that worked" — it's a low-cost, high-signal way to level up collectively.

**Bridge back:** Scaling with copilot-instructions.md is what takes you from individual productivity to team productivity.

---

### "Should we have dedicated prompt engineering training?"

**Quick answer:** This talk is a start. Beyond this, I'd recommend 1-2 pairing sessions per team where someone demos their workflow live. Formal training programs tend to be too abstract — the value is in seeing it applied to your actual codebase.

**If they dig deeper:** The most effective training format I've seen is a "prompt jam" — 60 minutes where the team takes a real ticket from the backlog and works through it together using Copilot. Everyone sees the prompting in real time, sees the iteration, sees the failures and recoveries. It's concrete and immediately applicable. Formal "prompt engineering courses" tend to focus on generic techniques that don't translate directly to coding workflows. What engineers need is: (1) the mental model shift (this talk), (2) hands-on practice with their own code, and (3) a reference document (copilot-instructions.md) they can iterate on. One hour of pairing beats four hours of slides.

**Bridge back:** The five principles from this talk are the framework. Practice is what makes them stick.

---

### "How do we handle code quality if everyone's generating code differently?"

**Quick answer:** The same way you handle it now — linting, testing, code review, and shared conventions. copilot-instructions.md adds a layer by standardizing the AI's output to match your team's patterns.

**If they dig deeper:** AI-generated code doesn't need different quality controls — it needs the same ones applied consistently. If anything, it makes the case for stronger automation: strict ESLint configs, required test coverage thresholds, automated formatting, and thorough PR templates. The code review process doesn't change — you're reviewing output regardless of whether a human or AI produced it. The place where copilot-instructions.md really shines here is reducing variance. Without it, Developer A's Copilot output looks different from Developer B's because they prompt differently. With it, both get output that follows the same patterns, naming conventions, and file structure. It's the equivalent of a style guide that the AI actually reads.

**Bridge back:** copilot-instructions.md is your team's quality standard, automatically applied. It scales your best engineer's opinions to every Copilot interaction.

---

## Category 4: Security & Compliance

### "Is our code being sent to external servers? What about proprietary code?"

**Quick answer:** GitHub Copilot Business and Enterprise plans do not retain your code or use it for model training. Your prompts and code are encrypted in transit, processed, and discarded. This is contractually guaranteed in the enterprise agreement.

**If they dig deeper:** The specifics: GitHub Copilot for Business (which is what we use) has explicit data protection guarantees — no code is stored beyond the immediate request, no code is used to train models, and the data is encrypted in transit and at rest during processing. This is covered in GitHub's Copilot Trust Center and the enterprise DPA. The prompts and surrounding code context are sent to GitHub's API, processed by the model, and the response is returned — nothing is retained. For highly sensitive code (think cryptographic implementations or proprietary algorithms), you can always disable Copilot for specific files or directories via `.copilotignore`. Check with the security team for our specific org-level configuration.

**Bridge back:** The security controls are solid at the enterprise tier. Your focus should be on writing better prompts, not worrying about whether the tool is safe to use.

---

### "How do we prevent Copilot from generating insecure code?"

**Quick answer:** The same way you prevent humans from writing insecure code — code review, SAST scanning, and security-focused linting. Add security constraints to your prompts and your copilot-instructions.md. "Never use innerHTML," "always parameterize queries," "validate all input with Zod."

**If they dig deeper:** Copilot can and does generate insecure code — just like Stack Overflow answers can be insecure. The mitigation is defense in depth: (1) In copilot-instructions.md, explicitly list security patterns: "always use parameterized queries," "never disable CORS," "use Zod schemas for all API input validation." (2) In individual prompts, add security constraints: "validate all user input," "handle the unauthenticated case." (3) Your existing security tooling — Snyk, SonarQube, SAST in CI — catches generated vulnerabilities the same way it catches human-written ones. (4) GitHub has a built-in Copilot filter that blocks known insecure patterns (SQL injection, hardcoded secrets). Stanford research (2023) found that developers using AI tools produce code with similar vulnerability rates to those not using AI tools, when controlling for experience level. The tool isn't the variable — the developer's security awareness is.

**Bridge back:** Constraints are your highest-leverage tool — for security too. Codify your security requirements in copilot-instructions.md and they become part of every generation.

---

### "What about licensing — could Copilot suggest copyrighted code?"

**Quick answer:** Copilot Business has a code reference filter that detects and flags suggestions matching public code. It's enabled by default on our plan. It's not perfect, but it significantly reduces the risk.

**If they dig deeper:** GitHub Copilot has a built-in "code referencing" feature that checks suggestions against public code on GitHub. When it finds a match, it shows the license and source. On the Business plan, you can configure it to block suggestions that match public code entirely. Microsoft also offers an IP indemnity for Copilot Business/Enterprise customers — meaning they'll defend you legally if there's a copyright claim related to Copilot-generated code. That said, the practical risk is low for most enterprise code because your prompts constrain the output to your specific architecture, types, and patterns — the output is far enough from any training data source. The risk is highest for generic utility functions (like a debounce implementation), which is where the reference filter matters most.

**Bridge back:** This is a solved problem at the enterprise tier. Focus on writing constrained prompts that produce code specific to your codebase, and the licensing risk becomes minimal.

---

### "Does this comply with our security policies?"

**Quick answer:** Copilot Business went through our enterprise security review. I'd recommend checking with the security team for the specifics of our org configuration, but the short answer is yes — it's approved for use.

**If they dig deeper:** The security team should be the authoritative source here, but the key facts: data is not retained for training, the connection is encrypted, we have admin controls over which repos it's enabled for, and there's a `.copilotignore` mechanism for sensitive directories. If you have specific compliance concerns (SOC 2, PCI, etc.), those are conversations for the security team, not this talk. I'm here to help you use the tool effectively once it's been approved for your context.

**Bridge back:** The governance is handled. The opportunity cost is not adopting it while competitors do.

---

## Category 5: ROI & Measurement

### "How do we measure if this is actually helping?"

**Quick answer:** Track three things: task completion time for comparable tickets, developer self-reported satisfaction, and Copilot acceptance rate (available in the GitHub admin dashboard). Don't try to measure "lines of code" — that's a vanity metric.

**If they dig deeper:** The metrics that actually matter: (1) Cycle time — how long from ticket start to PR merge, compared to historical baselines for similar work. (2) Copilot acceptance rate — the admin dashboard shows what percentage of suggestions developers accept; rising acceptance rate means they're getting better at prompting. (3) Developer experience surveys — are people less frustrated? Spending less time on boilerplate? More time on design? (4) Code review velocity — are PRs coming in cleaner, requiring fewer rounds of review? Avoid measuring raw productivity through lines of code or number of commits — those are meaningless. GitHub's internal study (2022) used controlled experiments with comparable tasks and found 55% faster completion times. You can replicate this informally by having developers log time on specific task categories before and after adoption.

**Bridge back:** The ROI is real, but it compounds over time. The biggest gains come from "rethink the workflow" — not just typing faster, but spending time on higher-value work.

---

### "What's the ROI on Copilot licenses?"

**Quick answer:** At ~$19/user/month for Business, a developer needs to save roughly 1-2 hours per month to break even. GitHub's research says the average is 55% faster on coding tasks. The math works out quickly.

**If they dig deeper:** GitHub's 2022 study showed 55% faster task completion. McKinsey's 2023 report found 20-45% productivity gains for coding tasks specifically. Accenture's 2024 report put it at 30-50% for well-trained teams. Even at the conservative end — say a developer saves 30 minutes per week — that's $19/month vs. roughly $300-500/month in recovered engineering time (based on typical fully-loaded engineer costs). The ROI is not close. The real question isn't whether to pay for it, but how to maximize adoption so you actually realize the gains. Unused licenses are the real cost. That's why this talk exists — giving people the skills to actually use it effectively.

**Bridge back:** The license cost is noise. The real investment is the time to learn these techniques — which is what you're doing right now.

---

### "How does this compare to other tools (Cursor, Claude Code, Amazon Q)?"

**Quick answer:** The prompting principles are identical across all of them. We use Copilot because of the GitHub integration and enterprise agreement. If you use Cursor or Claude Code personally, everything from this talk transfers directly.

**If they dig deeper:** The landscape: Cursor is an AI-native editor with deeper codebase context and multi-file editing — arguably better UX for complex changes. Claude Code is a CLI tool that's excellent for large-scale refactoring and agentic workflows. Amazon Q is AWS's offering, strong for AWS-specific infrastructure code. Copilot's advantages for us are: seamless VS Code integration, GitHub enterprise agreement (already approved), team-wide copilot-instructions.md support, and it's where the ecosystem is going (GitHub is investing heavily in agent mode). The tool matters less than the technique. Structured prompting, constraints, few-shot examples, iterative refinement — these work everywhere. Pick the tool your org supports, and master the principles.

**Bridge back:** "Engineer, don't ask" works whether you're in Copilot, Cursor, or Claude. The principles are transferable. The tool is an implementation detail.

---

### "What's the adoption rate look like — how many devs actually use it?"

**Quick answer:** Industry-wide, GitHub reports 77,000+ organizations and 1.8M+ developers using Copilot (2024). Internally, adoption varies by team — this talk is about giving everyone the skills to actually get value from it.

**If they dig deeper:** The typical enterprise adoption curve: early enthusiasts (10-20%) adopt immediately, the middle majority (50-60%) needs to see value demonstrated by peers, and there's always a tail (20-30%) who resist until it becomes the obvious default. The teams with the highest adoption are the ones where someone took the time to build a copilot-instructions.md and shared concrete "before/after" examples. That's what I'm trying to start today. If your team's adoption is low, it's usually not resistance to the tool — it's that the initial experience was bad (see question #1) and nobody showed them the techniques to make it good.

**Bridge back:** Adoption follows value. Demonstrate value with real examples, and adoption follows. That's why we're here.

---

## Category 6: Curveballs

### "Will AI replace developers?"

**Quick answer:** No. It will replace developers who refuse to learn new tools — the same way every previous wave of tooling did. The job changes, it doesn't disappear. You're going to design more and type less.

**If they dig deeper:** The historical pattern is clear: compilers didn't replace programmers, IDEs didn't replace programmers, Stack Overflow didn't replace programmers, frameworks didn't replace programmers. Each one raised the abstraction level and let developers focus on harder problems. AI is the same pattern on a bigger scale. What's actually happening: the ceiling of what one developer can build is going up. The floor of what constitutes valuable developer work is also going up. Writing boilerplate CRUD endpoints is no longer the job — designing systems and ensuring quality is. The demand for software continues to outpace supply by every measure. Companies don't have enough developers — they have too many ideas and not enough people to build them. AI makes each developer more capable, which means more projects become feasible, which means more work, not less.

**Bridge back:** "Rethink the workflow" is about evolving your role, not protecting it. The developers who thrive will be the ones who can specify and constrain — which is exactly what prompt engineering is.

---

### "What happens when the model changes and all our prompts break?"

**Quick answer:** Good prompts are resilient because they describe what you want, not how to get it. Specification-style prompts — clear constraints, explicit examples, defined output — work across model generations because they're fundamentally clear communication.

**If they dig deeper:** I've been using these techniques across GPT-3.5, GPT-4, GPT-4o, Claude 3, and Claude 3.5 — the same prompting principles work on all of them. Why? Because a well-written spec is model-agnostic. "Create a React component that accepts these props, follows this pattern, handles these edge cases" works regardless of the underlying model. What breaks between models are tricks and hacks — specific phrasings that exploit quirks of a particular model. That's why "engineer, don't ask" is so important. Engineering a clear spec is robust. Asking a question in just the right way is fragile. Your copilot-instructions.md is the most resilient artifact because it's just a description of your codebase — that doesn't change when the model changes.

**Bridge back:** "Engineer, don't ask" produces model-agnostic prompts. Specifications don't break across model versions. Tricks do.

---

### "Why should I trust your techniques over just experimenting myself?"

**Quick answer:** You should do both. These techniques give you a starting framework so your experimentation is productive from day one. Otherwise you're experimenting blind.

**If they dig deeper:** I'm not asking you to take this on faith. Everything I've shown is testable in five minutes — take a real task, try it with a vague prompt, then try it with a constrained prompt using the techniques from the talk. Compare the results. If the constrained version isn't better, I'll buy you coffee. The value of a framework is that it compresses the learning curve. I spent months iterating on these techniques — you get the distilled version in 30 minutes. That said, your codebase, your domain, your workflow are unique. The principles are universal; the specific application is yours to discover.

**Bridge back:** These are principles, not recipes. "Engineer, don't ask" is a mindset. The specific prompts you write are yours.

---

### "Can you share your copilot-instructions.md as a template?"

**Quick answer:** Yes. I'll share a template after this talk that you can adapt for your team. It's more useful as a starting point than as a copy-paste — every team's conventions are different.

**If they dig deeper:** I'll put a starter template in a shared repo after this session. The template will include: (1) project context section, (2) code conventions section with placeholders for your patterns, (3) example patterns section, and (4) anti-patterns section. The key is that you customize it for your team — a generic template gets generic results. The process I recommend: fork the template, fill it in during a team meeting (30-60 minutes), commit it to your repo, and iterate on it over the next sprint based on what you notice in Copilot's output. Treat it like a living document.

**Bridge back:** copilot-instructions.md is how you scale these techniques from one developer to a whole team. The template gets you started; the iteration makes it valuable.

---

## Difficult Audience Handling

### The Persistent Skeptic
Someone who keeps pushing back, question after question, trying to "win" the argument.

**Strategy:** Agree on the facts, redirect to practicality. "You're raising valid concerns. The question isn't whether AI is perfect — it's whether it provides enough value to justify 30 minutes of learning these techniques. My claim is narrow: structured prompts produce better output than unstructured ones. That's testable." Don't get defensive. Offer to pair with them after the session to try it on their actual code. Skeptics who see it work in their domain often become the strongest advocates.

---

### The "Well Actually" Person
Technically correct on a tangential point, derailing the conversation.

**Strategy:** Validate briefly and redirect. "Good point — you're right that [their technical detail]. That's a nuance worth exploring, but let me park that so we can get to other questions. Happy to dig into that after the session." Don't argue the technical detail — even if they're wrong, it's not worth the room's time. Maintain control of the Q&A by keeping answers focused and moving to the next question.

---

### The Monologue Disguised as a Question
Someone who talks for 90 seconds before getting to a question (if they ever do).

**Strategy:** Wait for the first natural pause and interject with: "So if I'm hearing you right, your question is [restate it concisely]?" This does two things: it forces a concrete question, and it shows the room you're listening while keeping things moving. If there's genuinely no question, say: "That's a great observation. Does anyone else have a question that builds on that?"

---

### When You Genuinely Don't Know
Someone asks something you can't answer.

**Strategy:** Say so directly. "Honest answer — I don't know. I'd want to look into that before giving you a confident answer. Can I follow up with you after the session?" Engineers respect intellectual honesty more than bullshitting. Never make up data or claims. If it's an area where someone else in the room might know, redirect: "Does anyone on the platform team have context on that?" This shows confidence and builds trust.
