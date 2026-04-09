# Prompt Engineering That Actually Works (v2)

**Presenter**: Alex Carroll | **Team**: COSY Engineering, lululemon
**Audience**: All Engineering | **Format**: ~30 min talk + live demos (1-hour slot)
**Tool**: GitHub Copilot

> This is the content reference document for v2. Every prompt, demo script, and expected output is designed to be executed live. Practice each demo at least twice before presenting.

---

## Act 1: The Problem (~5 min)

### Slide: Title

**"Prompt Engineering That Actually Works"**
*Alex Carroll | Tech Engineer | COSY Team | lululemon*

---

### Slide: The Hook

**"The model isn't the bottleneck. The prompt is."**

The audience already has Copilot. They already use it daily. Most of them have the same experience: mediocre output, thread restarts, wasted premium requests. This talk isn't about convincing anyone to use AI. It's about making AI actually useful.

**What the audience should take away:** The model hasn't been the limiting factor for a long time. The instructions are.

---

### Slide: Preview

Quick overview of what we'll build in the next 30 minutes:
1. See what happens with zero prompt engineering (Demo 1)
2. Fix it with five building blocks (Demo 2)
3. Build a real component iteratively in a single thread (Demo 3)
4. Scale it to the entire team with one file (Demo 4)

---

### DEMO 1: The Blank Slate

**Setup:** Fresh Copilot chat. No `copilot-instructions.md` in the project. No prior context.

**Prompt (typed live):**

```
Write a React component for a product card
```

**Expected output (bad -- this is the point):**

- JavaScript, not TypeScript (or loose TypeScript with `any`)
- Inline styles or CSS modules instead of Tailwind
- `export default function ProductCard(props)` -- default export, no destructuring
- Props untyped or typed as `any`
- `console.log` statements left in
- No accessibility attributes -- images without `alt`, buttons without `aria-label`
- Explanatory comments like `// This is the product card component`
- Possibly a class component
- Generic product data with no relation to the actual domain

**What to say:**

"Six words. Zero context. The model has no idea what stack we're on, what patterns we follow, or what 'product card' means in our codebase. So it guesses. And it guesses wrong on almost everything."

"This is what most developers experience. And then they do the most expensive thing possible -- they restart the thread, losing all context, and try again with slightly different words. Three premium requests burned, zero usable output."

**Why it works (as a teaching moment):** The model isn't failing. It's doing exactly what we asked -- producing a generic React component. The problem is we gave it no constraints, no context, and no standards. The output space is enormous, and the model picked a random point in it.

---

## Act 2: The Fix (~8 min)

### Slide: The 5 Building Blocks

Every effective prompt uses some combination of five elements:

| Building Block | What It Does | Example |
|---|---|---|
| **Role** | Sets expertise level and perspective | "You are a senior React engineer..." |
| **Context** | Provides background -- stack, codebase, domain | "...on a team using TypeScript, Tailwind, Next.js 14" |
| **Constraints** | Narrows the output space -- what NOT to do | "No `any` types. No default exports. No inline styles." |
| **Format** | Controls the shape of the output | "File structure: `product-card/product-card.tsx` + `index.ts`" |
| **Examples** | Shows what good looks like | Input/output pairs, code snippets, existing patterns |

You don't need all five every time. But when output isn't right, check which building block is missing.

**What the audience should take away:** These five elements are a diagnostic tool. Bad output? Figure out which building block is missing and add it.

---

### Slide: Constraints -- The Highest-Leverage Tool

**The creative brief analogy:**

"Make it pop" gets you chaos. "Two colors max, no gradients, must work at 16px" gets you focused, excellent work. Same principle with prompts.

Constraints narrow the output space faster than positive instructions. Telling the model what NOT to do is often more powerful than describing what you want, because:

1. **The model's default assumptions are generic.** Without constraints, it falls back to CSS modules, default exports, explanatory comments, `any` types -- none of which match your codebase.
2. **Negative space is easier to define.** You may not be able to describe exactly what you want, but you can always list what you don't want.
3. **Constraints are composable.** Each "do not" eliminates a category of bad output. Five constraints together dramatically shrink the space of possible (wrong) answers.

**Before:**

```
Build a form component
```

**After (constraints only -- no other building blocks):**

```
Build a form component.

Do NOT:
- Use any types or type assertions
- Use default exports
- Use inline styles or CSS modules
- Use uncontrolled inputs
- Add console.log or commented-out code
- Skip form validation
```

