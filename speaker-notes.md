# Speaker Notes: Prompt Engineering That Actually Works

**Presenter:** Alex Carroll, Tech Engineer, AI CoP
**Audience:** Managers and VPs (preview presentation)
**Date:** April 9, 2026
**Format:** 12 slides, ~15 minutes total (no live demo)
**Tone:** Conversational but authoritative. Practitioner, not salesperson.

---

## Pacing Checkpoints

| Checkpoint | Slide | Target Time |
|---|---|---|
| Finished hook + bad prompt | Slide 3 | ~3 min |
| Finished building blocks + constraints | Slide 5 | ~6 min |
| Finished engineered prompt (SLOW DOWN) | Slide 6 | ~8 min |
| Finished APE + copilot-instructions | Slide 8 | ~10.5 min |
| Finished Stop Bolting AI On (SLOW DOWN) | Slide 9 | ~12.5 min |
| Starting Q&A | Slide 12 | ~14.5 min |

## Slides Flagged for Maximum Impact

- **Slide 6** -- The Engineered Prompt. This is the visual proof. The before/after that makes the abstract concrete. Slow down. Let them read. Let the comparison do the work.
- **Slide 9** -- Stop Bolting AI On. This is the meta-lesson and the mindset shift. The one thing they remember a week later. Take your time here.
- **Slide 10** -- The Compound Effect. This is the business case. Speak directly to their role as leaders. Let the scaling math land.

---

## Pre-Talk Notes

**Ice-breaker (15 seconds max):** "Quick show of hands -- how many of you have used an AI tool this week and been genuinely happy with the first thing it gave you? [pause, scan room] Right. Let's fix that."

**Energy note:** Start at 80%. You're not selling AI. You're showing people who already bought AI how to actually get value from it. Stay grounded.

---

## Slide 1: Title

**"Prompt Engineering That Actually Works"**
*Alex Carroll | Tech Engineer | AI CoP | April 9, 2026*

**Key message:** This talk is practical, not theoretical. Fifteen minutes, no fluff.

**Talking points:**
- "Thanks for making time. I know 'prompt engineering' sounds like another AI buzzword, so let me set one expectation: everything I'm showing you, my team and I use daily. This is practitioner technique, not theory."
- "Fifteen minutes. You'll leave with things you can use today."

**Transition:** "Let's start with the uncomfortable truth."

**Timing:** ~1 minute

---

## Slide 2: The Hook

**"The model isn't the bottleneck."** [pause] **"The prompt is."**
*(Fragment reveal on "The prompt is.")*

**Key message:** We keep upgrading models when the real problem is how we talk to them.

**Talking points:**
- "Every few months there's a new model. And every time, the conversation is 'this one is finally smart enough.' But the engineers who were getting bad output before are still getting bad output."
- "The model is not the bottleneck. The prompt is. And that's actually great news -- because we control the prompt."
- [Let the reframe land for a beat]

**Transition:** "Here's what that looks like in practice."

**Timing:** ~1 minute

---

## Slide 3: What Most Developers Do

**Bad prompt:** "Write a React component for a product card"
**Bad output:** `any` types, inline styles, default export, `console.log` left in.
**Bottom line:** "Now you retry. And retry again. 3 premium requests burned -- and you restart the thread each time, losing context."

**Key message:** This is the default behavior. No judgment -- it's universal until you learn otherwise.

**Talking points:**
- "Six-word prompt, zero context. The output is technically a product card. It's also completely generic and unusable in any real codebase."
- "Look at the output -- `any` types, inline styles, console.log statements. This is what the model gives you when you give it nothing to work with."
- "So what does the developer do? They restart the thread. Try again with slightly different words. Three premium requests burned, zero usable output, and they've thrown away all conversation context each time."
- "This is the most expensive pattern in AI-assisted development. Not because of the tool cost -- because of the time cost."

**Transition:** "So how do we fix it? It starts with five building blocks."

**Timing:** ~1.5 minutes

---

## Slide 4: The 5 Building Blocks

**Role. Context. Constraints. Format. Examples.**
*(Fragment animation -- each pillar builds up one at a time)*

**Key message:** Every effective prompt uses some combination of these five elements.

**Talking points:**
- "Five building blocks. Role. Context. Constraints. Format. Examples. That's the whole framework."
- "You don't need all five every time. But knowing they exist means you can diagnose why a prompt isn't working. Bad output? Check which building block you're missing."
- "Think of them like controls on a mixing board. Role sets the expertise level. Context gives background. Constraints narrow the space. Format controls the shape. Examples show what good looks like."
- "I'm going to zoom into the one that creates the biggest shift with the least effort."

**Transition:** "Constraints. The secret weapon."

**Timing:** ~1.5 minutes

---

## Slide 5: Constraints -- The Secret Weapon

**"Do NOT:" list on screen.**
**"Constraints narrow the output space faster than positive instructions."**
**Creative brief analogy.**

**Key message:** Telling the model what NOT to do is often more powerful than telling it what to do.

