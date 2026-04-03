# Q&A Cheat Sheet — "Prompt Engineering That Actually Works"

**Presenter:** Alex Carroll, Tech Engineer
**Audience:** Managers and VPs, Lululemon
**Four key messages to bridge back to:**

1. Engineers don't ask — they instruct with context and constraints
2. Constraints are the highest-leverage thing you can add to a prompt
3. Scale the knowledge with `copilot-instructions.md`
4. Don't bolt AI onto old workflows — reimagine the work at a higher level

---

## Business & ROI

### Q: "What's the actual ROI? How much time does this save?"

**Quick answer:** Industry data from GitHub's own research shows developers complete tasks 55% faster with Copilot, but the real unlock is on the boring stuff — boilerplate, tests, documentation — where the savings can be 2-3x.

**If they dig deeper:** The 55% number comes from GitHub's controlled study with Accenture developers. What I've seen in practice is that the savings aren't evenly distributed. Writing a new React component from scratch might only be 20% faster, but generating unit tests, writing migration scripts, and scaffolding boilerplate can be 3-4x faster. The compounding effect is that developers stay in flow longer — fewer context switches to Stack Overflow or docs. McKinsey's 2024 developer productivity report found that AI-assisted developers also reported higher job satisfaction because they spent less time on tedious work.

**Bridge back to your talk:** And this is exactly why prompt engineering matters — the difference between 20% faster and 3x faster is how well you instruct the tool. An engineer who writes "make a test" gets mediocre output. An engineer who specifies the testing framework, edge cases, and patterns gets production-ready code on the first pass. That's the "engineer don't ask" principle in action.

---

### Q: "How do we measure if developers are using AI tools effectively?"

**Quick answer:** Don't measure lines of code or suggestion acceptance rate — measure cycle time, PR throughput, and developer satisfaction. The best proxy is whether teams are shipping faster without a spike in defects.

**If they dig deeper:** GitHub provides an analytics dashboard showing acceptance rates, but that's a vanity metric — accepting a bad suggestion is worse than rejecting a good one. What I'd recommend measuring: sprint velocity trends over 2-3 quarters, time-from-commit-to-merge (cycle time), defect escape rate, and qualitative developer surveys. Stripe published that they saw a 20% reduction in PR cycle time after structured AI adoption. The important thing is to baseline before rolling out training — otherwise you can't attribute improvement. I'd also look at the ratio of test code to production code, since well-prompted Copilot dramatically increases test coverage.

**Bridge back to your talk:** This is also why `copilot-instructions.md` matters at the org level — it gives you a consistent baseline. When every repo has shared conventions baked in, you can compare teams more fairly because the tool is working from the same playbook.

---

### Q: "Is this worth the cost of Copilot licenses across the org?"

**Quick answer:** At $19/user/month for Copilot Business, you need less than 30 minutes of saved developer time per month to break even. The math is overwhelmingly in your favor.

**If they dig deeper:** A senior developer's fully-loaded cost is roughly $80-120/hour depending on the market. Copilot Business is $19/month per seat. That means if a developer saves just 15-20 minutes a month — basically one fewer Stack Overflow rabbit hole — the license pays for itself. In practice, developers report saving 1-2 hours per day, not per month. GitHub's enterprise customers report that Copilot pays for itself within the first week of use for most developers. The real risk isn't the cost of licenses — it's the cost of not investing in training, so developers use it poorly and dismiss it.

**Bridge back to your talk:** That last point is exactly why we're here today. The license is table stakes. The ROI multiplier is prompt engineering — knowing how to instruct the tool effectively. A $19 license used well is worth 10x a $19 license used poorly.

---

### Q: "How does this compare to other AI coding tools (Cursor, Claude Code, Amazon Q, etc.)?"

**Quick answer:** Copilot is the most mature option with the deepest IDE integration and the largest enterprise footprint. Other tools have strengths in specific areas, but Copilot is the safest bet for a large org today.