Even without role, context, or format, the constraints alone produce dramatically better output.

**What the audience should take away:** When output isn't right, don't rewrite the whole prompt. Add constraints first. It's the fastest path to better results.

---

### DEMO 2: The Engineered Prompt

**Setup:** Same Copilot chat (or new one). Same task. Different prompt.

**Prompt (typed live -- have this ready to paste, but walk through it as you paste):**

```
You are a senior React engineer on an e-commerce team that uses TypeScript
strict mode, Tailwind CSS, and Next.js 14 with the App Router.

Create a ProductCard component that displays:
- Product image (with Next.js Image component and blur placeholder)
- Product name
- Price (formatted as CAD currency using Intl.NumberFormat)
- Color swatches (max 5 visible, "+N more" overflow pattern)
- "Add to Bag" button

Technical requirements:
- TypeScript with explicit prop types (no `any`, no type assertions)
- Tailwind CSS for all styling (no inline styles, no CSS modules)
- Named export only (no default exports)
- `const` and arrow functions exclusively
- Props destructured on their own line
- Accessible: images have descriptive alt text, button has aria-label,
  color swatches announce their color name to screen readers
- Component accepts an `onAddToBag` callback typed with the product ID
- No explanatory comments -- code should be self-documenting
- No console.log statements

File structure:
- product-card/product-card.tsx (component)
- product-card/index.ts (barrel export: `export { ProductCard } from './product-card'`)
```

**Expected output (good):**

- Clean `ProductCardProps` interface with explicit types
- `Product` type with `id`, `name`, `imageUrl`, `price`, `colors` fields
- `Intl.NumberFormat('en-CA', { style: 'currency', currency: 'CAD' })` for price
- Next.js `Image` component with `placeholder="blur"` and `blurDataURL`
- Color swatches with `aria-label` announcing the color name (e.g., `aria-label="Dark Olive"`)
- `".slice(0, 5)"` pattern with a `"+{remaining} more"` overflow indicator
- Named export: `export const ProductCard = ({ ... }: ProductCardProps) => { ... }`
- Barrel export file: `export { ProductCard } from './product-card'`
- Tailwind utility classes throughout -- no inline styles
- Zero `any` types, zero `console.log`, zero explanatory comments

**What to say:**

"Same model. Same task. The prompt is the only variable."

"Look at the output. Proper TypeScript interfaces. Tailwind throughout. Named export. Accessibility attributes on every interactive element. Currency formatting with Intl. The barrel export file. It even got the color swatch overflow pattern right."

"Nobody upgraded to a premium tier. Nobody switched models. The capability was always there. We just gave it enough information to use it."

**Why it works:** The prompt pre-answers every decision point the model would otherwise guess at. Role establishes expertise level. Context locks in the stack. Constraints eliminate wrong answers. Format specifies the deliverable structure. The model has no room to guess wrong because every ambiguity has been resolved.

**What the audience should take away:** The gap between the Demo 1 output and the Demo 2 output is entirely caused by the quality of the instruction. This is a learnable, teachable skill.

---

### Slide: The APE Framework

A quick mental checklist for any prompt:

| Letter | Stands For | Question It Answers |
|---|---|---|
| **A** | Action | What do you want done? |
| **P** | Purpose | Why does it matter? |
| **E** | Expectation | What does "done" look like? |

**Without APE:**

```
Fix this function, it's timing out
```

Result: someone adds `limit: 50`. The function now silently drops 450+ products. The "fix" created a new bug.

**With APE:**

```
Action: Refactor fetchProducts to use cursor-based pagination instead of
fetching all products in a single request.

Purpose: Collections like "Women's Align" have 500+ products. The current
approach causes API timeouts (30s limit) and degrades page load performance.

Expectation: Fetch in batches of 100, return a typed PaginatedResult<Product>
with items, total, hasMore, and a nextPage function. Include an AbortController
parameter so the caller can cancel in-flight requests.
```

Result: Complete paginated implementation with batch fetching, typed result wrapper, progress callback, abort support, and graceful degradation on partial failure.

**Why it works:** APE forces you to articulate the "why" (Purpose) and the "what does done look like" (Expectation). Without Purpose, the model can't make architectural decisions. Without Expectation, it can't scope the solution. One APE prompt replaces three vague attempts.

**What the audience should take away:** Before typing a prompt, spend 10 seconds on APE. What, why, done. It works across Copilot, Claude, ChatGPT -- any tool.