**Talking points:**
- "Constraints are the most underused and most powerful lever in prompt engineering."
- "The insight: it's easier to narrow a space than to describe exactly what you want in it. Think about a creative brief. 'Make it pop' gets you chaos. 'Two colors max, no gradients, must work at 16px' gets you focused, excellent work."
- "Same principle. 'Do not use any types. No inline styles. No default exports. No console.log. Must support keyboard navigation.' Now the model can't give you generic garbage -- the constraints won't let it."
- "When output isn't right, before you rewrite the whole prompt -- just add constraints."

**Transition:** "Now let me show you what happens when you put all the building blocks together."

**Timing:** ~1.5 minutes

---

## Slide 6: The Engineered Prompt

> **SLOW DOWN. This is the visual proof. Give the audience time to read and compare.**

**Full engineered prompt on screen:** role, typed props, Tailwind, accessibility, constraints, format.
**Tagline:** "Same model. Same task. Radically different output."

**Key message:** The only variable that changed is the prompt. The capability was always there.

**Talking points:**
- "Same model. Same task. Product card component. The only thing that changed is the quality of the instruction."
- [Pause 10-15 seconds -- let them read the prompt and the output side by side]
- "The left gives you tutorial-quality code. The right gives you a TypeScript component with proper typing, accessibility attributes, your design patterns, error handling."
- "Nobody upgraded to a premium tier. Nobody changed a model setting. The prompt is the variable."
- [Let this land] "And here's what should excite you as leaders: this is a teachable skill. It's not talent. It's technique."

**Transition:** "Let me show you a simple framework that makes this repeatable for any developer."

**Timing:** ~2 minutes

---

## Slide 7: The APE Framework

**Action / Purpose / Expectation**
**Bad:** "Fix this function"
**APE:** "Refactor fetchProducts to support cursor-based pagination [Action], so the product listing page can handle 10k+ SKUs without performance degradation [Purpose]. Return paginated results with hasNextPage and cursor fields, preserve the existing function signature, add JSDoc [Expectation]."
**Tagline:** "One well-structured APE prompt replaces three vague ones."

**Key message:** APE is a three-second mental checklist that works with any AI tool.

**Talking points:**
- "APE: Action, Purpose, Expectation. What do you want done, why, and what does good look like."
- "Bad prompt: 'Fix this function.' Good prompt: the APE version you see here. Same intent. One gives the model nothing. The other gives it everything it needs."
- "APE is dead simple to teach, easy to remember, and it works across Copilot, Claude, ChatGPT -- any tool."
- "One well-structured APE prompt genuinely replaces three vague attempts. That's not a slogan -- that's the math on premium requests."

**Transition:** "Everything so far is individual. One developer, one prompt. What if you could bake this into your team's workflow permanently?"

**Timing:** ~1.5 minutes

---

## Slide 8: copilot-instructions.md

**Persistent system prompt for the whole team.**
**Sample file snippet on screen.**
**Tagline:** "New developer joins -- AI output matches your team's standards from day one."

**Key message:** Set it once, benefit on every AI interaction, for every developer, forever.

**Talking points:**
- "copilot-instructions.md is a file in your repo that acts as a persistent system prompt. Every Copilot interaction -- every developer, every session -- automatically includes those instructions."
- "Your component patterns, naming conventions, TypeScript strictness, accessibility rules -- all injected into every AI interaction without anyone having to remember."
- "Think about onboarding. Day one, a new engineer opens Copilot and it already knows your patterns. Their AI suggestions match your codebase from their first hour."
- "This is how you go from 'AI helps individuals' to 'AI enforces team standards.' And it's just a markdown file. Thirty minutes to set up."

**Transition:** "Now I want to step back and talk about the bigger picture -- because there's a trap most teams fall into with AI."

**Timing:** ~1.5 minutes

---

## Slide 9: Stop Bolting AI On

> **SLOW DOWN. This is the mindset shift. The meta-lesson. Take your time.**

**Two columns:**
- **"What Most Teams Do"** -- Take existing workflow. Find the slow step. Ask AI to do it. Wonder why it's underwhelming.
- **"What Actually Works"** -- Step back to the outcome. Rethink the workflow from scratch. Design the process WITH AI as a collaborator.

**Punchline:** "Don't automate the old way. Reimagine the work at a higher level."

**Key message:** The teams getting the most value from AI aren't automating old processes -- they're rethinking the process itself.

**Talking points:**
- "This is the trap I see everywhere. Teams take their existing workflow, find the slow step, and bolt AI onto it. It helps a little. It's underwhelming. And then they conclude AI is overhyped."
- "The teams getting real value are doing something different. They're stepping back to the outcome -- not the process -- and asking 'if I were designing this from scratch with AI as a collaborator, what would this look like?'"
- "It's the difference between using AI to write boilerplate faster and using AI to eliminate the need for boilerplate entirely. Different abstraction level. Different question."
- [Pause] "Don't automate the old way. Reimagine the work at a higher level. That's the meta-lesson of this entire talk."
- "Better prompts are step one. Rethinking how you approach the problem -- that's where the real leverage lives."

**Transition:** "And when you combine better prompts with better thinking, the effect compounds."

