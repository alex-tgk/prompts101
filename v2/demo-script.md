# Prompt Engineering That Actually Works — Live Demo Script (v2)

**Presenter:** Alex Carroll, Tech Engineer, lululemon
**Tool:** GitHub Copilot (VS Code, Copilot Chat panel)
**Audience:** All engineering at lululemon
**Format:** 4 live demos woven into a ~30 minute presentation
**Story Arc:** Blank slate → Engineered prompt → Iterative build → Team scaling with instructions file

---

## Pre-Talk Checklist

### Environment

- [ ] VS Code open with Copilot extension installed and signed in
- [ ] Clean demo project folder ready — empty or minimal (just a `package.json` with React, TypeScript, Tailwind deps)
- [ ] No `copilot-instructions.md` or `.github/copilot-instructions.md` present (delete or rename before talk)
- [ ] Font size set to 18-20px (`editor.fontSize` in settings)
- [ ] Dark theme active (One Dark Pro or similar high-contrast theme)
- [ ] Minimap hidden (`editor.minimap.enabled: false`)
- [ ] Breadcrumbs hidden (`breadcrumbs.enabled: false`)
- [ ] Activity bar hidden (`workbench.activityBar.visible: false`)
- [ ] Copilot Chat panel docked on the right side
- [ ] Terminal panel ready but hidden (toggle with `` Ctrl+` ``)
- [ ] All other VS Code windows and tabs closed
- [ ] Consider Zen Mode (`Cmd+K Z`) for maximum screen real estate during demos

### Network & Fallbacks

- [ ] Network check — confirm Copilot can reach GitHub (open Copilot Chat, send a test message)
- [ ] `demo-fallbacks/` folder prepared with screenshots of expected output for all 4 demos
- [ ] Screenshots labeled clearly: `demo1-bad-output.png`, `demo2-good-output.png`, etc.
- [ ] Verify you can quickly navigate to `demo-fallbacks/` if needed

### Rehearsal

- [ ] Practiced all 4 exact prompts at least 3 times
- [ ] Know which lines to highlight in output (don't scroll aimlessly)
- [ ] Cursor positioned where you'll start typing before each demo
- [ ] Tested VS Code zoom (`Cmd+=` / `Cmd+-`) for back-of-room visibility
- [ ] Timed each demo — know your cut signals
- [ ] `.github/copilot-instructions.md` file pre-prepared for Demo 4 (saved outside the project, ready to copy in)

---

## Demo 1: The Blank Slate (~3 min)

### Setup

- Fresh Copilot Chat (clear any existing conversation)
- No `copilot-instructions.md` anywhere in the project
- No system context, no prior conversation

### What You Type (exact prompt)

```
Write a React component for a product card
```

Six words. Zero context. Type it live.

### Expected Bad Output — Call These Out

Look for and point out as many of these as appear:

- **JavaScript instead of TypeScript** (or loose typing with `any` everywhere)
- **Default export** (`export default function ProductCard`)
- **Inline styles or CSS modules** instead of Tailwind
- **Generic/unhelpful comments** like `// product card component` or `// render the card`
- **No accessibility attributes** — missing alt text, no aria-labels
- **Props not typed or typed as `any`**
- **Class component syntax** (less likely now, but possible)
- **No clear file structure** — just a single blob

### Talking Points (while output generates)

> "Watch what happens. Six words, zero context."

As output appears, point at each issue:

> "JavaScript, not TypeScript. Default export. Inline styles. Generic comments that tell you nothing. No alt text on that image. Props typed as `any`."

Then the key insight:

> "This is what 80% of developers experience. And then they do the worst thing possible — they close this chat and start a new one."

### Fallback Plan

If the output is actually decent (models improve over time):

> "Sometimes you get lucky. But here's what I captured earlier this week—"

Switch to `demo-fallbacks/demo1-bad-output.png` and walk through the screenshot. The teaching point still lands.

If you use the fallback, add:

> "Even when the model gets lucky, notice what's missing: it _guessed_ your stack instead of _knowing_ it. That guess won't always be right."

### Transition

> "So what went wrong? The model had no context. Let me show you what changes when we give it context."

---

## Demo 2: The Engineered Prompt (~3 min)

### Setup

- Same chat or new chat — doesn't matter yet (no instructions file either way)
- Still no `copilot-instructions.md`

### What You Type (type this live — do NOT paste)

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
- No explanatory comments — the code should be self-documenting
- Props destructured on their own line

File structure:
- product-card/product-card.tsx (component)
- product-card/index.ts (barrel export)
```

### Expected Good Output — Call These Out

- **Full TypeScript** with a `ProductCardProps` interface (no `any`)
- **Tailwind utility classes** throughout (no inline styles, no CSS modules)
- **Named export** (`export const ProductCard`)
- **Proper alt attributes** on images, `aria-label` on buttons
- **`Intl.NumberFormat`** for CAD currency formatting (or similar locale-aware formatting)
- **Clean destructured props** on their own line
- **Barrel export file** (`index.ts` with `export { ProductCard } from './product-card'`)
- **Arrow function component** with `const`

### Talking Points

> "Same model. Same task. Every decision point pre-answered."

Point at specific wins:

> "No `any` types — because I said no `any` types. No inline styles — because I said no inline styles. Named export — because I said named export."

> "The model was _always capable_ of this. It just needed the spec."

Pause for emphasis:

> "This is a teachable skill. Not talent. Technique."

### Transition

> "That's one component. But real work isn't one component — it's a project. Let me show you what happens when you build iteratively."

---

## Demo 3: Iterative Project Build (~5 min)

### Setup

- **Same chat thread** — this is critical. Do NOT start a new chat.
- Explain why before you start typing.

> "I'm staying in the same thread. The model remembers everything we've built. The conventions, the types, the patterns — it's all still in context."

### Message 1 — Core Component (type live)

```
Now create a ProductReviewCard component that displays:
- Star rating (1-5, visual stars)
- Review text (truncated at 3 lines with "Read more" toggle)
- Reviewer name and date
- Same conventions as the ProductCard above
```

**What to point out:**

> "I didn't re-specify TypeScript, Tailwind, named exports. It already knows from our conversation. Six words: 'Same conventions as the ProductCard above.' That's the power of context."

Wait for output. Confirm it follows the conventions from Demo 2.

### Message 2 — Add Interactivity (type live)

```
Add to the ProductReviewCard:
- "Helpful" and "Not Helpful" buttons with vote counts
- Optimistic UI update on click (increment count immediately, revert on error)
- Only allow one vote per user (toggle behavior)
- Disable both buttons after voting
```

**What to point out:**

> "Watch — it's modifying the existing component, not creating a new one. Context is preserved."

> "Optimistic UI with error rollback. That's a nuanced pattern. Because I asked for it specifically, I get it. Vague prompts get vague code."

### Message 3 — Accessibility Pass (type live)

```
Review the ProductReviewCard for accessibility and fix all issues:
- Star rating must announce "4 out of 5 stars" to screen readers
- Helpful/Not Helpful buttons need aria-pressed state
- "Read more" toggle needs aria-expanded
- All interactive elements keyboard navigable
- Announce vote result to screen readers via aria-live
```

**What to point out:**

> "Three focused messages. Each one gets 100% of the model's attention. This beats one massive prompt every time."

> "I could have crammed all of this into one mega-prompt. But splitting it up means each response is focused, reviewable, and easy to course-correct if something goes sideways."

### If Running Long — Cut Signal

If tight on time, **skip Message 3** (the accessibility pass). The first two messages demonstrate the iterative pattern effectively. Say:

> "I'd normally do an accessibility pass next — same pattern, focused prompt — but let me show you something that scales this to your whole team."

### Transition

> "So now I know how to write great prompts. But what about the other 50 engineers on my team? Do they all have to learn this?"

---

## Demo 4: The Instructions File (~3 min)

### Setup

- **Clear the Copilot chat completely.** This is visible to the audience — they see the clean slate.
- Make it dramatic. Click "Clear" and let the empty chat sit for a beat.

> "Clean slate. No conversation history. No context. Just like Demo 1."

### Step 1 — Create the Instructions File

Create `.github/copilot-instructions.md` in the project. Either type it live (if time permits) or open a pre-prepared file. Narrate as you open/create it.

> "This is a `copilot-instructions.md` file. It lives in your repo's `.github` folder. Every time Copilot starts a conversation in this project, it reads this file first. Think of it as your team's coding standards, baked into the AI."

The file contents:

```markdown
# Engineering Team — AI Coding Instructions

## Stack
- React 18 + TypeScript 5.4 (strict mode)
- Next.js 14 App Router (server components by default)
- Tailwind CSS 3.4 (no CSS modules, no styled-components)
- Zod for runtime validation

## Code Rules
- `const` only, arrow functions exclusively
- Props destructured on their own line
- Named exports only (no default exports)
- No `any` — use `unknown` and narrow with type guards
- No inline styles
- No explanatory comments — code should be self-documenting
- Error handling: Result pattern over try/catch

## Naming
- Files/folders: kebab-case (product-card.tsx)
- Components: PascalCase (ProductCard)
- Hooks: camelCase with `use` prefix (useProducts)
- Constants: SCREAMING_SNAKE_CASE

## File Structure
Components use co-located folders:
```
my-component/
  my-component.tsx
  my-component.test.tsx
  index.ts  // barrel export
```

## Accessibility
- All images need alt text
- Interactive elements must be keyboard navigable
- Use semantic HTML elements
- Include ARIA attributes for custom interactive components

## Testing
- Vitest + React Testing Library
- Test behavior, not implementation
- No snapshot tests
```

### Step 2 — Type the Simple Prompt

Now type a simple, vague prompt — deliberately similar to Demo 1:

```
Create a ReviewSummary component that shows average rating, rating distribution, and total review count
```

### Expected Output

Despite the simple prompt, the output should match all team conventions:

- TypeScript strict mode (no `any`)
- Tailwind utility classes (no CSS modules, no inline styles)
- Named export (`export const ReviewSummary`)
- Proper prop types with interface
- Kebab-case file structure (`review-summary/review-summary.tsx`)
- Barrel export (`review-summary/index.ts`)
- Accessibility attributes
- Arrow functions, `const` only

### Talking Points

> "Same simple prompt style as Demo 1. But now the output matches our team standards."

> "I didn't specify TypeScript. I didn't say no default exports. I didn't mention Tailwind. The instructions file handles all of that."

> "New developer joins the team. Day one. Their Copilot output matches your codebase. That's the power of this file."

Close with impact:

> "Thirty minutes to set up. Benefits every developer, every interaction, forever."

---

## Recovery Plans

### If Copilot Is Slow (>15 seconds)

Stay calm. Fill the silence with teaching:

> "While it's thinking — and this is normal, it's processing a detailed prompt — let me explain what we should see..."

Walk through the expected output characteristics before they appear. This actually makes the demo _more_ educational.

### If Copilot Is Down

Switch to pre-captured screenshots immediately. Don't wait or retry.

> "Copilot is having a moment, so let me show you what this looks like from my session yesterday."

Open `demo-fallbacks/` and walk through the screenshots. Keep the energy up — the teaching points are identical whether the output is live or captured.

### If Output Is Wrong or Unexpected

This is actually a teaching moment. Lean into it:

> "And this is exactly why constraints matter. Watch — I'll add one constraint and fix this."

Add the missing constraint to the prompt and re-submit. The audience sees the iterative correction process in real time, which reinforces the message.

### If Output Is Surprisingly Good on Demo 1

Don't panic. Reframe:

> "Even when the model gets lucky, notice what's missing: it _guessed_ your stack instead of _knowing_ it. That guess won't always be right. And you're relying on luck, not a system."

---

## Timing Guide

| Demo | Target Time | Max Time | Cut Signal |
|------|-------------|----------|------------|
| Demo 1: Blank Slate | 2.5 min | 3.5 min | Move on after calling out 3 issues |
| Demo 2: Engineered Prompt | 3 min | 4 min | Don't read every line — highlight 3 wins |
| Demo 3: Iterative Build | 5 min | 7 min | Can skip Message 3 (a11y pass) if tight |
| Demo 4: Instructions File | 3 min | 4 min | Use pre-prepared file to save 1-2 min |
| **Total Demo Time** | **13.5 min** | **18.5 min** | |

---

## Pre-Demo Rehearsal Notes

1. **Practice the exact prompts 3 times** before the talk — typing speed and accuracy matter on stage
2. **Know which lines to highlight** in output — don't scroll aimlessly looking for wins
3. **Have cursor positioned** where you'll start typing before each demo begins
4. **Test zoom levels** — use `Cmd+=` / `Cmd+-` if the back of the room can't read the screen
5. **Time yourself** — if any demo runs over max time, hit the cut signal and move on
6. **Prepare your `.github/copilot-instructions.md`** file outside the project folder so you can copy it in quickly during Demo 4
7. **Clear Copilot chat** between Demo 3 and Demo 4 — the audience needs to see the empty slate
8. **Have `demo-fallbacks/` open** in a separate Finder window for quick access if needed