---

## Act 3: The Workflow (~10 min)

### Slide: Stop Bolting AI On

**The mindset shift that separates teams getting marginal value from teams getting transformative value.**

**Old way (bolting AI on):**
1. You have an existing 6-step workflow
2. You find the slow step (step 4)
3. You ask AI to do step 4
4. AI output is mediocre because it has no context about steps 1-3
5. You conclude AI is overhyped

**New way (rethinking the workflow):**
1. Start with the outcome you need
2. Ask: "If I were designing this from scratch with AI as a collaborator, what would the process look like?"
3. Design a new workflow where AI is integrated throughout, not bolted onto one step

**Concrete examples engineers relate to:**

| Old Workflow | Rethought Workflow |
|---|---|
| Write code manually, then ask AI to write tests | Describe the behavior you need, generate implementation and tests together |
| Build component, then ask AI to add accessibility | Include accessibility requirements in the initial prompt -- it's architecturally different when you plan for it vs. retrofit |
| Write PR description manually, then ask AI to "make it better" | Use AI throughout the PR: generate the implementation, have it identify edge cases, draft the description from the diff |
| Copy-paste error from console, ask AI "what's wrong" | Give AI the error, the relevant code, the expected behavior, and what you already tried -- context-rich debugging |
| Write migration, then ask AI to review it | Describe the schema change you need, let AI generate the migration with validations, reversibility, and editorial config built in |

**What the audience should take away:** The teams getting the most value from AI aren't automating old processes. They're rethinking the process itself. Better prompts are step one. Rethinking workflows is where the real leverage lives.

**Why it works:** When you bolt AI onto step 4 of an existing process, the AI has no context about steps 1-3. When you rethink the workflow with AI integrated from the start, the AI has full context and can make better decisions at every point.

---

### DEMO 3: Iterative Building in One Thread

**Setup:** New Copilot chat. This demo shows the power of context accumulation -- building a real component across multiple messages in a single thread.

**What you're building:** A product review card component, built iteratively across three focused messages.

---

**Message 1: Core component**

```
Create a ProductReviewCard component that displays:
- Star rating (1-5, rendered as filled/empty star icons)
- Review text (truncated to 3 lines with "Read more" toggle)
- Author name and date (relative format, e.g., "3 days ago")
- Verified purchase badge (conditional)

TypeScript, Tailwind, named export. Props destructured on their own line.
No default exports, no any types, no inline styles.
```

**Expected output:** A clean, focused review card component. Star rating renders visually. Text truncation works with a `useState` toggle. Date formatting uses `Intl.RelativeTimeFormat` or a utility function. Clean `ReviewCardProps` interface.

**What to say:** "First message: just the core component. One concern. Clean output."

---

**Message 2: Add interactivity**

```
Add a "Was this helpful?" interaction to the review card:
- "Helpful" and "Not Helpful" buttons with thumbs up/down icons
- Display vote counts next to each button
- Buttons call an onVote callback with { reviewId, vote: 'helpful' | 'not-helpful' }
- After voting, disable both buttons and show which one the user selected
- Optimistic UI: update the count immediately, revert if the callback rejects
```

**Expected output:** The existing component is enhanced -- not rewritten. The model adds vote state, the `onVote` callback to the props interface, optimistic update logic, and disabled state after voting. The star rating, text truncation, and author section are untouched because the model has full context of the existing component.

**What to say:** "Second message: I didn't re-explain the component. I didn't re-state the constraints. The model already knows. It surgically adds the voting interaction onto the existing component."

---

**Message 3: Accessibility and polish**

```
Review the component for accessibility and fix all issues:
- Star rating: announce "4 out of 5 stars" to screen readers, not just visual stars
- Vote buttons: aria-label should describe the action ("Mark review as helpful")
- After voting: announce the result to screen readers via aria-live region
- "Read more" toggle: manage focus, announce expanded/collapsed state
- All interactive elements must be keyboard navigable
- Add aria-pressed to the selected vote button
```

**Expected output:** The model adds `aria-label` to the star rating container, updates button labels to be descriptive, adds an `aria-live="polite"` region for vote confirmation, adds `aria-expanded` to the read more toggle, and ensures proper `tabIndex` and keyboard event handlers. Again, it builds on the existing component -- it doesn't regenerate from scratch.