**Timing:** ~2 minutes

---

## Slide 10: The Compound Effect

> **SLOW DOWN. This is the business case. Speak directly to their role as leaders.**

**Three cards (fragment animation):** Individual / Team / Organization

**Key message:** This isn't about making developers faster. It's about making them consistently effective.

**Talking points:**
- "One developer with better prompts saves maybe 30 minutes a day. Fewer restarts, better first-pass output. Nice, but not transformative."
- "A team of ten all using these techniques? That's 25+ recovered hours a week. More than half an engineer's worth of capacity. Every week."
- [Pause] "An organization where every team has copilot-instructions.md, where APE is part of onboarding, where people are rethinking workflows instead of bolting AI on? That's a different kind of company."
- "And here's the key for this group: this doesn't require a new tool purchase. No platform migration. No headcount. It requires education and adoption of techniques."
- "The tools are already paid for. The models are already capable. The only variable left is how well our people use them."

**Transition:** "Let me bring it together."

**Timing:** ~1.5 minutes

---

## Slide 11: Key Takeaways + CTA

**Three takeaways (fragment animation):**
1. **Engineer, don't ask.** Prompts are specifications, not questions.
2. **Constraints are your highest-leverage tool.** When output isn't right, add constraints first.
3. **Scale with copilot-instructions.md.** Individual skill is great. Team-wide standards embedded in tooling is sustainable.

**CTA:** "Try today: Add a copilot-instructions.md to one repo. Use APE on your next prompt."

**Closing line:** "The model is already good enough. Your instructions are the variable."

**Key message:** Three things to remember. Two things to do today. One truth to internalize.

**Talking points:**
- "If you remember nothing else -- these three."
- "One: engineer, don't ask. Prompts aren't questions. They're specifications. The more precise the spec, the more precise the output."
- "Two: constraints are your highest-leverage tool. When the output isn't right, don't rewrite the whole prompt. Add constraints. Tell the model what not to do."
- "Three: scale with copilot-instructions.md. Individual skill matters. Team-wide standards baked into the tooling is how you make it sustainable."
- "Two things you can do literally today. Add a copilot-instructions.md to one repo. Use APE on your next prompt."
- [Final beat] "The model is already good enough. Your instructions are the variable."

**Transition:** "That's everything. Let's open it up."

**Timing:** ~1.5 minutes

---

## Slide 12: Q&A

**"Questions?"**
*Alex Carroll | Tech Engineer | AI CoP*

**Key message:** Alex is an open book. No question is too basic or too skeptical.

**Timing:** Remaining time

---

## Q&A Prep Notes

**"How do we measure the impact?"**
Short answer: Track thread restart rates, time-to-resolution on AI-assisted tasks, and developer satisfaction surveys. If teams are restarting fewer threads and spending less time rewriting AI output, that's signal. Prompt quality itself is hard to measure directly, but the downstream effects aren't.

**"Is this just for developers?"**
Short answer: No. The building blocks and APE work for anyone using AI -- PMs writing specs, designers describing interactions, analysts writing queries. The principles are universal. The examples today are engineering-focused, but the framework transfers.

**"Won't the models just get better and make this unnecessary?"**
Short answer: Models will get better at understanding vague prompts, yes. But the gap between a specific prompt and a vague one will always exist. Better models make good prompts even more powerful. It's like asking "will cars get good enough that you don't need to steer?"

**"How do we roll this out to teams?"**
Short answer: Start with copilot-instructions.md in one repo -- that's 30 minutes. Then share APE as a team norm. The AI CoP can support workshops and team-specific setup. Happy to follow up with anyone here on specifics.

---

## Delivery Notes

**If running long (past 12 min at slide 10):**
- Compress slide 10 (Compound Effect) to just the punchline: "One developer saves minutes. A team saves hours. An org changes its velocity. And it requires zero new tool purchases."
- On slide 11, deliver the three takeaways without expanding on each. Just read them and land the closing line.

**If running short (at slide 10 by 10 min):**
- Expand slide 9 (Stop Bolting AI On) with a concrete example: "Instead of using AI to write unit tests faster, step back and ask -- what if AI helped you design the API so it's testable by default?"
- Spend more time on slide 10 by adding: "And one more thing -- this compounds over time. The team that starts today is six months ahead of the team that starts in six months."

**Breath moments:**
- After slide 6 (The Engineered Prompt) -- natural exhale after the big proof point
- After slide 9 (Stop Bolting AI On) -- let the mindset shift settle
- After the closing line on slide 11 -- don't rush into Q&A. Let the room sit with it for two seconds.

**What to cut if you're in real trouble (5 minutes left at slide 7):**
- Skip slide 8 (copilot-instructions.md) -- mention it verbally in the takeaways instead
- Collapse slides 9 and 10 into one: "The teams winning aren't just writing better prompts -- they're rethinking their workflows. And that effect compounds from individual to team to org."

**Confidence note:** You built this from real daily practice. If a question catches you off guard, say "Great question -- let me think on that and follow up with you directly." You don't have to know everything live. You just have to know more than the room, and you do.
