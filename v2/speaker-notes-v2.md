# Speaker Notes: Prompt Engineering That Actually Works v2

**Presenter:** Alex Carroll, Tech Engineer, COSY Team
**Audience:** All engineering at lululemon (front-end, back-end, mobile, platform, QA)
**Date:** April 2026
**Format:** 16 slides, ~30 minutes talk + live demos, 1-hour slot (remaining time Q&A)
**Tone:** Confident practitioner. You've done this daily for months. Show, don't sell.

---

## Pre-Talk Notes

**Ice-breaker (15 seconds):** "Quick show of hands -- who here has used an AI tool this week and been genuinely happy with the first thing it gave you?" [scan the room, let the sparse hands speak for themselves] "Yeah. Let's fix that."

**Energy level:** Start at 85%. This is a bigger room than the leadership preview -- match the energy to the space. You're not pitching AI adoption. Everyone already has the tools. You're showing them how to stop wasting time with those tools.

**Audience read tips:**
- Engineers are skeptical by default. Good. Your demos will do the convincing -- not your slides.
- Watch for nods during the building blocks and constraint slides. That tells you the framework is landing.
- If you see people opening laptops during a demo, they're trying it themselves. That's a win.
- Back-end and platform engineers may feel the examples are too front-end. The APE framework and constraints slides are universal -- lean into those.

**30 seconds before you start:** One deep breath. Feet planted. You built this from daily practice. You're not performing -- you're teaching people what you already know.

---

## Slide 1: Title

**"Prompt Engineering That Actually Works -- Live Demo Edition"**
*Alex Carroll | COSY Team | AI CoP*

**Key message:** This is a live demo talk. Everything you see is real, unscripted, happening in front of you.

**Talking points:**
- "Thanks for being here. I'm Alex, I'm on the COSY team, and I've spent the last several months figuring out what actually moves the needle with AI-assisted development."
- "This is not a slide deck about AI. This is four live demos with some slides in between. By the end, you'll watch the same model go from useless to indispensable -- and the only variable that changes is the prompt."
- "Thirty minutes. Everything is practical. You'll leave with things you can use today."

**Transition:** "Let's start with the uncomfortable truth."

**Timing:** ~1 minute

---

## Slide 2: The Hook

**"The model isn't the bottleneck. The prompt is."**

**Key message:** We keep waiting for better models when the real leverage is how we talk to them.

**Talking points:**
- "Every few months there's a new model. GPT-5, Claude 4, Gemini Ultra, whatever. And every time, the conversation is 'this one is finally smart enough.' But the engineers who were getting bad output before? Still getting bad output."
- "The model is not the bottleneck." [beat] "The prompt is."
- "And that's actually great news -- because the prompt is the one thing we fully control."

**Transition:** "Here's what the next thirty minutes look like."

**Timing:** ~1 minute

---

## Slide 3: What We're Building Today

**Preview of the demo arc: blank slate -> engineered prompt -> iterative build -> team scaling.**

**Key message:** This talk has a narrative arc. By the end, you'll see the full progression from zero to team-wide impact.

**Talking points:**
- "Four demos, four levels. First, I'll show you what happens when you give an AI nothing to work with. Then we'll engineer a real prompt and see the difference. Then we'll build something iteratively in one thread. And finally, we'll see how one file scales all of this across a team."
- "Same model, same tool -- GitHub Copilot -- the entire time. The only thing that changes is the quality of the instruction."
- "Let's start with the blank slate."

**Transition:** "Demo one. No preparation. No structure. Just vibes." [switch to Copilot]

**Timing:** ~1 minute

---

## Slide 4: DEMO 1 -- The Blank Slate

**Live demo. Vague prompt -> bad output.**

**Key message:** This is what most developers do, and this is why they think AI is overhyped.

**What to type:**
```
Write a React component for a product card
```

**What to say while typing:**
- "Six words. No context. This is the prompt most of us start with -- and I'm not judging, I did this for months."