**If they dig deeper:** Cursor is excellent for individual developers — its inline editing experience is arguably better than Copilot's — but it doesn't have enterprise-grade admin controls, SSO, or policy enforcement yet. Claude Code (Anthropic's CLI tool) is powerful for complex multi-file tasks but is a terminal-based workflow that requires developer comfort with CLI tools. Amazon Q integrates well if you're deep in AWS but isn't as strong for general front-end work. The landscape is evolving fast, but GitHub Copilot has the advantage of being embedded where developers already work (VS Code, JetBrains), having enterprise compliance features, and being backed by Microsoft's security and compliance posture. The prompt engineering principles I'm teaching today transfer across all of these tools.

**Bridge back to your talk:** That's actually one of the most important things about this talk — the skills are transferable. "Engineer don't ask," writing constraints, providing context — these patterns work in Copilot, Claude, Cursor, or whatever tool comes next. We're investing in the skill, not the tool.

---

### Q: "What's the adoption rate on our teams currently?"

**Quick answer:** That's a great question — I'd want to pull the exact numbers from our GitHub admin dashboard before giving you a precise figure, but from what I've observed, adoption varies significantly across teams.

**If they dig deeper:** What I can tell you is that adoption is typically bimodal — some developers use it constantly and can't imagine going back, while others tried it once, got a bad suggestion, and turned it off. That's actually the norm across the industry. GitHub reports that across their enterprise customers, about 30-40% of developers become daily active users within 90 days without structured training. With training and team-level enablement, that jumps to 60-70%. The gap between those numbers is exactly the opportunity we're discussing today — it's not a tool problem, it's a skills and culture problem.

**Bridge back to your talk:** This is why I'm advocating for `copilot-instructions.md` in every repo — it lowers the floor. Even a developer who isn't great at prompting gets better results when the repo itself provides context to the tool automatically. It scales the knowledge of your best prompt engineers to everyone on the team.

---

## Security & Risk

### Q: "Is there a risk of proprietary code being sent to GitHub/OpenAI?"

**Quick answer:** With Copilot Business and Enterprise plans, GitHub contractually guarantees that your code is not stored, not used for training, and not shared with other customers. Your code stays your code.

**If they dig deeper:** This is the most common concern I hear, and it's valid. Here's the factual breakdown: Copilot Business and Enterprise do not retain prompts or suggestions after they're delivered. Code snippets are transmitted over encrypted connections, processed to generate a suggestion, and discarded. GitHub's data protection agreement covers this explicitly — they are a data processor, not an owner. This is fundamentally different from the free individual Copilot tier, which does allow GitHub to use telemetry data. For additional control, Copilot Enterprise can be configured with content exclusion filters to prevent specific repositories or file patterns from being sent to the model at all. We can also enforce this at the org policy level.

**Bridge back to your talk:** And this actually connects to why `copilot-instructions.md` is so powerful — it's a local file in your repo. It never gets "sent" anywhere as training data. It just shapes the suggestions Copilot gives you, right in your IDE. It's all upside, no data risk.

---

### Q: "What about code quality — does AI-generated code introduce more bugs?"

**Quick answer:** AI-generated code introduces bugs at roughly the same rate as human-written code — the difference is the type of bugs. The real risk isn't more bugs, it's accepting code you don't understand.

**If they dig deeper:** GitClear's 2024 study found that codebases with high AI adoption showed more "code churn" — code written and then quickly rewritten — but that's not the same as more bugs in production. Microsoft's internal research on Copilot usage found no statistically significant increase in production defects. The bugs AI introduces tend to be subtle logic errors or edge cases, not syntax errors. The actual risk factor is developer diligence — if someone accepts a suggestion without reading it, that's a process problem, not a tool problem. This is why code review practices become even more important, not less, with AI tools. The same way you'd review a junior developer's code carefully, you review AI-generated code carefully.

**Bridge back to your talk:** This is the core of "engineer don't ask" — when you give Copilot precise constraints like "handle the null case," "throw a typed error," "follow our error boundary pattern," the output quality goes way up because you've eliminated the ambiguity that causes those subtle bugs. Constraints aren't just for style — they're a quality control mechanism.

---

### Q: "How do we prevent developers from blindly trusting AI output?"

**Quick answer:** The same way we prevent developers from blindly copying code from Stack Overflow — code review, testing requirements, and a culture of ownership. The developer's name is on the commit, not Copilot's.

**If they dig deeper:** Three concrete things: First, maintain your existing code review standards — AI-generated code should be reviewed with the same rigor as any other code. If anything, reviewers should ask "did you verify this handles edge cases?" more explicitly. Second, require test coverage — if a developer can't write tests that prove the AI-generated code works, they don't understand it well enough to ship it. Third, foster a culture where using AI is seen as a starting point, not an endpoint. Google's internal guidance to engineers is "AI is your pair programmer, not your replacement — you're still the senior engineer in the pair." That framing is powerful because it puts the human in the driver's seat.

**Bridge back to your talk:** This connects directly to the "engineer don't ask" principle. When you treat Copilot as an intern you're instructing — not an oracle you're consulting — you naturally stay in a critical mindset. You're reviewing its work, not trusting its judgment.

---

### Q: "What about licensing/IP concerns with AI-generated code?"

**Quick answer:** GitHub Copilot Business and Enterprise include an IP indemnity clause — Microsoft will defend you legally if someone claims AI-generated code infringes their copyright. This is a significant enterprise protection.

**If they dig deeper:** Microsoft's Copilot Copyright Commitment covers commercial customers. If a third party sues you claiming Copilot output infringes their IP, Microsoft will assume legal defense and pay any adverse judgments. Copilot also has a duplicate detection filter that can be enabled at the org level — it flags suggestions that closely match public code and shows the original license so developers can make informed decisions. The broader legal landscape is still evolving (the Doe v. GitHub class action is ongoing), but having the indemnity clause puts the legal risk on Microsoft, not on us. Most enterprises consider this sufficient coverage.

**Bridge back to your talk:** And worth noting — when you use `copilot-instructions.md` to enforce your team's specific patterns and conventions, the output tends to be more "yours" and less generic. Copilot is synthesizing a solution based on your context, not regurgitating someone else's code.

---

### Q: "Could this create a dependency where developers can't code without AI?"

**Quick answer:** Could giving developers IDEs instead of Notepad create dependency? Yes, and it did — and that was a good thing. AI tools are the next layer of developer tooling, not a crutch.

**If they dig deeper:** There's a fair version of this concern and an unfair version. The fair version: junior developers who rely on AI from day one might not build deep debugging and problem-solving muscles. That's a real training and mentorship consideration. The unfair version: that experienced developers will somehow forget how to code. That doesn't happen — just like calculators didn't make mathematicians forget arithmetic. What actually happens is developers redirect cognitive energy toward higher-value work — architecture decisions, system design, user experience. The developers I've seen use Copilot most effectively are the ones who already deeply understand the code. They use it as an accelerator, not a substitute. The risk is manageable with thoughtful onboarding and continued investment in fundamentals for junior developers.

**Bridge back to your talk:** This is actually why prompt engineering is such a valuable skill — it requires you to deeply understand what you want before you can instruct the tool. You can't write a good constraint if you don't understand the problem. The practice of engineering prompts actually reinforces engineering fundamentals.

---

## Adoption & Scaling

### Q: "How do we roll this out across teams?"

**Quick answer:** Start with a champion team, document their wins, then expand with peer-led enablement. Top-down mandates without bottom-up enthusiasm create resentment, not adoption.

**If they dig deeper:** I'd recommend a three-phase approach. Phase 1 (4 weeks): Identify 2-3 "lighthouse" teams with enthusiastic developers, get them trained and using Copilot with `copilot-instructions.md` in their repos. Measure their before/after metrics. Phase 2 (4-6 weeks): Those teams present their results internally — peer credibility beats any external pitch. Create a shared Slack channel for tips, wins, and questions. Phase 3 (ongoing): Roll out org-wide with a standard onboarding kit — `copilot-instructions.md` templates, a 30-minute recorded training, and a prompt library for common tasks. The key insight from companies like Shopify and Stripe who've done this well: make it opt-in with social proof, not mandatory with compliance.

**Bridge back to your talk:** And the `copilot-instructions.md` file is the single most scalable artifact in this whole process. One file per repo that makes every developer on that team more effective, including new hires on day one. It's like an onboarding playbook that the AI actually reads.

---

### Q: "What's the learning curve? How long before someone gets good at this?"

**Quick answer:** Most developers see meaningful improvement within 1-2 weeks of daily use. Getting genuinely good at prompt engineering takes about a month of intentional practice.

**If they dig deeper:** There's a typical adoption curve I've observed. Days 1-3: excitement, trying random things, mixed results. Days 4-7: frustration, "this thing doesn't understand what I want." Week 2-3: the turning point — developers start being more specific, giving context, thinking about constraints. Month 2+: it becomes second nature, and developers start feeling slower without it. The biggest accelerator is a 30-minute training session (like this one) that gives people a mental model. Without that, developers spend weeks in the frustration phase because they're treating Copilot like a search engine instead of an engineer. The second accelerator is working on a repo that already has a good `copilot-instructions.md` — the quality bar is higher from the start.

**Bridge back to your talk:** The three principles I'm covering today — engineer don't ask, constraints are highest leverage, scale with instructions files — are designed to shortcut that frustration phase. Once someone internalizes "I need to instruct, not ask," the learning curve flattens dramatically.

---

### Q: "Can we mandate copilot-instructions.md across all repos?"

**Quick answer:** You can, and I'd recommend it — but frame it as "every repo should have a README for Copilot" rather than a mandate. Make it part of repo scaffolding like linting or CI.

**If they dig deeper:** The practical approach is to add a `copilot-instructions.md` template to your repo scaffolding tool or create-app templates so every new repo starts with one. For existing repos, make it a lightweight PR — even a 10-line file with the tech stack, key conventions, and testing expectations makes a meaningful difference. You could make it a requirement in your repo setup checklist, the same way you require a `.gitignore` or CI config. The teams that maintain it well will see the best results, and that success will pull other teams along. I'd also recommend a shared org-level template with baseline conventions that individual repos can extend with their specifics.

**Bridge back to your talk:** This is the "scale with copilot-instructions.md" message in action. One person writes the file, every developer on the team benefits, every day, forever. It's the highest ROI artifact in your entire AI adoption strategy.

---

### Q: "How do we handle teams with different tech stacks?"

**Quick answer:** That's actually a strength of `copilot-instructions.md` — each repo's file describes its own stack, patterns, and conventions. Copilot adapts per-repo automatically.

**If they dig deeper:** This is one of the best things about the file-based approach. A React/TypeScript team's `copilot-instructions.md` says "use functional components, Tailwind CSS, Zod validation." A Python data team's file says "use type hints, pytest, pandas conventions." A mobile team's file specifies their platform patterns. Copilot reads the relevant file and adjusts its suggestions accordingly. The prompt engineering principles are universal across stacks — being specific, giving constraints, providing context — but the content of the instructions is team-specific. You don't need a one-size-fits-all approach. You need shared principles with team-level implementation.

**Bridge back to your talk:** The three principles I'm sharing today are stack-agnostic. "Engineer don't ask" works whether you're writing TypeScript or Python. Constraints work in any language. The instructions file adapts to whatever your team builds. That's what makes this approach scalable across a diverse org.

---

### Q: "What training or enablement do we need?"

**Quick answer:** A 30-60 minute hands-on session like this one, a shared prompt library, and a `copilot-instructions.md` template. That's the minimum viable enablement — everything else builds on it.

**If they dig deeper:** I'd recommend a three-layer approach. Layer 1 — Awareness (this talk): Get leadership and developers understanding what's possible and what the mental models are. Layer 2 — Hands-on workshop (60-90 min): Developers pair up, work through real tasks with prompt engineering techniques, share before/after results. This is where the "aha" moments happen. Layer 3 — Ongoing community: A Slack channel, a monthly "prompt of the month" challenge, and a shared library of prompts and `copilot-instructions.md` examples that teams contribute to. The ongoing community is the most important layer because prompt engineering improves through practice and sharing, not one-time training. Companies like Shopify and Atlassian have internal "AI guilds" that serve this function.

**Bridge back to your talk:** Today is Layer 1. If there's appetite, I'd love to do a hands-on workshop with interested teams as the next step. The goal is to get these three principles embedded in how we work, not just understood in theory.

---

## Technical (Asked by Non-Technical People)

### Q: "Can Copilot access our internal APIs / Contentful / private packages?"

**Quick answer:** Copilot doesn't directly access your APIs or systems, but it can see the code in your current repo — including API clients, type definitions, and package imports — and use that context to generate relevant suggestions.

**If they dig deeper:** Here's how it works in practice: if your repo has a well-typed API client for Contentful with TypeScript interfaces, Copilot will see those types and suggest code that matches your schema. It doesn't call the API itself, but it understands the shape of your data from your code. This is where `copilot-instructions.md` becomes powerful — you can write "We use Contentful as our CMS. Content types are defined in `src/types/contentful.ts`. Always use the typed client from `@lll/contentful-client`." Now Copilot knows to use your internal package instead of suggesting the generic Contentful SDK. For private npm packages, Copilot can see the installed types and source code in your `node_modules` if the packages are installed locally.

**Bridge back to your talk:** This is a great example of why constraints matter. Without the instruction file, Copilot might suggest generic Contentful patterns. With it, Copilot suggests code that uses your internal packages and follows your team's patterns. Same tool, dramatically different output.

---

### Q: "How is this different from just Googling or reading docs?"

**Quick answer:** Googling gives you generic answers that you adapt to your codebase. Copilot gives you answers already adapted to your codebase because it can see your code, your types, and your patterns in real time.

**If they dig deeper:** Think of it this way: Google gives you a recipe. Copilot gives you the recipe already adjusted for the ingredients in your kitchen. When you're working in a file and Copilot suggests code, it's considering your imports, your function signatures, your variable names, your patterns from adjacent files. A Google result doesn't know you use Zustand instead of Redux, or that your error handling uses a custom `AppError` class. Copilot does, because it's reading your code as context. The other difference is speed — context switching to a browser, parsing a Stack Overflow answer, adapting it to your code, and coming back takes 5-10 minutes. Copilot suggestions appear in seconds, inline, without breaking your flow.

**Bridge back to your talk:** And this is precisely why "engineer don't ask" is the first principle. When you use Google, you ask a question and interpret the answer. When you use Copilot, you describe what you need in context and it generates it in place. The interaction model is fundamentally different — and the better your instructions, the better the generation.

---

### Q: "Does the model learn from our code? Does it get better over time for us specifically?"

**Quick answer:** No — on Copilot Business and Enterprise, the model does not train on your code. It doesn't learn or remember between sessions. But `copilot-instructions.md` gives you a way to get that "trained" feeling without any data leaving your control.

**If they dig deeper:** The base model is trained by GitHub/OpenAI on public code and refreshed periodically across all customers. Your private code is never used in that training on Business/Enterprise plans. Each time Copilot generates a suggestion, it's using the current file, open tabs, and instructions files as context — but that context is ephemeral, not stored. This is actually a feature, not a bug, from a security perspective. The way you make Copilot "smarter" for your team is through the `copilot-instructions.md` file and through writing well-structured, well-typed code. Good types are like documentation that Copilot reads every time — the better your types, the better the suggestions.

**Bridge back to your talk:** This is the "scale with copilot-instructions.md" principle. You can't train the model, but you can give it a cheat sheet every single time it runs. That instructions file is your team's institutional knowledge, delivered to the AI at every interaction. It's training without the data risk.

---

### Q: "What happens when the AI gives wrong code?"

**Quick answer:** The same thing that happens when a teammate submits a PR with a bug — you catch it in review, write a test that exposes the issue, and fix it. The developer is always responsible for what gets committed.

**If they dig deeper:** Wrong AI output falls into a few categories. Syntax errors — rare and obvious, caught immediately. Logic errors — more common, caught by tests and code review. Outdated patterns — the model might suggest a deprecated API; this is caught by linting and CI. Subtle correctness issues — the hardest to catch, same as with human code. The practical defense is the same as good engineering practices: strong typing catches shape errors, unit tests catch logic errors, linting catches pattern violations, and code review catches everything else. The teams that struggle with AI quality are typically the teams that were already underinvesting in testing and review. AI doesn't create that problem — it surfaces it.

**Bridge back to your talk:** And once more, this is where constraints shine. If your prompt says "handle the error case, return early on null input, use our AppError type," the AI is far less likely to produce wrong code because you've eliminated the biggest sources of ambiguity. Constraints are quality assurance built into the prompt.

---

### Q: "Why not just use ChatGPT — what's special about Copilot?"

**Quick answer:** ChatGPT knows about code in general. Copilot knows about *your* code specifically, because it's embedded in your editor reading your files in real time. That context makes all the difference.

**If they dig deeper:** ChatGPT is great for explaining concepts, brainstorming approaches, and working through problems conversationally. But every time you use it for coding, you're copying and pasting code in and out, losing context, and manually keeping it updated on your codebase. Copilot lives inside VS Code — it sees your file, your imports, your adjacent files, your types, and your `copilot-instructions.md`. It generates code inline where you need it, with the right variable names, the right patterns, and the right types already in place. It's the difference between texting your friend a photo of your closet and asking what to wear, versus having a stylist standing in your closet with you. Both can help, but one has dramatically more context.

**Bridge back to your talk:** And this is why the "engineer don't ask" model matters. ChatGPT is a conversation — you ask, it answers. Copilot is a collaboration — you write code, it writes alongside you. The prompting technique is different because the tool is fundamentally different.

---

## Skeptical / Challenging

### Q: "Isn't this just a fad? Will prompt engineering even matter in a year?"

**Quick answer:** The specific tools will evolve, but the skill of clearly communicating intent to machines is only going to become more important, not less. We're investing in the skill, not the tool.

**If they dig deeper:** I'll be honest — the phrase "prompt engineering" might not survive. But the underlying skill absolutely will. Look at what's actually happening: developers who can clearly articulate what they want, specify constraints, and provide relevant context get dramatically better results from AI tools. That's not going away — if anything, as models get more capable, the ability to steer them precisely becomes more valuable, not less. It's like asking in 2005, "Is Google search literacy a fad?" The specific techniques evolved, but the skill of effectively finding and using information only became more essential. The developers who build these skills now will have a compounding advantage as AI tools improve.

**Bridge back to your talk:** That's actually why I framed this talk around principles, not syntax. "Engineer don't ask," "constraints are highest leverage," and "scale with instruction files" — those are durable ideas. The specific file might not be called `copilot-instructions.md` in two years, but the concept of giving AI tools persistent context about your team's conventions will absolutely exist.

---

### Q: "If the tools are this good, do we need fewer developers?"

**Quick answer:** We need the same number of developers doing more valuable work. AI makes each developer more productive, which means we can ship more — not that we need fewer people.

**If they dig deeper:** History is clear on this: every productivity tool in software — higher-level languages, frameworks, cloud infrastructure, CI/CD — was predicted to reduce the need for developers. Every single time, the opposite happened. Demand for software expanded to absorb the new capacity. There's no shortage of features we want to build, no shortage of tech debt to address, no shortage of quality improvements to make. What changes is the ratio of time spent on high-value work versus low-value work. Developers spend less time writing boilerplate and more time on architecture, user experience, and solving novel problems. That's good for developers, good for the business, and good for the product. Shopify's CEO said it well: "AI means we can build the things we always wished we had time for."

**Bridge back to your talk:** This talk is about making our existing developers dramatically more effective. The goal isn't to reduce headcount — it's to increase velocity. Prompt engineering is a multiplier on the talent we already have.

---

### Q: "We tried AI on our team and it didn't really stick. What are we doing wrong?"

**Quick answer:** You're probably bolting AI onto your existing workflow instead of rethinking the workflow itself. The teams that get the most value don't ask "which step can AI do faster?" — they step back and ask "what outcome do I need, and how would I approach this from scratch with AI as a collaborator?"

**If they dig deeper:** This is the most common adoption failure pattern I see. A team takes their current process — say, manually writing unit tests after implementation — and asks AI to do that same step. The output is mediocre because the AI has no context about the design decisions that led to the code. The team concludes "AI isn't that helpful." But the team that rethinks the workflow — "what if I describe the behavior I want and let AI generate the tests and the implementation together?" — gets dramatically better results. It's the difference between giving a new hire a task list and giving them the goal. AI works best when you operate at a higher level of abstraction: describe outcomes, not steps. The teams that "get it" aren't faster at the old process. They're doing a different, better process.

**Bridge back to your talk:** This is why I included the "Stop Bolting AI On" principle. The mindset shift isn't "use AI to speed up step 4." It's "rethink whether steps 1-6 are even the right approach." Reimagine the work at a higher level.

---

### Q: "This seems like a lot of effort for a prompt — isn't the point that AI should be easy?"

**Quick answer:** It is easy to use. It takes effort to use *well*. That's true of every powerful tool — easy to pick up, hard to master. The effort we're talking about today is a one-time investment in technique that pays off every single day.

**If they dig deeper:** Think of it like a creative brief. Anyone can say "make us a cool ad." But the teams that write a detailed brief — target audience, tone, key messages, constraints, deliverables — get dramatically better creative work. Nobody says "briefs are too much effort, the agency should just know what we want." Prompt engineering is the creative brief for AI. And most of what I'm teaching today isn't even about individual prompts — it's about the `copilot-instructions.md` file, which you write once and it works forever. That's maybe 30 minutes of setup per repo that benefits every developer, every day, for the life of the project. The effort-to-impact ratio is enormous.

**Bridge back to your talk:** The creative brief analogy is exactly right. The three principles I'm sharing are about being intentional rather than hopeful. Engineer don't ask, add constraints, scale with instruction files. It's a small upfront investment in clarity that pays compound returns.

---

### Q: "How do we know this isn't just making mediocre developers feel productive?"

**Quick answer:** Fair challenge. The best indicator is output quality, not output quantity. If the code passes review, the tests pass, and the features ship without regressions — that's real productivity, regardless of how it was generated.

**If they dig deeper:** This concern usually comes from one of two places: either a worry that AI is papering over skill gaps, or a worry that we're measuring the wrong things. Both are legitimate. Here's my take: AI absolutely can help less experienced developers produce code faster. But faster production of bad code isn't productivity — it's technical debt at scale. That's why code review, testing, and architectural oversight matter more, not less. The developers who get the most from AI are actually your strongest engineers — they know what good code looks like, so they can prompt for it and evaluate the output. For junior developers, AI is best used as a learning accelerator with mentorship, not as a replacement for understanding. The real risk isn't "mediocre developers feeling productive" — it's not investing in the review and testing practices that keep everyone honest.

**Bridge back to your talk:** This is actually why I emphasize constraints so heavily. A mediocre developer writing vague prompts gets vague code. A strong developer writing precise constraints gets precise code. Prompt engineering skill correlates with engineering skill — it's not a shortcut around understanding, it's an amplifier of understanding.

---

## Meta / Follow-up

### Q: "What should I tell my team to do Monday morning?"

**Quick answer:** Three things: (1) Make sure everyone has Copilot enabled in their IDE, (2) add a `copilot-instructions.md` file to your most active repo, and (3) share the "engineer don't ask" principle — instruct, don't request.

**If they dig deeper:** Specifically: Monday, have your tech lead spend 30 minutes writing a `copilot-instructions.md` for your main repo — tech stack, coding conventions, common patterns, testing expectations. Share it in your team Slack and tell everyone to pull. Then ask your team to try one thing this week: when they use Copilot, be specific about what they want instead of hoping it reads their mind. Add a constraint. Mention the error case. Specify the return type. At the end of the week, do a 15-minute retro in standup — "what worked, what didn't, what surprised you." That's your lightweight pilot. If the team sees value, we can go deeper.

**Bridge back to your talk:** That's the three principles in action: instruct don't ask (Monday's challenge), constraints are highest leverage (the specificity exercise), and scale with instructions (the file in the repo). All three, live, by next Friday.

---

### Q: "Can you share these slides / materials?"

**Quick answer:** Absolutely — I'll share the deck and a starter `copilot-instructions.md` template after the session. I'll also include a one-page cheat sheet of the prompt engineering principles.

**If they dig deeper:** I'll send a follow-up with: the slide deck, a `copilot-instructions.md` template you can customize for your team, a prompt patterns cheat sheet with before/after examples, and links to the key resources I referenced. If there's interest, I'm happy to do a hands-on workshop with any team that wants to go deeper. Just reach out and we'll get it scheduled.

**Bridge back to your talk:** The most valuable thing I can share isn't the slides — it's the `copilot-instructions.md` template. That's the artifact that will actually change your team's day-to-day experience. Everything else is just context for understanding why that file matters.

---

### Q: "Should we have a prompt engineering guild or working group?"

**Quick answer:** Yes — even a lightweight one. A Slack channel and a monthly 30-minute share-out would create a flywheel of learning that compounds over time.

**If they dig deeper:** I'd start small and organic rather than creating formal structure. A Slack channel where people share prompting tips, interesting results, and `copilot-instructions.md` snippets is the minimum. Add a monthly 30-minute "show and tell" where 2-3 developers share something they learned. If it gains traction, formalize it into a working group with a charter: maintain org-level prompt templates, evaluate new AI tools, and run quarterly training. Companies like Shopify, Stripe, and Atlassian all have some version of this, and they consistently report it's one of the highest-ROI internal communities. The key is making it peer-led, not management-imposed.

**Bridge back to your talk:** A guild or community of practice is the best way to keep these principles alive beyond today's session. It's how you go from "we heard a talk about prompt engineering" to "prompt engineering is part of how we work." I'd be happy to help seed it.

---

### Q: "What resources do you recommend for learning more?"

**Quick answer:** Start with GitHub's official Copilot docs and the prompt engineering guides from OpenAI and Anthropic. For hands-on practice, just start using Copilot daily with the principles from this talk.

**If they dig deeper:** My short list: (1) GitHub's "How to use GitHub Copilot" docs — practical and up-to-date. (2) The `copilot-instructions.md` examples in GitHub's public documentation — great starting templates. (3) OpenAI's "Prompt Engineering Guide" — the principles transfer directly to Copilot. (4) Anthropic's "Prompt Engineering" documentation — excellent on the concept of giving constraints and context. (5) Follow @githubnext on Twitter/X for previews of new Copilot features. For books, "Co-Intelligence" by Ethan Mollick is the best non-technical overview of working with AI. And honestly, the best resource is practice — use Copilot every day for two weeks with the principles from this talk, and you'll learn more than any guide can teach you.

**Bridge back to your talk:** All of these resources reinforce the same core ideas: be specific, give context, and set constraints. If you remember nothing else from today, remember those three things.

---

## Tough Questions Playbook

When you get a curveball question you weren't expecting, use these strategies:

### Strategy 1: Acknowledge, Reframe, Bridge
"That's a really important consideration. The way I think about it is [reframe to your key message]. For example..."

Works for: questions that are valid but framed negatively.

### Strategy 2: Zoom Out
"Let me step back and give you the broader picture, because I think that answers your question and then some..."

Works for: narrow or gotcha questions where the bigger context is more useful than a direct answer.

### Strategy 3: Honest Deferral
"I want to give you an accurate answer, not a guess. Let me pull that data and follow up with you directly this week."

Works for: specific numbers, metrics, or comparisons you don't have at hand.

### Strategy 4: Redirect to Experience
"I haven't seen formal data on that, but here's what I've observed working with these tools daily for the past year..."

Works for: questions where anecdotal evidence is more credible than statistics you don't have.

### Strategy 5: Turn It Around
"That's a great question — what's your team's experience been? ... Interesting — here's what I've seen that might complement that..."

Works for: questions from people who actually have relevant experience and want to share it.

### Don'ts
- Don't get defensive, even if the question feels like an attack — assume good intent.
- Don't make up statistics — audiences trust you more when you admit uncertainty.
- Don't dismiss concerns — acknowledge them genuinely before reframing.
- Don't get pulled into tool-vs-tool debates — bridge back to the principles being transferable.

---

## If You Get Stuck

When you need a moment to think, use these phrases naturally:

1. **"That's a great question — let me think about the best way to answer that."** Buys you 5-10 seconds and signals that you're taking the question seriously.

2. **"I've seen different perspectives on that. The one I keep coming back to is..."** Gives you space to formulate your answer while acknowledging complexity.

3. **"Let me make sure I'm answering the right question — are you asking about [X] or [Y]?"** Buys significant time by asking them to clarify, and ensures you give a relevant answer.

4. **"You know, I was just reading about this — let me share what I found most useful..."** Gives you a frame for sharing partial knowledge without overpromising.

---

## Questions to ASK the Audience

Use these to create engagement, take the pressure off yourself, and gather intelligence about what the audience actually cares about.

### Opener (use early to set a collaborative tone)
**"Quick show of hands — how many of you have used Copilot, ChatGPT, or any AI coding tool even once? And how many of you use it daily?"**
*Why it works:* Maps the room's experience level so you can calibrate. Also normalizes both adoption and non-adoption.

### Mid-Talk (use after demonstrating a principle)
**"For the managers in the room — what's the biggest concern you'd have about rolling this out to your teams?"**
*Why it works:* Gives you real-time intel on objections. You can address them directly, which feels responsive and builds credibility. Also lets skeptics voice concerns early so they're engaged rather than silently resistant.

### Before Q&A (use to transition and prime the pump)
**"If you could change one thing about how your team uses AI tools today — or one thing you'd want before adopting them — what would it be?"**
*Why it works:* Generates discussion topics that feed naturally into Q&A. Often surfaces the real concerns that people are too polite to ask directly.

### Closing / Call to Action
**"Who here has a repo that you'd be willing to pilot `copilot-instructions.md` in this week? I'll personally help you set it up."**
*Why it works:* Creates immediate commitment. A public hand-raise is psychologically powerful for follow-through. And offering personal help lowers the barrier to zero.
