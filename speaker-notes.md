# Speaker Notes: Prompt Engineering That Actually Works

**Presenter:** Alex Carroll, Tech Engineer, AI CoP
**Audience:** Managers and VPs, Lululemon
**Date:** April 9, 2026
**Format:** Preview for leadership (no live demo)
**Total time:** ~35-40 minutes content + 15-20 minutes Q&A

---

## Pacing Checkpoints

| Checkpoint | Slide | Target Time |
|---|---|---|
| Finished the hook + cost slides | Slide 4 | ~8 minutes |
| Finished building blocks | Slide 8 | ~16 minutes |
| Finished patterns section | Slide 13 | ~24 minutes |
| Finished Copilot section | Slide 16 | ~30 minutes |
| Starting Q&A | Slide 20 | ~38 minutes |

## Slides Flagged for Maximum Impact (Slow Down)

- **Slide 4** - The Cost of Vague Prompts (this is where leadership ears perk up)
- **Slide 9** - The Engineered Prompt (the visual proof that this works)
- **Slide 17** - The Compound Effect (the business case that justifies investment)

---

## Pre-Talk Notes

**Ice-breaker suggestion:** "Before we start -- quick show of hands. How many of you have used ChatGPT or Copilot in the last week? Okay, now keep your hand up if you were actually happy with the first thing it gave you. [pause] Right. That gap between 'using AI' and 'getting value from AI' is exactly what we're here to close today. Not with hype -- with technique."

**Energy note:** Start at about 80% energy. You're not selling AI. You're showing people who already bought AI how to actually get their money's worth.

---

## Slide 1: Title Slide

**"Prompt Engineering That Actually Works"**
*Alex Carroll | Tech Engineer | AI CoP | April 9, 2026*

**Key message:** This talk is practical, not theoretical. You will leave with things you can use today.

**Talking points:**
- "Thanks for making time for this. I know 'prompt engineering' can sound like another AI buzzword, so let me set expectations up front."
- "This is not a hype talk. There's no pitch for a new tool or a vendor. This is about getting dramatically better output from the tools we already pay for."
- "Everything I'm showing you today, my team and I use daily. This is practitioner knowledge, not research paper stuff."
- "By the end, you'll understand why some engineers get 10x value from AI tools and others get frustrated and stop using them."

**Transition:** "So let's start with the uncomfortable truth about why most AI interactions disappoint."

**Timing:** ~2 minutes

---

## Slide 2: The Hook

**"The model isn't the bottleneck. The prompt is."**

**Key message:** We keep upgrading models when the real problem is how we talk to them.

**Talking points:**
- "Every few months there's a new model -- GPT-5, Claude 4, Gemini Ultra. And every time, the conversation is 'this one is finally smart enough.' But the engineers who were getting bad output before? They're still getting bad output."
- "The model is not the bottleneck. I'll say it again. The model is not the bottleneck. The prompt is."
- "This is actually great news. Because we can't control what OpenAI or Anthropic ships. But we can absolutely control how we communicate with these tools."
- [Pause -- let this reframe land]
- "Think of it this way: a world-class contractor can build you anything. But if your blueprint is a napkin sketch that says 'make it nice,' you're not going to love what you get."

**Transition:** "And right now, most of our engineering org is handing AI that napkin sketch. Let me show you what I mean."

**Timing:** ~2 minutes

---

## Slide 3: What Most Developers Do

**Lazy prompt example: "Write a React component for a product card"**

**Key message:** This is the default behavior. No judgment -- it's what everyone does until they learn otherwise.

**Talking points:**
- "Here's a prompt I see constantly. 'Write a React component for a product card.' Six words. No context. And honestly, I used to write prompts exactly like this."
- "The output you get from this is... fine. It's a product card. It has a title, a price, an image. It's also completely generic and useless for our codebase."
- "It doesn't know our design system. It doesn't know we use TypeScript. It doesn't know our component patterns. It doesn't know anything about Lululemon."
- "So what does the developer do? They look at the output, go 'that's not right,' and either start manually rewriting it or -- more commonly -- they start a brand new thread and try again with slightly different words."
- "Anyone here seen this pattern?" [Brief audience engagement]

**Transition:** "Now let's talk about what that pattern actually costs us."

**Timing:** ~2 minutes

---

## Slide 4: The Cost of Vague Prompts

> **SLOW DOWN on this slide. This is your VP slide. Let the numbers land.**

**Key message:** Vague prompts aren't just annoying -- they're expensive and they compound.