**What to say:** "Three focused messages. One thread. Each response builds on the last. The accessibility pass is better because the model already understands the component's structure -- it knows what interactive elements exist and how state flows."

"Compare this to three separate conversations where you'd re-explain everything each time and get three inconsistent outputs you have to manually merge."

"Three focused messages in one thread beats three separate conversations. Every time."

**Why it works:** Each follow-up message benefits from the model's full context of what was already built. The model doesn't re-invent the component -- it surgically enhances it. Each message has a single clear objective, so each concern gets 100% attention. Context accumulation is the most underused feature of conversational AI tools.

**What the audience should take away:** Stop restarting threads. Iterate in place. Treat each conversation like a working session, not a single transaction.

---

## Act 4: The Scale (~7 min)

### Slide: copilot-instructions.md

**What it is:** A markdown file at `.github/copilot-instructions.md` in your repository that acts as a persistent system prompt. Every Copilot interaction -- every developer, every session -- automatically includes these instructions.

**How it works:**
1. Create `.github/copilot-instructions.md` in your repo
2. Write your team's standards, conventions, and rules
3. Every Copilot chat in that repo now includes those instructions as context
4. Every developer gets the same baseline -- no one has to remember to specify the stack, the patterns, the constraints

**What the audience should take away:** This is how you go from "one developer writes great prompts" to "every developer on the team gets great output." It's a 30-minute setup that pays dividends on every AI interaction forever.

---

### DEMO 4: The Killer Moment

**Setup:** This is the payoff. Clear the Copilot chat completely. Add a `copilot-instructions.md` file to the project root (or `.github/` directory). Then type a simple one-liner.

**The copilot-instructions.md file (add this to the project before the demo):**

```markdown
# COSY Team -- AI Coding Instructions

## Stack
- React 18 + TypeScript 5.4 (strict mode, no `any`)
- Next.js 14 App Router (server components by default, 'use client' only when needed)
- Tailwind CSS 3.4 (no CSS modules, no styled-components, no inline styles)
- Zod for runtime validation at all entry points
- Vitest + React Testing Library for tests

## Naming Conventions
- Files and folders: kebab-case (`product-card.tsx`, `use-cart.ts`)
- Components: PascalCase (`ProductCard`), named exports only (no default exports)
- Hooks: camelCase with `use` prefix (`useCart`, `useProductReviews`)
- Types/Interfaces: PascalCase, no `I` prefix (`CartItem`, not `ICartItem`)
- Constants: SCREAMING_SNAKE_CASE (`MAX_ITEMS_PER_PAGE`)
- Event handlers: `on` prefix for props, `handle` prefix for internal (`onAddToBag`, `handleClick`)

## File Structure
Components use co-located folders:
```
component-name/
  component-name.tsx       # Component implementation
  component-name.test.tsx  # Tests (colocated)
  index.ts                 # Barrel export: export { ComponentName } from './component-name'
```

## Code Rules
- `const` only -- never `let` or `var`
- Arrow functions exclusively -- no function declarations
- Props destructured on their own line
- No `any` -- use `unknown` with type guards, or define explicit types
- No type assertions (`as`) unless absolutely necessary with a comment explaining why
- No `// explanatory comments` -- code should be self-documenting
- No console.log in committed code
- Error handling: Result pattern (`{ ok: true, data }` | `{ ok: false, error }`) for business logic
- All external/user data validated with Zod schemas before use
- Early returns over nested conditionals

## Accessibility
- All images must have descriptive `alt` text (not "image of...")
- Interactive elements must be keyboard navigable
- Form inputs must have associated labels (visible or `aria-label`)
- Use semantic HTML elements (`button`, `nav`, `main`, `article`)
- Dynamic content updates must use `aria-live` regions
- Color must not be the only means of conveying information