**What to point out in the output:**
- "Look at what we got back. JavaScript, not TypeScript. Inline styles. `any` types or no types at all. Default export. Maybe a `console.log` left in. Comments like 'This is the product card component' -- thanks for that."
- "This is technically a product card. It's also completely unusable in any real codebase. You'd spend more time refactoring this than you saved."
- "And what does the developer do now? They clear the chat. Start over. Try again with slightly different words. Three premium requests burned, zero usable code."

**How to handle silence while waiting for output:**
- If output is generating: "Watch what it reaches for first. No TypeScript. No Tailwind. No accessibility. It's guessing because we gave it nothing."
- If it's fast, just let it land and then walk through the issues.

**Recovery if something goes wrong:**
- If Copilot is slow: "While we wait -- this is actually a good preview. The model is thinking hard about what you want because you told it nothing. That uncertainty costs time on both sides."
- If the output is accidentally decent: "Okay, it got lucky. But notice -- no types, default export, no accessibility. In a real codebase, you're still refactoring. Let me show you what happens when we actually tell it what we want."

**Transition:** "So why is the output bad? Because we gave it no information. Let's fix that. There are five building blocks to a good prompt."

**Timing:** ~3 minutes (including demo)

---

## Slide 5: The 5 Building Blocks

**Role. Context. Constraints. Format. Examples.**
*"Every good prompt answers five questions: Who are you? What's the context? What should you do? What should you NOT do? What does done look like?"*

**Key message:** Five levers. You don't need all five every time, but knowing they exist lets you diagnose any bad output.

**Talking points:**
- "Five building blocks. Role, Context, Constraints, Format, Examples. That's the whole framework."
- "Think of them like controls on a mixing board. Role sets the expertise level. Context gives background -- your stack, your codebase, what exists already. Constraints narrow the output space. Format controls the shape of the response. Examples show what good looks like."
- "You don't need all five every time. But when output isn't right, check which one you're missing. Bad types? You skipped context. Generic code? No constraints. Wrong structure? No format specified."
- "I'm going to zoom into the one that creates the biggest shift with the least effort."

**Transition:** "Constraints. This is the secret weapon."

**Timing:** ~1.5 minutes

---

## Slide 6: Constraints -- The Secret Weapon

**"Do NOT" is more powerful than "do this." Creative brief analogy.**

**Key message:** Telling the model what NOT to do narrows the output space faster than any positive instruction.

**Talking points:**
- "Constraints are the most underused and most powerful lever in prompt engineering."
- "Here's the insight: it's easier to close doors than to describe the one room you want. Think about a creative brief. 'Make it pop' gets you chaos. 'Two colors max, no gradients, must work at 16px' gets you focused, excellent work."
- "Same principle applies. 'Do not use any types. No inline styles. No default exports. No console.log. Must support keyboard navigation.' Now the model can't give you generic garbage -- the constraints won't let it."
- "When the output isn't right, before you rewrite the whole prompt -- just add constraints. It's the highest-leverage edit you can make."

**Transition:** "Let me prove it. Same task. Same model. This time, with all five building blocks."

**Timing:** ~1.5 minutes

---

## Slide 7: DEMO 2 -- The Engineered Prompt

**Same task, full building blocks applied. Dramatic improvement.**

**Key message:** Same model, same task. The only variable that changed is the prompt. The capability was always there.