**Talking points:**
- "Every vague prompt burns a premium request. GitHub Copilot, Claude, ChatGPT -- these aren't free. We're paying per seat, and in some cases per request. A wasted prompt is wasted budget."
- "But here's where it gets worse. When a developer gets bad output, what do they do? They restart the thread. Fresh context, start from scratch. Now you've burned two premium requests to get zero usable output."
- [Pause] "In our own surveys, most developers restart threads multiple times per task. That's not two requests -- that's five, six, seven requests for something that one well-crafted prompt could have handled."
- "So here's the math I want you to take away: **one good prompt replaces three bad ones.** That's not a nice-to-have efficiency gain. At org scale, that's a significant multiplier on the ROI of every AI tool license we're paying for."
- "And it's not just cost. It's time. It's developer frustration. It's the difference between AI being a superpower and AI being a novelty that people stop using after a month."

**Transition:** "So the question becomes: how do we go from asking to engineering? What does a good prompt actually look like?"

**Timing:** ~4 minutes (take your time here)

---

## Slide 5: From Asking to Engineering

**Transition slide**

**Key message:** There is a learnable, repeatable skill here. It's not magic.

**Talking points:**
- "I use the word 'engineering' intentionally. Prompt engineering isn't a gimmick. It's the same discipline we apply to any other technical problem."
- "We don't write code by trial and error. We have patterns, principles, best practices. The same thing exists for prompts, and the gap between someone who knows them and someone who doesn't is enormous."
- "What I'm going to show you next are the five building blocks that turn a vague ask into a precise instruction. These aren't complicated. But they are transformative."

**Transition:** "Let's break it down."

**Timing:** ~1 minute

---

## Slide 6: 5 Building Blocks

**Role, Context, Constraints, Output Format, Examples**

**Key message:** Every great prompt uses some combination of these five elements. Memorize them.

**Talking points:**
- "Five building blocks. Role. Context. Constraints. Output Format. Examples. That's it. That's the framework."
- "You don't need all five every time. But knowing they exist means you can diagnose why a prompt isn't working. Bad output? Check which building block you're missing."
- "Think of these like the controls on a mixing board. Each one shapes the output in a different way. Role sets the expertise level. Context gives background. Constraints narrow the space. Output format controls the shape. Examples show what good looks like."
- "I'm going to zoom in on two of these -- Role and Constraints -- because they're the ones that create the biggest shift with the least effort."

**Transition:** "Starting with Role, because it's the easiest win."

**Timing:** ~2 minutes

---

## Slide 7: Building Block -- Role

**"You are a senior React engineer..." changes everything**

**Key message:** A single sentence of role-setting dramatically changes the quality and sophistication of the output.

**Talking points:**
- "Watch what happens when you start a prompt with 'You are a senior React engineer at an enterprise e-commerce company who prioritizes type safety and accessibility.'"
- "That one sentence does three things. It sets the expertise level -- you're not getting junior developer suggestions anymore. It sets the domain -- e-commerce, not a blog or a todo app. And it sets the values -- type safety and accessibility will be prioritized throughout."
- "The model isn't role-playing for fun. Under the hood, this activates a completely different distribution of knowledge. You're essentially filtering for the best patterns in its training data."
- "This takes five seconds to add to a prompt. The ROI is absurd."

**Transition:** "Now let's talk about the building block that I think is the most underused and the highest leverage."

**Timing:** ~2 minutes

---

## Slide 8: Building Block -- Constraints

**"Constraints narrow output space faster than positive instructions"**

**Key message:** Telling the model what NOT to do is often more powerful than telling it what to do.

**Talking points:**
- "Constraints are the most underused lever in prompt engineering. And they're the most powerful."
- "Here's the insight: it's easier to narrow a space than to describe exactly what you want in it. Think about a creative brief. When you tell a designer 'make it pop,' you get chaos. When you say 'two colors max, no gradients, must work at 16px,' you get focused, excellent work."
- "Same principle. 'Do not use any external libraries. Keep the component under 50 lines. Use only Tailwind utility classes. No inline styles. Must support keyboard navigation.' Now the model can't give you generic garbage -- the constraints won't let it."
- "This is the closest thing to a cheat code I've found. When you're not happy with AI output, before you rewrite the prompt, just add constraints."
- "Raise your hand if you've ever gotten a response from AI that was technically correct but completely wrong for your situation." [Audience engagement] "Constraints fix that."

**Transition:** "So what happens when you put all of these building blocks together? Let me show you the before and after."