## Testing Preferences
- Vitest + React Testing Library
- Test behavior, not implementation details
- No snapshot tests
- Use `screen.getByRole()` over `getByTestId()` -- prefer accessible queries
- Name test files `component-name.test.tsx` (colocated with component)
- Describe blocks mirror component name, test names describe user behavior
```

**The simple prompt (typed live):**

```
Create a ReviewSummary component that shows average rating, rating
distribution bar chart, and total review count.
```

That's it. One line.

**Expected output (matches team standards perfectly):**

- TypeScript with explicit `ReviewSummaryProps` interface -- no `any`
- `export const ReviewSummary = ({ ... }: ReviewSummaryProps) => { ... }` -- named export, arrow function, destructured props
- Tailwind utility classes for everything -- no inline styles
- Rating distribution rendered as horizontal bars with percentage widths
- Average rating formatted to one decimal place
- Accessible: bar chart has `role="img"` with `aria-label`, star counts are readable by screen readers, semantic HTML throughout
- File named `review-summary.tsx` in kebab-case
- Barrel export file included
- `const` only, no `console.log`, no explanatory comments

**What to say:**

"Clear chat. No conversation history. No carefully engineered prompt. Just one line: 'Create a ReviewSummary component.'"

"Look at the output. TypeScript strict. Tailwind. Named export. Arrow function. Destructured props. Accessible. Kebab-case filename. Barrel export."

"Every single convention followed. Not because I told it in the prompt -- because the instructions file told it permanently."

"Now think about this: new developer joins your team. Day one. They open Copilot. They type a one-line prompt. Their AI output matches your codebase. No ramp-up. No tribal knowledge. No 'ask Sarah how we do components here.'"

**Why it works:** The instructions file is a system prompt that scales to the entire team. Instead of each developer remembering to specify "TypeScript strict, Tailwind only, no default exports, kebab-case files," the AI knows this automatically. The marginal cost of a good prompt drops to near zero -- even a one-liner produces convention-compliant output.

---

### Slide: The Compound Effect

**Individual:** One developer with better prompts saves 30+ minutes a day. Fewer restarts, better first-pass output, less refactoring.

**Team:** Ten developers all using `copilot-instructions.md` + prompt techniques. That's 25+ recovered hours per week. More than half an engineer's worth of capacity. And the output is consistent -- every component follows the same patterns.

**Organization:** Every team has instructions files. Every engineer knows APE. Workflows are designed with AI, not retrofitted. Onboarding time drops. Code consistency increases. The gap between your best engineer's AI output and your newest engineer's AI output shrinks to nearly zero.

**What the audience should take away:** This doesn't require a new tool purchase. No platform migration. No headcount. It requires education and adoption of techniques. The tools are already paid for. The models are already capable.

---

### Slide: Key Takeaways

1. **Engineer, don't ask.** Prompts are specifications, not questions. Use the five building blocks: Role, Context, Constraints, Format, Examples.
2. **Constraints are your highest-leverage tool.** When output isn't right, add constraints before rewriting the prompt.
3. **Iterate, don't restart.** Build in one thread. Each message benefits from everything that came before.
4. **Rethink, don't bolt on.** Step back to the outcome. Design the workflow with AI, not around it.
5. **Scale with copilot-instructions.md.** Individual skill is great. Team-wide standards embedded in tooling is how you make it sustainable.

**CTA:** "Today: add a `copilot-instructions.md` to one repo. Use APE on your next prompt. Stop restarting threads."

**Closing line:**

*"The model is already good enough. Your instructions are the variable."*

---

### Slide: Q&A

**"Questions?"**
*Alex Carroll | Tech Engineer | COSY Team | lululemon*

---

## Anti-Patterns: Common Mistakes Engineers Make

### 1. Restarting Threads Instead of Iterating

**The mistake:** Output isn't right, so you open a new chat and try again. And again. Three separate conversations, each one re-explaining your stack, your types, your constraints.

**The cost:** Each restart throws away all accumulated context. You re-explain everything. You get three inconsistent outputs. You spend time manually merging the best parts.

**The fix:** Stay in the same thread. Follow up with refinements. "That's close, but change the star rating to use SVG icons instead of Unicode characters." The model already knows your component structure, your types, your patterns. Use that.

### 2. "Make It Better"

**The mistake:** "Make it better" / "Improve this" / "Clean this up" -- no direction, no criteria.

**Why it fails:** Better how? Faster? More readable? More accessible? Smaller bundle size? The model picks randomly, and "randomly" usually means superficial renaming and comment additions.

**The fix:** Be specific about the dimension of improvement: "Improve render performance by memoizing the filtered product list and preventing re-renders when only the sort order changes."

### 3. Zero Constraints

**The mistake:** Prompt with only positive instructions. "Build a product card with an image, title, and price."

**Why it fails:** Without "do nots," the model makes default assumptions -- CSS modules, default exports, explanatory comments, `any` types -- that don't match your codebase. The output space is enormous and the model picks a random point in it.

**The fix:** Every prompt should include at least 3 constraints. "No default exports. No inline styles. No `any` types." Constraints are the fastest way to shrink the output space.

### 4. The Kitchen Sink Prompt

**The mistake:** "Build a search component with autocomplete, keyboard navigation, accessibility, animations, caching, error handling, loading states, and mobile responsiveness."

**Why it fails:** Eight concerns in one prompt. Each gets ~12% of the model's attention. Everything is mediocre, nothing is good. Keyboard navigation half-works. ARIA attributes are present but incorrect. Loading states are an afterthought.

**The fix:** Break into 3-4 focused messages in the same thread. Message 1: core search with results. Message 2: keyboard navigation and ARIA. Message 3: loading, error, and empty states. Each concern gets 100% attention, and results compound because each message builds on the last.

### 5. No Context About Your Stack

**The mistake:** "Write a form component" with no mention of the framework, language, or styling approach.

**Why it fails:** The model could produce React, Vue, Angular, Svelte, or vanilla JS. It could use CSS modules, styled-components, Tailwind, or inline styles. It could use JavaScript or TypeScript. Every decision is a coin flip.

**The fix:** State your stack explicitly: "Using React 18, TypeScript strict mode, Tailwind CSS, React Hook Form with Zod validation." Or put it in `copilot-instructions.md` so you never have to say it again.

### 6. Copy-Paste Debugging

**The mistake:** Copy an error message from the console, paste it into Copilot, type "fix this."

**Why it fails:** The model can see the error but not the code that caused it, the expected behavior, or what you've already tried. It guesses at a fix, often addressing the symptom rather than the root cause.

**The fix:** Include the error, the relevant code, the expected behavior, and what you've already tried: "This `TypeError: Cannot read property 'price' of undefined` happens when I click 'Add to Bag' on a product that hasn't fully loaded. Here's the handler: [code]. Expected: the button should be disabled until the product data is loaded. I tried optional chaining but it just silently fails."

### 7. Bolting AI Onto Your Old Workflow

**The mistake:** You have an existing process. You find the slow step. You ask AI to do that step. The output is mediocre because the AI has no context about the decisions that led to that step.

**Why it fails:** Automating step 4 of a 6-step process means the AI operates in a vacuum. It doesn't know why step 4 exists, what steps 1-3 decided, or what step 5 expects.

**The fix:** Step back to the outcome. Instead of "write tests for this function," try "here's the behavior I need -- generate the implementation and tests together." Operate at a higher level of abstraction.

---

## Quick Reference: Prompt Engineering Cheat Sheet

### The 5 Building Blocks

| Block | Question | Example |
|---|---|---|
| **Role** | Who should the AI act as? | "You are a senior React engineer..." |
| **Context** | What's the environment? | "TypeScript strict, Tailwind, Next.js 14 App Router" |
| **Constraints** | What should it NOT do? | "No `any`, no default exports, no inline styles" |
| **Format** | What shape should the output take? | "File per component, barrel exports, kebab-case filenames" |
| **Examples** | What does good look like? | Input/output pairs, existing code patterns |

### The APE Framework

| Letter | Meaning | Prompt Fragment |
|---|---|---|
| **A** | Action | "Refactor fetchProducts to use cursor-based pagination..." |
| **P** | Purpose | "...because collections with 500+ products cause timeouts..." |
| **E** | Expectation | "...return PaginatedResult<Product> with items, total, hasMore, nextPage" |

### Pattern Quick Reference

| Pattern | When to Use | Key Technique |
|---|---|---|
| **Building Blocks** | Every prompt | Role + Context + Constraints + Format + Examples |
| **APE** | Any task request | Action (what) + Purpose (why) + Expectation (done) |
| **Constraints** | Output quality is off | Add "Do NOT" block -- at least 3 constraints |
| **Iterative Building** | Complex features | 3-4 focused messages in one thread, each building on the last |
| **copilot-instructions.md** | Team scaling | Persistent system prompt per repo -- set once, benefit forever |
| **Workflow Rethink** | Starting any AI task | Step back to the outcome, design the process with AI |

### The 30-Second Checklist

Before typing any prompt, answer these five questions:

1. **Who** should the AI act as? (Role)
2. **What** am I working with? (Context -- stack, constraints, existing code)
3. **What** should it do? (Task -- specific, scoped, one concern)
4. **What** should it NOT do? (Constraints -- at least 3 "do nots")
5. **What** does done look like? (Format and acceptance criteria)

---

*"The model is already good enough. Your instructions are the variable."*