**What to type (or paste -- it's fine to paste a prepared prompt in a demo):**
```
You are a senior React engineer on a team that uses TypeScript, Tailwind CSS, and Next.js 14 with the App Router.

Create a ProductCard component that displays:
- Product image (with blur placeholder)
- Product name
- Price (formatted as CAD currency)
- Color swatches (max 5 visible, "+N more" overflow)
- "Add to Bag" button

Technical requirements:
- TypeScript with explicit prop types (no `any`, no type assertions)
- Tailwind CSS for all styling (no inline styles, no CSS modules)
- Named export only (no default exports)
- Accessible: alt text on images, button has aria-label, color swatches announce their color to screen readers
- Component must accept an `onAddToBag` callback with the product ID
- Use `const` and arrow functions exclusively
- No explanatory comments -- the code should be self-documenting
- Props destructured on their own line

File structure:
- product-card/product-card.tsx (component)
- product-card/index.ts (barrel export)
```

**What to say while typing/pasting:**
- "Same task -- product card. But now I'm giving it role, context, every constraint, and the output format I need."
- If pasting: "I'm pasting this in because in real life, you'd have this saved or in your copilot-instructions file. Nobody types this from scratch every time."

**What to point out in the output:**
- "Look at the difference. TypeScript with a clean `ProductCardProps` interface. Tailwind utilities throughout. Named export. Proper alt attributes, aria-labels, screen reader support for the color swatches. `Intl.NumberFormat` for currency. Barrel export included."
- "This drops into a codebase. Zero refactoring. First try."
- "Same model. Same task. The only variable was the quality of the instruction."
- [Let this land for 2-3 seconds]
- "And here's what matters most: this is a teachable skill. Not talent. Technique."

**How to handle silence while waiting for output:**
- "Watch how it handles the constraints. It won't reach for inline styles because we told it not to. It won't skip accessibility because we specified exactly what we need."

**Recovery if something goes wrong:**
- If the output misses something: "See, it missed [X]. In a real workflow, I'd follow up in the same thread: 'You missed the aria-label on the swatches -- fix that.' That's iteration, not restarting. We'll cover that in demo three."
- If Copilot hangs: "The longer prompt gives the model more to work with, which sometimes takes a beat. In practice, this one well-structured prompt replaces three vague attempts, so the net time is lower."

**Transition:** "So we've got the building blocks. But remembering all five every time? Nobody does that. Let me give you a shortcut."

**Timing:** ~4 minutes (including demo)

---

## Slide 8: The APE Framework

**Action / Purpose / Expectation.**
*"Three seconds of thought. Three fewer retries."*

**Key message:** APE is a three-second mental checklist that works with any AI tool, every time.

**Talking points:**
- "APE: Action, Purpose, Expectation. What do you want done? Why does it matter? What does done look like?"
- "Bad prompt: 'Fix this function.' APE version: 'Refactor fetchProducts to support cursor-based pagination [that's the Action], so the product listing can handle 10k+ SKUs without performance degradation [that's the Purpose]. Return paginated results with hasNextPage and cursor fields, preserve the existing function signature, add JSDoc [that's the Expectation].'"
- "The Purpose is the part most people skip. But it's what lets the model make the right architectural decisions. Without knowing WHY the function is timing out, the model just slaps `limit: 50` on it and calls it a day."
- "APE works across Copilot, Claude, ChatGPT -- any tool. Three seconds of thought. Three fewer retries."

**Transition:** "Everything so far has been about individual prompts. One developer, one interaction. Now I want to step back and talk about a trap most teams fall into."

**Timing:** ~1.5 minutes

---

## Slide 9: Stop Bolting AI On

> **SLOW DOWN. This is the mindset shift. The meta-lesson. Take your time here.**

**Two columns: Old Way vs. New Way.**

**Key message:** The teams getting the most value from AI aren't automating old processes -- they're rethinking the process itself.

**Talking points:**
- "This is the trap I see everywhere. Teams take their existing workflow, find the slow step, and bolt AI onto it. And it helps a little. It's underwhelming. And then they conclude AI is overhyped."
- "The teams getting real value? They're doing something fundamentally different. They're stepping back to the outcome -- not the process -- and asking 'if I were designing this from scratch with AI as a collaborator, what would it look like?'"
- [Pause. Let this breathe.]
- "It's the difference between using AI to write boilerplate faster and using AI to eliminate the need for boilerplate entirely. Different abstraction level. Different question."
- "Don't automate the old way. Reimagine the work at a higher level."

**Transition:** "Let me make this concrete."

**Timing:** ~2 minutes

---

## Slide 10: The New Workflow in Practice

**Three concrete workflow shift examples.**

**Key message:** These are real before/after workflow changes that every engineer in this room can apply.

**Talking points:**
- "Here's what this looks like in practice."
- "Old way: write code, then ask AI to write tests. You get generic tests that don't actually cover your edge cases. New way: describe the behavior you need upfront -- AI generates implementation AND tests together, coherently."
- "Old way: write a PR, ask AI to review, get back 'looks good, consider adding types.' New way: define your review criteria -- type safety gaps, accessibility violations, state management issues -- AI does a focused review that actually catches real bugs."
- "Old way: scaffold a project manually, ask AI to fill in the gaps, get inconsistent patterns across files. New way: copilot-instructions.md plus a structured prompt -- consistent output from line one. Which brings us to our next demo."

**Transition:** "Let me show you what iterative building actually looks like inside a single Copilot thread."

**Timing:** ~2 minutes

---

## Slide 11: DEMO 3 -- Building a Project

**Iterative build. 3 messages building on each other in one Copilot thread.**

**Key message:** Three messages in one thread beats three separate conversations every time.

**What to type -- Message 1:**
```
Create a ProductSearch component with:
- Debounced text input (300ms delay)
- Fetches results from /api/products/search?q=
- Displays results in a dropdown below the input
- Clicking a result calls onSelect(product)
- TypeScript, Tailwind, named export
```

**What to say while typing Message 1:**
- "Starting simple. Core functionality only. I'm not trying to do everything at once."

**What to point out after Message 1 output:**
- "Clean, focused component. Search works, results render, selection fires. Now here's the key -- I'm staying in this thread."

**What to type -- Message 2:**
```
Now add full accessibility:
- Keyboard navigation (arrow keys to move, Enter to select, Escape to close)
- ARIA combobox pattern (role, aria-expanded, aria-activedescendant)
- Screen reader: announce result count when results load
- Focus management: return focus to input after selection
```

**What to say while typing Message 2:**
- "Second pass: accessibility. The model already knows the component structure, the types, the naming patterns. I don't have to re-explain any of it."

**What to point out after Message 2 output:**
- "It surgically added the ARIA attributes and keyboard handlers onto the existing component. Didn't rewrite it. Didn't change the types. Built on top of what was already there."

**What to type -- Message 3:**
```
Add loading, error, and empty states:
- Loading: skeleton UI matching result item dimensions (not a spinner)
- Error: inline message with retry button (not a toast)
- Empty: "No products found for '[query]'" with suggestions
- All states announced to screen readers via aria-live
```

**What to say while typing Message 3:**
- "Third pass: polish. Loading, error, empty states. Notice I'm specifying what I DON'T want -- not a spinner, not a toast. Constraints."

**What to point out after Message 3 output:**
- "Three messages, one thread. Each built on the last. The skeleton dimensions match the actual result items because the model remembers what it built. The aria-live regions work because it knows the existing ARIA structure."
- "If I'd done these as three separate conversations? Three completely different components. Manual merge required. More time, worse result."

**How to handle silence while waiting:**
- Between messages: "The context window is doing the heavy lifting here. Everything from the first message is still available. Types, patterns, naming -- all carried forward."
- During generation: "Watch how it integrates the new code. It's not starting from scratch -- it's adding to what exists."

**Recovery if something goes wrong:**
- If output has issues: "Perfect example of iteration. Instead of restarting, I'd say 'The skeleton heights don't match the result items -- fix that.' One follow-up, not a new conversation."
- If Copilot loses context: "This is rare, but if the thread gets too long, that's when copilot-instructions.md saves you -- it carries your baseline context even in a fresh thread. Let's talk about that."

**Transition:** "Three messages, one coherent component. But here's the thing -- I knew what constraints to apply, what patterns to follow. What about the rest of the team?"

**Timing:** ~5 minutes (including demo)

---

## Slide 12: copilot-instructions.md -- The Team Multiplier

**What it is, where it lives, real example snippet.**
*"Set it once. Every developer. Every interaction."*

**Key message:** This is how you go from "one developer writes good prompts" to "the whole team gets good output by default."

**Talking points:**
- "copilot-instructions.md is a file in your repo -- `.github/copilot-instructions.md` -- that acts as a persistent system prompt. Every Copilot interaction, every developer, every session, automatically includes those instructions."
- "Your component patterns, naming conventions, TypeScript strictness, accessibility rules, error handling approach -- all injected into every AI interaction. Nobody has to remember to specify them."
- "Think about onboarding. Day one, a new engineer opens Copilot and it already knows your patterns. Their AI output matches your codebase from hour one."
- "This is how you go from 'AI helps individuals' to 'AI enforces team standards.' And it's just a markdown file. Thirty minutes to set up."
- "Let me show you."

**Transition:** "Demo four. This is the one." [switch to Copilot]

**Timing:** ~1.5 minutes

---

## Slide 13: DEMO 4 -- The Instructions File

> **THIS IS THE MOMENT. The climactic demo. Make it land.**

**Clear chat. Add instructions file. Simple prompt -> quality output.**

**What to do:**
1. Clear the Copilot chat completely. Fresh thread.
2. Show the copilot-instructions.md file briefly -- let people see it's just markdown.
3. Type a deliberately simple prompt.

**What to type:**
```
Create a content type migration for a BlogPost model with title, slug, body, author reference, and publishDate.
```

**What to say while setting up:**
- "Watch this. I'm clearing the chat completely. Fresh thread. No history. No building blocks in my prompt."
- "But this repo has a copilot-instructions.md file." [show it briefly] "It's just markdown. Stack, naming conventions, code rules, testing patterns. About 40 lines."
- "Now I'm going to type a simple prompt. No role. No constraints. No format specification. Just the task."

**What to point out in the output:**
- "Look at what came back from a one-line prompt. TypeScript. kebab-case file name. camelCase field IDs. Validations on every field -- title required, slug unique with regex. Rich text for body. Display field set. Editor interface configured with help text. A down function for rollback."
- "Every convention followed. From a one-line prompt. Because the instructions file did the heavy lifting."
- [Beat. Let the room process this.]
- "Now imagine this across a team of ten. Nobody has to be a prompt engineering expert. The file does it for them."

**How to handle silence while waiting:**
- "The model is reading the instructions file right now. It knows our stack, our patterns, our constraints -- before I typed a single word of context."

**Recovery if something goes wrong:**
- If output misses conventions: "See -- it missed [X]. That tells me the instructions file needs that rule added. But everything else? Perfect from a one-line prompt. The file is doing 90% of the work."
- If Copilot doesn't pick up the file: "The instructions file needs to be at `.github/copilot-instructions.md` in the repo root. Let me verify the path -- [fix and retry]. This is actually a common gotcha worth knowing."

**Transition:** [Take a breath here. You just delivered the climactic demo.] "That's the progression. Blank slate. Engineered prompt. Iterative build. Team-wide scaling. One file."

**Timing:** ~4 minutes (including demo)

---

## Slide 14: The Compound Effect

**Individual -> Team -> Organization.**
*"25+ recovered hours a week across a team of 10."*

**Key message:** This isn't about speed. It's about consistency at scale.

**Talking points:**
- "One developer with better prompts saves maybe 30 minutes a day. Fewer retries, better first-pass output. Nice, but not transformative."
- "A team of ten, all using these techniques? That's 25+ recovered hours a week. More than half an engineer's capacity. Every week. Without hiring anyone."
- "An organization where every team has copilot-instructions.md, where APE is part of onboarding, where engineers are rethinking workflows instead of bolting AI on? That's a different velocity."
- "And here's the key: this doesn't require a new tool purchase. No platform migration. No headcount. The tools are already paid for. The models are already capable. The only variable is how well we use them."

**Transition:** "Let me bring it together."

**Timing:** ~1.5 minutes

---

## Slide 15: Key Takeaways + CTA

**Five takeaways. One CTA. One closing line.**

**Key message:** Five things to remember. Two things to do today. One truth to internalize.

**Talking points:**
- "If you remember nothing else from this talk -- these five."
- "One: Engineer, don't ask. Prompts are specifications, not questions. The more precise the spec, the more precise the output."
- "Two: Constraints are your highest-leverage tool. When the output isn't right, don't rewrite the whole prompt. Add constraints. Tell the model what NOT to do."
- "Three: Iterate in one thread, don't restart. Three messages in one thread beats three separate conversations. The context window is your most powerful tool."
- "Four: Scale with copilot-instructions.md. Individual skill matters. Team-wide standards baked into the tooling is how you make it sustainable."
- "Five: Rethink the workflow, don't bolt AI on. Step back to the outcome. Design the process with AI as a collaborator, not a faster typist."
- [Beat]
- "Two things you can do literally today. Add a copilot-instructions.md to one repo. Use APE on your next prompt."
- [Final pause. Slower delivery on the closing line.]
- "The model is already good enough. Your instructions are the variable."

**Transition:** Let the closing line sit for 2-3 seconds. Don't rush. Then: "That's everything. Let's open it up."

**Timing:** ~2 minutes

---

## Slide 16: Q&A

**"Questions?"**
*Alex Carroll | COSY Team | AI CoP*

**Key message:** You're an open book. No question is too basic or too skeptical.

**Timing:** Remaining time (~25-30 minutes)

---

## Q&A Prep

**"How do I write a good copilot-instructions.md?"**
Start with your stack (framework, language, styling). Add your naming conventions. Add your "do nots" -- the things you always refactor out of AI output. That's the 80/20. You can iterate on it over time. I can share our team's file as a starting point.

**"Is this just for front-end developers?"**
No. The building blocks, APE, constraints -- all universal. Back-end: specify your ORM, error handling patterns, logging format. QA: specify your test framework, assertion style, coverage expectations. Platform: specify your IaC conventions, naming patterns, security policies. The framework transfers. The examples today are front-end because that's my world, but the principles work everywhere.

**"Won't models get good enough that this doesn't matter?"**
Models will get better at tolerating vague prompts. But the gap between a specific prompt and a vague one will always exist. Better models make good prompts even MORE powerful. It's like asking "will cars get good enough that you don't need to steer?"

**"This feels like a lot of effort for a prompt."**
The engineered prompt takes 30-60 seconds to write. The vague prompt takes 6 seconds. But the vague prompt leads to 3 retries at 6 seconds each plus 10 minutes of refactoring. The math always favors the engineered prompt. And once you have copilot-instructions.md, most of that effort disappears.

**"How do we roll this out across teams?"**
Start small. One repo, one copilot-instructions.md file. Share APE as a team norm -- it's three letters, easy to remember. The AI CoP can support workshops and team-specific setup. I'm happy to pair with anyone on their first instructions file.

**"What about security? Are we sending proprietary code to AI?"**
Copilot for Business has data privacy protections -- your code isn't used for training. The copilot-instructions.md file stays in your repo. But yes, always be thoughtful about what you put in prompts. Don't paste secrets, credentials, or PII.

**"Can you share the demo prompts?"**
Yes. I'll share the full prompt showcase document after the talk. Everything I showed today, plus additional patterns.

---

## Pacing Checkpoints

| Time | Where You Should Be | Notes |
|------|---------------------|-------|
| 5 min | Finishing Demo 1, moving to Building Blocks (Slide 5) | If you're still on Slide 3, pick up the pace on the preview |
| 10 min | Finishing Demo 2, moving to APE (Slide 8) | This is the critical checkpoint. If you're behind, compress APE to 60 seconds |
| 15 min | In the middle of Slide 10 (New Workflow) or starting Demo 3 | If ahead, expand the workflow examples. If behind, cut one workflow example |
| 20 min | Finishing Demo 3, moving to copilot-instructions (Slide 12) | If behind, shorten your demo 3 narration between messages |
| 25 min | Finishing Demo 4, on Compound Effect or Takeaways | If behind, deliver takeaways as a rapid-fire list without expanding each one |
| 30 min | Done. Opening Q&A | If you're at 28 minutes, you're perfect. Don't speed up the closing line |

---

## Delivery Notes

### If Running Long (Behind by 3+ Minutes at the 15-Minute Mark)

**Cut list (in order of priority):**
1. Slide 10 (New Workflow in Practice): reduce to one example instead of three. Use the PR review one -- it's the most universal.
2. Slide 14 (Compound Effect): collapse to one sentence: "One developer saves minutes. A team saves hours. An org changes its velocity. Zero new tool purchases required."
3. Demo 3: reduce from 3 messages to 2. Skip the polish pass (Message 3). Say "In practice, I'd do a third pass for loading and error states. You get the idea -- iteration in one thread."

### If Running Short (Ahead by 3+ Minutes at the 15-Minute Mark)

**Expand list:**
1. Slide 9 (Stop Bolting AI On): add a concrete example: "Instead of using AI to write unit tests faster, step back and ask -- what if I described the behavior and let AI generate implementation and tests together?"
2. Slide 14 (Compound Effect): add the time dimension: "And this compounds over time. The team that starts today is six months ahead of the team that starts in six months. The gap widens."
3. Demo 3: add commentary between messages about what the context window is doing. Talk about why the model's output gets better with each follow-up.

### Breath Moments / Natural Pauses

- **After Demo 1 (Slide 4):** Natural exhale. You just showed the problem. Pause before the building blocks.
- **After Demo 2 (Slide 7):** The big before/after. Let the comparison do the work. 2-3 seconds of silence.
- **After "Don't automate the old way" (Slide 9):** This is the meta-lesson. Let it sit. Don't rush to the next slide.
- **After Demo 4 (Slide 13):** The climactic moment. Breathe. You just proved the entire talk's thesis.
- **After the closing line (Slide 15):** Do NOT rush into Q&A. Two full seconds of silence after "Your instructions are the variable." Let it land.

### Emergency Abort Plan (If Demos Completely Fail)

If Copilot is down or network is dead:

1. **Don't panic.** Say: "Well, live demos -- you knew the risk when you sat down." (Gets a laugh, buys time.)
2. **Switch to screenshots.** Have before/after screenshots of each demo's output saved on your desktop. Show them as static images.
3. **Reframe:** "Let me show you the outputs I got when I ran these earlier today." Walk through the same talking points using the screenshots.
4. **Lean into the irony:** "The model isn't the bottleneck -- apparently the wifi is." Then move on. Nobody will hold it against you.

**Preparation:** Before the talk, run all four demos and screenshot the outputs. Save them in a folder on your desktop called `demo-backup`. This is your insurance policy.

---

## Confidence Boosters

Read these before you go on.

**You built this from daily practice.** Every example in this talk is something you've done. Not something you read about. Not something you theorized. You sat in Copilot, tried things, failed, iterated, and figured out what actually works. That's why it's called "That Actually Works."

**You know more than the room.** Most engineers have used AI tools casually. Very few have systematically studied what makes prompts effective. You have. The building blocks, APE, constraints, instructions files -- this is knowledge most people in that room don't have yet. You're not guessing. You're teaching.

**The demos are your proof.** Slides can be debated. Live demos can't. When the engineered prompt produces dramatically better output than the vague one, the argument is over. The code speaks for itself.

**You don't have to know everything.** If a question catches you off guard, say: "Great question -- let me think on that and follow up with you directly." Or: "I don't have data on that specifically, but here's what I've observed in practice." Nobody expects you to have every answer. They expect you to be honest and thoughtful.

**This is your topic.** Not anyone else's. You've put in the reps. You've refined this talk through a leadership preview. You've built the demos. You know the material cold. Now just deliver it like you're explaining it to a teammate -- because that's exactly what you're doing, at scale.

**Thirty minutes. You've got this.**