**Timing:** ~3 minutes

---

## Slide 9: The Engineered Prompt

> **SLOW DOWN on this slide. This is the visual proof. Give the audience time to read and compare.**

**Full before/after comparison**

**Key message:** Same model, same task, radically different output. The only variable is the prompt.

**Talking points:**
- "Same model. Same task. Product card component. On the left, the six-word prompt we saw earlier. On the right, the engineered prompt with role, context, constraints, and output format."
- [Pause -- give them 10-15 seconds to read the two prompts]
- "Look at the output difference. The left gives you a generic card that could be from any tutorial on the internet. The right gives you a TypeScript component with proper typing, accessibility attributes, our design patterns, error states, loading states."
- "Nobody touched the model settings. Nobody upgraded to a premium tier. The only thing that changed was the quality of the instruction."
- [Let this land] "This is what I mean when I say the prompt is the bottleneck. The capability was always there. We just weren't unlocking it."
- "And here's the thing that should excite you as leaders: this is a teachable skill. It's not talent. It's technique."

**Transition:** "Now I want to show you four specific patterns that go beyond the building blocks -- reusable playbooks your teams can start using immediately."

**Timing:** ~3 minutes

---

## Slide 10: Prompt Patterns Overview

**Few-Shot, Chain-of-Thought, Response Iteration, Role Prompting**

**Key message:** These are the four patterns that cover 90% of real engineering work with AI.

**Talking points:**
- "Four patterns. Few-shot: show the model examples of what you want. Chain-of-thought: make the model reason step by step before writing code. Response iteration: generate, critique, and refine in the same conversation. Role prompting: which we just covered."
- "These aren't theoretical. These are the patterns I use every single day. I'm going to show you the first three quickly, because they're each deceptively simple but incredibly effective."
- "Think of these as tools in a toolkit. Different problems call for different patterns, and sometimes you combine them."

**Transition:** "Let's start with few-shot, because it solves one of the most common complaints about AI: 'it doesn't match our style.'"

**Timing:** ~1.5 minutes

---

## Slide 11: Few-Shot Pattern

**Show don't tell -- API response conversion example**

**Key message:** If you show the model two examples of what you want, the third one will match the pattern.

**Talking points:**
- "Few-shot means: instead of describing the format you want, you show it. 'Here's an API response. Here's how I converted it to our frontend model. Here's a second one. Now do the third.'"
- "This is incredibly powerful for anything involving consistent transformation -- API response mapping, data formatting, test generation, documentation style."
- "The model is exceptional at pattern matching. Two examples is usually enough. Three if the transformation is complex."
- "This is also the pattern that makes AI output match your team's existing code style. Don't describe your style -- show it."

**Transition:** "Next pattern: what if you need the model to think before it codes?"

**Timing:** ~2 minutes

---

## Slide 12: Chain-of-Thought

**Reason before code -- catches edge cases**

**Key message:** Asking the model to think step-by-step before writing code produces dramatically more robust solutions.

**Talking points:**
- "Chain-of-thought is dead simple. You add one line: 'Before writing any code, reason through the edge cases and potential failure modes step by step.'"
- "What happens? The model identifies null checks you didn't think of. It catches race conditions. It considers error states. And then when it writes the code, all of that reasoning is baked in."
- "Without chain-of-thought, the model goes straight to the happy path. With it, you get production-quality thinking."
- "This is especially valuable for anything with business logic, data validation, or state management. Anywhere bugs hide."

**Transition:** "Last pattern, and this one is about breaking a bad habit most of us have."

**Timing:** ~2 minutes

---

## Slide 13: Response Iteration

**Generate, critique, refine -- in the same thread. Don't restart.**

**Key message:** Stop restarting threads. The model gets smarter within a conversation, not dumber.

**Talking points:**
- "Remember the pattern I described earlier -- get bad output, restart the thread, try again? This pattern is the antidote."
- "Instead of restarting: generate the first version, then say 'Now review this for accessibility gaps,' then 'Refactor for performance,' then 'Add error handling for network failures.' Each iteration builds on the last."
- "The model has full context of everything it already generated. When you restart, you throw all of that context away. You're literally making the tool dumber."
- "Three rounds of iteration in one thread will beat five fresh starts every single time. And it's faster."
- "This is the single highest-impact behavior change for most developers. Stop restarting. Start iterating."

**Transition:** "Now let's talk about a framework that ties all of this together into something any developer can remember."

**Timing:** ~2.5 minutes

---

## Slide 14: APE Framework

**Action / Purpose / Expectation -- bad vs. good prompt comparison**

**Key message:** APE is a simple mental checklist: what action, for what purpose, with what expected output.

**Talking points:**
- "APE stands for Action, Purpose, Expectation. It's a three-second mental checklist before you hit enter on any prompt."
- "Action: what do you want the model to do? 'Refactor this function.' Purpose: why? 'To improve testability and reduce coupling.' Expectation: what does good output look like? 'Separate pure logic from side effects, add JSDoc comments, keep the same public API.'"
- "Bad prompt: 'Fix this code.' Good prompt: 'Refactor this authentication middleware to separate token validation from session management, so each concern can be unit tested independently. Preserve the existing Express middleware signature.'"
- "Same intent. One gives the model nothing to work with. The other gives it everything it needs."
- "APE is easy to teach, easy to remember, and it works with any AI tool -- Copilot, Claude, ChatGPT, anything."

**Transition:** "Everything we've covered so far is individual. One developer, one prompt, one session. But what if you could bake this into your team's workflow permanently?"

**Timing:** ~2.5 minutes

---

## Slide 15: copilot-instructions.md

**Persistent system prompt for the whole team**

**Key message:** copilot-instructions.md is a file in your repo that acts as a persistent system prompt for every Copilot interaction. Set it once, benefit forever.

**Talking points:**
- "This is one of the most underutilized features in GitHub Copilot. You add a file called `copilot-instructions.md` to your repo, and every Copilot interaction -- every developer, every session -- automatically includes those instructions as context."
- "Think about what that means. Your component patterns, your naming conventions, your TypeScript strictness rules, your accessibility requirements -- all of that gets injected into every single AI interaction without anyone having to remember to add it."
- "Here's the angle I want you to think about as leaders: new developer onboarding. Day one, a new engineer opens Copilot in your repo and it already knows your patterns, your conventions, your architectural decisions. They get suggestions that match your codebase from their first hour."
- "This is how you go from 'AI helps individuals' to 'AI enforces team standards.'"
- "And it's just a markdown file. Your team can set this up in thirty minutes."

**Transition:** "While we're on Copilot -- let me share a few tips that most developers don't know about."

**Timing:** ~3 minutes

---

## Slide 16: GitHub Copilot Tips

**Slash commands, #file references, scoped context, thread iteration**

**Key message:** Copilot has powerful features most developers never discover. These are the ones worth knowing.

**Talking points:**
- "Quick-fire tips. Slash commands: `/explain`, `/fix`, `/tests` -- these are pre-built prompt patterns that Copilot already supports. Most developers don't know they exist."
- "`#file` references: you can point Copilot at specific files for context. '#file:src/types/product.ts -- generate a form component that uses this type.' Now Copilot has your actual types, not guesses."
- "Scoped context: Copilot looks at your open files. Deliberately open the files you want it to reference before asking. This is cheap, easy, and makes a huge difference."
- "Thread iteration -- exactly the pattern we just discussed. Don't start new Copilot chats. Build on what you have."
- "None of these require a settings change or an upgrade. They work right now in everyone's editor."

**Transition:** "So we've covered individual techniques and team-level tools. Let me zoom out and paint the picture of what this looks like at scale."

**Timing:** ~2.5 minutes

---

## Slide 17: The Compound Effect

> **SLOW DOWN on this slide. This is your second VP slide. This is the business case.**

**Individual to team to org scaling**

**Key message:** Prompt engineering compounds. One developer saves minutes. A team saves hours. An org changes its velocity.

**Talking points:**
- "One developer who writes better prompts saves maybe 30 minutes a day. Fewer restarts, better first-pass output, less manual cleanup. That's nice but it's not transformative."
- "A team of ten developers all using the building blocks and patterns? Now you're saving 25+ hours a week. That's more than half an engineer's worth of recovered capacity. Every week."
- [Pause] "An organization where every engineering team has copilot-instructions.md, where APE is part of your onboarding, where 'don't restart the thread' is cultural? That's a different kind of company."
- "And this is the part I really want to land with this group: this doesn't require a new tool purchase. It doesn't require a platform migration. It doesn't require headcount. It requires education and adoption of techniques -- which is exactly what the AI CoP exists to drive."
- "The tools are already paid for. The models are already capable. The only variable left is how well our people use them."
- [Let this land]

**Transition:** "Let me bring it all together."

**Timing:** ~3.5 minutes

---

## Slide 18: Key Takeaways

**Three points to remember**

**Key message:** If you remember nothing else, remember these three things.

**Talking points:**
- "Three takeaways. That's it. If you forget everything else from today, hold onto these."
- "One: **Engineer, don't ask.** Prompts aren't questions. They're specifications. The more precise your specification, the more precise the output. Full stop."
- "Two: **Constraints are your highest-leverage tool.** When output isn't right, don't rewrite the whole prompt. Add constraints. Tell the model what not to do. This is the fastest path to better output."
- "Three: **Scale with copilot-instructions.md.** Individual skill is great. Team-wide standards embedded in the tooling is how you make this sustainable. Set it up once, benefit on every interaction."
- [Pause] "That's the whole talk in three sentences."

**Transition:** "So what can you do with this starting today?"

**Timing:** ~2 minutes

---

## Slide 19: What's Next / CTA

**Try today: copilot-instructions.md, APE, stop restarting threads**

**Key message:** Three concrete actions anyone can take before end of day.

**Talking points:**
- "I want to leave you with three things you or your teams can do literally today."
- "First: add a `copilot-instructions.md` to one of your repos. Start simple -- just your language, your framework, your component conventions. Iterate from there."
- "Second: use the APE framework on your next prompt. Action, Purpose, Expectation. Three parts. Takes ten seconds."
- "Third: next time AI gives you something that isn't quite right -- don't restart the thread. Iterate. Critique the output. Ask for a specific improvement. You'll be shocked at how much better iteration is than starting over."
- "And one more thing -- on April 9th, I'm doing the full version of this talk with a live demo. You'll see these patterns in action in real time, building real components. I'd love to see all of you there, and I'd especially love for you to encourage your teams to attend."
- "Because here's the thing: this isn't just about making engineers 10% faster. It's about making AI adoption actually stick. And that starts with giving people the skills to get real value from these tools."

**Transition:** "That's everything I have. Let's open it up."

**Timing:** ~2.5 minutes

---

## Slide 20: Q&A

**Key message:** Alex is an open book. No question is too basic or too skeptical.

**Talking points (anticipate these questions):**

**"How do we measure the impact?"**
- "Great question. The honest answer is that prompt quality is hard to measure directly. What you can measure is thread restart rates, time-to-resolution on AI-assisted tasks, and developer satisfaction with AI tools. If your teams are restarting fewer threads and spending less time rewriting AI output, that's signal."

**"Is this just for developers?"**
- "The building blocks and APE framework work for anyone using AI -- PMs writing specs, designers describing interactions, analysts writing queries. The specific patterns like few-shot and chain-of-thought are more engineering-focused, but the principles are universal."

**"What about security / IP concerns?"**
- "Totally valid. copilot-instructions.md doesn't send any proprietary code to external services -- it's instructions that shape Copilot's suggestions. And everything I showed today works within our existing security guardrails. These are techniques for using the tools we've already approved."

**"Won't the models just get better and make this unnecessary?"**
- "Models will get better at understanding vague prompts, yes. But the gap between a specific prompt and a vague one will always exist. Better models make good prompts even more powerful. It's like saying 'will cars get good enough that you don't need to steer?' The tool improves, but the skill of using it well always compounds."

**"How do we roll this out to teams?"**
- "That's exactly what the AI CoP is for. The April 9th full talk with demo is step one. From there, I'd love to work with individual teams on copilot-instructions.md setup and prompt pattern workshops. Happy to discuss specifics after."

**Timing:** ~15-20 minutes

---

## Overall Delivery Notes

- **Total content runtime target:** 35-40 minutes. If you're running long, compress slides 11-13 (the individual patterns) by giving one example instead of full walkthroughs.
- **If you're running short:** Expand on slide 9 (the before/after) with a second example, or spend more time on the Q&A anticipated questions as a "things I get asked a lot" section before opening the floor.
- **Water/breath moments:** After slides 4, 9, and 17. These are your high-impact slides -- a natural breath after each one resets the room.
- **Audience energy check:** Around slide 10 (halfway), read the room. If energy is dipping, the "raise your hand" on slide 8 should have helped. If you skipped it, do a quick engagement check here: "Before I go into the patterns -- questions so far? Anything you want me to go deeper on?"
- **Confidence note:** You built this from real experience. You use this every day. If a question catches you off guard, it's completely fine to say "That's a great question -- let me think on that and follow up" or "Let's take that offline, I want to give you a thorough answer." You don't have to know everything live. You just have to know more than the room, and you do.
