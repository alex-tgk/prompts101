# Prompt Engineering That Actually Works

**Presenter**: Alex Carroll | **Team**: CMS Engineering, Lululemon  
**Stack**: React, TypeScript, Tailwind CSS, Next.js, Contentful

> This document is your reference for live examples. Every before/after is designed to make the contrast undeniable.

---

## 1. The System Prompt -- ProductCard Component

### The Problem

A developer needs to build a product card component for the e-commerce storefront. They ask the AI for help.

### The Vague Prompt

```
Write a React component for a product card
```

### What You Get Back

A JavaScript (not TypeScript) component using inline styles or CSS modules. Default export. Props typed as `any` or not typed at all. No accessibility attributes. Includes comments like `// This is the product card component` and `// Render the product image`. May use class components. Completely ignores your team's conventions -- you'll spend more time refactoring than you saved.

### The Engineered Prompt

```
You are a senior React engineer on a team that uses TypeScript, Tailwind CSS, and
Next.js 14 with the App Router.

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
- Accessible: alt text on images, button has aria-label, color swatches
  announce their color to screen readers
- Component must accept an `onAddToBag` callback with the product ID
- Use `const` and arrow functions exclusively
- No explanatory comments -- the code should be self-documenting
- Props destructured on their own line

File structure:
- product-card/product-card.tsx (component)
- product-card/index.ts (barrel export)
```

### What You Get Back

A fully typed TypeScript component with a clean `ProductCardProps` interface. Tailwind utility classes throughout. Named export. Proper `alt` attributes, `aria-label` on the button, `role="img"` with `aria-label` on color swatches. `Intl.NumberFormat` for CAD currency formatting. Clean destructured props. Barrel export file included. Drops directly into the codebase with zero refactoring.

### Why It Works

The system prompt establishes **role** (senior React engineer), **context** (the tech stack), **constraints** (the "do nots"), and **output format** (file structure). The AI has no room to guess wrong because every decision point has been pre-answered.

---

## 2. Few-Shot Pattern -- API Response Mapping

### The Problem

The Contentful API returns data in one shape. The frontend needs it in another. A developer needs to write a mapper function that transforms API responses into domain models.

### The Vague Prompt

```
Convert this API response to a TypeScript object
```

### What You Get Back

A single hardcoded transformation with no type safety. No consistent naming convention. Misses fields. Doesn't handle the slug generation or price formatting your team expects.

### The Engineered Prompt

````
I need a mapper function that converts product API responses to frontend domain
models. Here are examples of the transformation:

**Input 1:**
```json
{
  "product_name": "Align High-Rise Pant 25\"",
  "product_id": "LW5DKZS",
  "list_price_cad": 118.00,
  "available_colors": ["black", "dark_olive", "smoky_red"],
  "is_available": true,
  "category_path": "women/pants/align"
}
```

**Output 1:**
```typescript
{
  productName: "Align High-Rise Pant 25\"",
  productId: "LW5DKZS",
  slug: "align-high-rise-pant-25",
  listPrice: { amount: 118.00, currency: "CAD", display: "$118.00" },
  availableColors: ["black", "darkOlive", "smokyRed"],
  isAvailable: true,
  categoryPath: "women/pants/align",
  categoryBreadcrumb: ["women", "pants", "align"]
}
```

**Input 2:**
```json
{
  "product_name": "Scuba Oversized Half-Zip Hoodie",
  "product_id": "LW3FHPS",
  "list_price_cad": 128.00,
  "available_colors": ["heathered_core_ultra_light_grey"],
  "is_available": false,
  "category_path": "women/hoodies-and-sweatshirts/scuba"
}
```

**Output 2:**
```typescript
{
  productName: "Scuba Oversized Half-Zip Hoodie",
  productId: "LW3FHPS",
  slug: "scuba-oversized-half-zip-hoodie",
  listPrice: { amount: 128.00, currency: "CAD", display: "$128.00" },
  availableColors: ["heatheredCoreUltraLightGrey"],
  isAvailable: false,
  categoryPath: "women/hoodies-and-sweatshirts/scuba",
  categoryBreadcrumb: ["women", "hoodies-and-sweatshirts", "scuba"]
}
```

Now write the typed mapper function that handles this transformation for:
```json
{
  "product_name": "Define Jacket",
  "product_id": "LW4AWLS",
  "list_price_cad": 148.00,
  "available_colors": ["black", "dark_red", "roasted_brown"],
  "is_available": true,
  "category_path": "women/jackets-and-coats/define"
}
```
````

### What You Get Back

A fully typed mapper with `ProductApiResponse` and `ProductDomainModel` interfaces. The function correctly infers the slug rule (lowercase, hyphens, strip special characters like the inch mark). It converts `snake_case` color names to `camelCase`. It builds the `categoryBreadcrumb` array by splitting on `/`. It wraps the price in a structured object with display formatting. All inferred from the examples alone -- no explicit rules required.

### Why It Works

**Few-shot learning** lets the model reverse-engineer your transformation rules from examples instead of requiring you to articulate every rule. Two examples are enough to establish the pattern. The model then generalizes accurately to new inputs.

---

## 3. Chain-of-Thought -- Error Handling

### The Problem

The team has a `fetchProducts` function that calls the Contentful API. It currently has no error handling. A developer needs to add robust error handling.

### The Vague Prompt

```
Add error handling to this fetchProducts function
```

### What You Get Back

A single try/catch wrapping the entire function. Catches `Error`, logs `console.error("Error fetching products")`, and returns an empty array. No distinction between network failures, API errors, or malformed data. The user sees nothing. No retry logic. No telemetry. You've turned a crash into a silent failure.

### The Engineered Prompt

````
Here's our product fetch function:

```typescript
const fetchProducts = async (
  categorySlug: string,
  locale: string = 'en-CA'
): Promise<Product[]> => {
  const response = await contentfulClient.getEntries({
    content_type: 'product',
    'fields.category': categorySlug,
    locale,
    limit: 100,
  });
  return response.items.map(mapContentfulProduct);
};
```

Before writing any code, reason through step by step:
1. What are ALL the ways this function can fail?
2. For each failure mode, what should the user see?
3. For each failure mode, what should we log for debugging?
4. Are there any failures we should retry vs. fail fast?

Then write the error-handled version using a Result pattern
(return `{ ok: true, data }` or `{ ok: false, error }` -- never throw).
````

### What You Get Back

First, a structured reasoning section that identifies **six** failure modes:

1. **Network failure** (offline, DNS, timeout) -- show "Check your connection" message, log full error, retry once
2. **Contentful API error** (rate limit 429, server error 500) -- show "Products temporarily unavailable", log status code + rate limit headers, retry on 429 with backoff
3. **Authentication error** (expired token, wrong space ID) -- show generic error, log the auth failure with environment info, do NOT retry
4. **Empty response** (valid query, no results) -- this is NOT an error, return empty array with `ok: true`
5. **Malformed response** (items exist but mapper throws) -- show "Something went wrong", log the specific item that failed parsing, do NOT retry
6. **Invalid input** (empty categorySlug) -- validate before the call, return error immediately

Then the code implements all six cases with typed error codes, structured logging, and a clean `Result<Product[]>` return type.

### Why It Works

**Chain-of-thought prompting** forces the model to reason before coding. The "Before writing any code, reason through..." instruction prevents the model from jumping to the first obvious solution (try/catch with console.error). By enumerating failure modes first, the model produces exhaustive error handling that a vague prompt would never surface.

---

## 4. APE Framework -- Pagination Refactor

### The Problem

The `fetchProducts` function currently fetches all products in one call. Collections with 500+ products cause timeouts. A developer needs to add pagination.

### The Vague Prompt

```
Fix this function, it's timing out
```

### What You Get Back

Someone adds `limit: 50` to the query. That's it. The function now returns only the first 50 products. The 450+ remaining products are silently dropped. The "fix" created a new bug.

### The Engineered Prompt (APE Framework)

````
**Action**: Refactor the `fetchProducts` function to use cursor-based
pagination instead of fetching all products in a single request.

**Purpose**: Collections like "Women's Align" have 500+ products. The current
single-request approach causes Contentful API timeouts (30s limit) and
degrades page load performance. We need to fetch products in batches while
still returning the complete collection.

**Expectation**:
- Use Contentful's `skip` + `limit` parameters for cursor-based pagination
- Fetch in batches of 100 (Contentful's max per request)
- Return a typed `PaginatedResult<Product>` with: items, total, hasMore,
  nextPage function
- Include a loading state callback so the UI can show progress ("Loading
  142 of 523 products...")
- If any single batch fails, return what we have so far with an error flag
  (graceful degradation, not all-or-nothing)
- Use our existing `ApiResponse<T>` wrapper for the return type
- Add an AbortController parameter so the caller can cancel in-flight
  pagination (e.g., user navigates away)

Current function signature for reference:
```typescript
const fetchProducts = async (
  categorySlug: string,
  locale?: string
): Promise<Product[]>
```
````

### What You Get Back

A complete paginated fetch implementation with:

- `PaginatedResult<Product>` type definition
- Batch fetching with `skip` and `limit: 100`
- `onProgress` callback for UI loading indicators
- Partial result return on batch failure with `hasError` flag
- `AbortController` integration with cleanup
- Wrapped in `ApiResponse<PaginatedResult<Product>>`
- The caller API is clean: `const { data } = await fetchProducts('align', { onProgress, signal })`

### Why It Works

**APE** (Action, Purpose, Expectation) gives the model three things the vague prompt lacked: what to do, why it matters, and what "done" looks like. The **Purpose** is critical -- without knowing *why* the function is timing out, the model can't make the right architectural decision. The **Expectation** eliminates ambiguity about what the refactored version should support.

---

## 5. Constraints Power -- Code Review Prompt

### The Problem

A developer wants the AI to review a pull request before requesting human review. They paste in a diff and ask for feedback.

### The Vague Prompt

```
Review this code and let me know if there are any issues
```

### What You Get Back

A wall of text including: "Consider using more descriptive variable names", "You might want to add a comment here", "The import ordering could be more consistent", "Looks good overall! Consider adding unit tests." Generic feedback that doesn't catch any real bugs. Reads like a polite performance review.

### The Engineered Prompt

````
Review this pull request diff. Focus ONLY on:

1. **Type safety gaps**: usage of `any`, unsafe type assertions (`as`),
   missing null/undefined checks, unvalidated external data
2. **State management issues**: unnecessary re-renders, stale closures in
   useEffect/useCallback, missing dependency array items, derived state
   that should be computed
3. **Accessibility violations**: missing ARIA attributes, elements not
   keyboard navigable, missing focus management, images without alt text,
   interactive elements without accessible names

Do NOT comment on:
- Code style, formatting, or naming conventions (Prettier handles this)
- Import ordering (ESLint auto-fixes this)
- "Nice to have" improvements
- Suggestions prefaced with "you might want to consider"

Output format for each issue:
```
[CRITICAL | WARNING] filename.tsx:L42
Issue: <one sentence>
Fix: <one sentence with code snippet>
```

Here's the diff:
````

### What You Get Back

A focused list of 4-7 real issues like:

```
[CRITICAL] product-card.tsx:L23
Issue: `product.price` is cast with `as number` but API can return null
  for draft products.
Fix: Add null check: `const price = product.price ?? 0`

[WARNING] use-products.ts:L45
Issue: `fetchProducts` is called inside useEffect but not in the dependency
  array, creating a stale closure over `categorySlug`.
Fix: Add `fetchProducts` to deps array or wrap in useCallback.

[CRITICAL] search-input.tsx:L67
Issue: Search input has no associated label -- screen readers announce it
  as "edit text" with no context.
Fix: Add `aria-label="Search products"` or a visually-hidden <label>.
```

No fluff. Every issue is actionable. Severity is prioritized.

### Why It Works

**Constraints** are the highest-leverage prompt engineering technique. The "Do NOT" block is as important as the "Focus on" block. Without constraints, the model distributes attention evenly across everything it can comment on, burying critical type safety bugs under "consider renaming this variable." Constraints focus the model's attention the same way a good code review rubric focuses a human reviewer.

---

## 6. Role Prompting -- Security Review

### The Problem

The team has a Next.js API route that handles sensitive customer data. A developer wants to review it for issues.

### The Generic Role

```
You are a code reviewer. Review this Next.js API route:

export async function POST(request: Request) {
  const body = await request.json();
  const customer = await db.customers.findOne({ email: body.email });
  const order = await db.orders.create({
    customerId: customer.id,
    items: body.items,
    paymentToken: body.paymentToken,
  });
  await sendConfirmation(customer.email, order);
  return Response.json({ orderId: order.id, status: 'confirmed' });
}
```

### What You Get Back

"The code looks clean. Consider adding error handling for the database calls. You might want to add input validation. The function could benefit from TypeScript types." Surface-level observations that anyone could make.

### The Engineered Role

```
You are a senior security engineer conducting a threat model review of a
Next.js API route that processes customer orders and payment data. This
endpoint is publicly accessible on the internet.

For each vulnerability you find, provide:
- Threat: what an attacker could do
- Impact: what damage it causes
- Fix: specific code change

Review this route:
```

*(Same code as above.)*

### What You Get Back

**5-7 specific vulnerabilities:**

1. **No input validation** -- Threat: attacker sends `{ email: { "$gt": "" } }` for NoSQL injection. Impact: dumps entire customer database. Fix: validate with Zod schema before any DB call.

2. **No authentication** -- Threat: anyone can create orders for any email address. Impact: fraudulent orders, inventory manipulation. Fix: verify session token, match authenticated user to `body.email`.

3. **No rate limiting** -- Threat: attacker scripts thousands of order attempts to test stolen payment tokens. Impact: payment fraud, API abuse. Fix: add rate limiting middleware (e.g., 10 requests per minute per IP).

4. **Unvalidated `body.items`** -- Threat: attacker sends negative quantities or manipulated prices. Impact: financial loss, inventory corruption. Fix: validate items against server-side product catalog and pricing.

5. **Payment token passed in plain JSON** -- Threat: token logged in request middleware, stored in server logs. Impact: PCI compliance violation, token theft. Fix: ensure payment token is single-use and never logged.

6. **Information leakage in response** -- Threat: `orderId` may be sequential, allowing order enumeration. Impact: attacker scrapes order data. Fix: use UUIDs for order IDs.

7. **Missing CSRF protection** -- Threat: malicious site submits form to this endpoint using victim's session. Impact: unauthorized orders. Fix: verify `Origin` header or use CSRF tokens.

### Why It Works

**Role prompting** radically changes the model's perspective and depth. "Code reviewer" activates general-purpose feedback. "Security engineer conducting a threat model" activates adversarial thinking -- the model starts asking "how could this be exploited?" instead of "does this look clean?" Same code, completely different (and far more valuable) analysis.

---

## 7. Response Iteration -- Building Up a Component

### The Problem

A developer needs a search component with autocomplete, accessibility, and polished loading/error states. Trying to specify all of this in one prompt produces mediocre results across every dimension.

### The Single-Shot Approach

```
Create a search component with debounced input, results dropdown,
keyboard navigation, ARIA attributes, screen reader announcements,
loading skeleton, error state, and empty state. Use TypeScript, Tailwind,
and make it accessible.
```

**What you get**: A 200-line component that sort of does everything but does nothing well. The keyboard navigation half-works. The ARIA attributes are present but incorrect. The loading state is an afterthought.

### The Iterative Approach (3 messages, 1 thread)

**Message 1: Core functionality**

```
Create a ProductSearch component with:
- Debounced text input (300ms delay)
- Fetches results from /api/products/search?q=
- Displays results in a dropdown below the input
- Clicking a result calls onSelect(product)
- TypeScript, Tailwind, named export
```

**Result**: Clean, focused component that does search well. No distractions.

**Message 2: Accessibility pass**

```
Now review this component for accessibility and fix all issues:
- Full keyboard navigation (arrow keys to move, Enter to select,
  Escape to close)
- ARIA: combobox pattern (role, aria-expanded, aria-activedescendant,
  aria-controls)
- Screen reader: announce result count when results load
- Focus management: return focus to input after selection
```

**Result**: The existing component is enhanced with proper combobox ARIA pattern. Keyboard handlers are added cleanly because the base component is already solid. The model has full context of the component's structure.

**Message 3: Polish and edge cases**

```
Add loading, error, and empty states:
- Loading: skeleton UI matching the result item dimensions (not a spinner)
- Error: inline message with retry button (not a toast)
- Empty: "No products found for '[query]'" with search suggestions
- Ensure all states are announced to screen readers via aria-live
```

**Result**: Each state is thoughtfully implemented because the model is building on top of a component it already understands deeply. The skeleton dimensions match the actual result items. The aria-live regions work correctly because the model knows the existing ARIA structure.

### Why It Works

**Response iteration** exploits the model's context window. Each follow-up message benefits from full knowledge of what was already built. The model doesn't re-invent the component -- it surgically enhances it. Three focused messages produce dramatically better results than one mega-prompt because each message has a single, clear objective. **Three messages in one thread beats three separate conversations every time.**

---

## 8. The copilot-instructions.md -- Team Scaling

### The Problem

One developer on the team writes great prompts. The other eight get mediocre output. Knowledge is locked in one person's head. How do you scale prompt quality across the whole team?

### The Solution: A Shared Instructions File

Create a `.github/copilot-instructions.md` (or equivalent for your AI tool) that automatically loads with every interaction. Every team member gets the same baseline context.

### A Production-Ready Example

```markdown
# CMS Team -- AI Coding Instructions

## Stack
- React 18 + TypeScript 5.4 (strict mode)
- Next.js 14 App Router (server components by default)
- Tailwind CSS 3.4 (no CSS modules, no styled-components)
- Contentful CMS (Management API for migrations, Delivery API for reads)
- Zod for runtime validation

## Naming Conventions
- Files and folders: kebab-case (`product-card.tsx`, `use-products.ts`)
- Components: PascalCase (`ProductCard`), named exports only
- Hooks: camelCase with `use` prefix (`useProducts`)
- Types: PascalCase, no `I` prefix (`ProductProps`, not `IProductProps`)
- Constants: SCREAMING_SNAKE_CASE (`MAX_PRODUCTS_PER_PAGE`)

## File Structure
Components use co-located folders:
```
product-card/
  product-card.tsx      # Component implementation
  product-card.test.tsx # Tests
  index.ts              # Barrel export: export { ProductCard } from './product-card'
```

## Code Rules
- `const` only, arrow functions exclusively
- Props destructured on their own line
- No `any` -- use `unknown` and narrow with type guards
- No default exports
- No inline styles
- No `// explanatory comments` -- code should be self-documenting
- Error handling: Result pattern over try/catch for business logic
- All external data validated with Zod at entry point

## Contentful Migrations
- Use `contentful-migration` package
- Field IDs: camelCase
- Include `displayField` in content type definition
- Add validation (required, unique, regex) to every field
- Add editor interface configuration (widget, help text)
- Migrations must be reversible (include `down` function)

## Testing
- Vitest + React Testing Library
- Test behavior, not implementation
- No snapshot tests
- No `data-testid` unless aria attributes cannot serve the purpose
```

### Simple Prompt WITH Instructions Active

```
Create a content type migration for a BlogPost model with title, slug,
body, author reference, and publishDate.
```

### What You Get Back (With Instructions)

A complete migration file using `contentful-migration`, with camelCase field IDs, proper validations (title required, slug unique with regex pattern, body as rich text, author as a single reference link, publishDate as Date), `displayField` set to `title`, editor interface configuration with help text for each field, and a `down` function that deletes the content type. File named `create-blog-post.ts` in kebab-case. Every convention followed without being asked.

### Without Instructions, Same Prompt

A migration with snake_case field IDs, missing validations, no editor interface, no `down` function, default exported, and placed in a file named `BlogPostMigration.ts`. Requires 15 minutes of cleanup to match team standards.

### Why It Works

The instructions file is a **system prompt that scales to the entire team**. Instead of each developer remembering to specify "TypeScript strict, Tailwind only, no default exports, kebab-case files," the AI knows this automatically. The marginal cost of a good prompt drops to near zero -- even a simple one-line request produces convention-compliant output.

---

## 9. The "Don't Restart" Pattern -- Context Accumulation

### The Problem

A developer is building a product filter sidebar. They start a conversation, get a first draft, realize they need to add a few things, and start a brand new conversation to "start fresh."

### The Restart Approach (3 Separate Conversations)

**Conversation 1:**
> "Build a product filter sidebar with category filters, price range, and color selection. TypeScript, Tailwind, uses our ProductFilter type..."
>
> *(200 tokens of context re-stated)*

**Result**: Basic filter component. Decent.

**Conversation 2:**
> "Build a product filter sidebar with category filters, price range, and color selection. TypeScript, Tailwind, uses our ProductFilter type. Also needs URL sync so filters persist on page refresh..."
>
> *(250 tokens of context re-stated, all the same stuff plus the new requirement)*

**Result**: Completely different component. URL sync works, but the category filter implementation is different from Conversation 1. Inconsistent.

**Conversation 3:**
> "Build a product filter sidebar with category filters, price range, and color selection. TypeScript, Tailwind, uses our ProductFilter type. Also needs URL sync and mobile responsive drawer behavior..."
>
> *(300 tokens of context re-stated yet again)*

**Result**: Third completely different component. Now you have three versions and need to manually merge the best parts.

**Cost**: 3 conversations, ~750 tokens of repeated context, 3 inconsistent outputs, manual merge required.

### The Iterate Approach (1 Thread, 3 Follow-ups)

**Message 1:**
> "Build a product filter sidebar with category filters, price range, and color selection. TypeScript, Tailwind, uses our ProductFilter type."

**Message 2:**
> "Add URL sync so the active filters persist in the query string and survive page refresh."

**Message 3:**
> "Make the sidebar collapse into a drawer on mobile (below 768px) with a filter icon toggle."

**Cost**: 1 conversation, 200 tokens of context stated once, each output builds on the previous, coherent final result.

### Why It Works

The AI's context window is your most powerful tool. Each follow-up message benefits from everything that came before: the types you defined, the component structure, the naming patterns. When you restart, all of that is lost. **Iteration is both higher quality (coherent output) and more efficient (less repetition).** Treat each conversation like a working session, not a single transaction.

---

## 10. The Meta-Prompt -- Generating System Prompts

### The Problem

You need a reusable system prompt for a recurring task -- like reviewing Contentful content model migrations. Writing a good system prompt from scratch is itself a prompt engineering challenge.

### The Meta-Prompt

```
I need a system prompt I can reuse every time I ask an AI to review a
Contentful content model migration. The prompt should ensure the review
covers:

1. Backward compatibility (will this break existing content or API consumers?)
2. Field validation (are all fields properly constrained?)
3. Localization impact (does this work across en-CA, en-US, fr-CA, zh-Hans?)
4. Editorial workflow (is this usable for content editors, not just developers?)

Structure the prompt using these building blocks:
- Role: who the AI should act as
- Context: what it's reviewing and why it matters
- Constraints: what to focus on and what to skip
- Output format: how to structure the findings
- Examples: one example of a good finding and one example of a bad finding

The system prompt should be direct, specific, and under 400 words.
```

### What You Get Back

A polished, reusable system prompt like:

```
You are a senior CMS architect reviewing a Contentful content model migration
for the lululemon e-commerce platform. This migration will be applied to a
production space serving 4 locales (en-CA, en-US, fr-CA, zh-Hans) and consumed
by a Next.js storefront and a mobile app via the Contentful Delivery API.

Review the migration for these categories:

**Backward Compatibility**
- Will existing entries break after migration?
- Will any Delivery API consumer receive unexpected null/undefined fields?
- Are new required fields given default values or marked optional initially?

**Field Validation**
- Does every field have appropriate validation (required, unique, regex, size)?
- Are reference fields constrained to specific content types?
- Are rich text fields limited to appropriate node types?

**Localization**
- Are all user-facing fields marked as localized?
- Are system/config fields correctly marked as non-localized?
- Will this work correctly for RTL/CJK character sets?

**Editorial Workflow**
- Are field help texts provided for non-obvious fields?
- Is the display field set to something editors recognize?
- Is the editor interface configured (widget selection, field grouping)?

For each issue found, provide:
- Severity: BLOCKER (will cause data loss or API breaks) | WARNING (suboptimal
  but not breaking) | SUGGESTION (improvement for future)
- Description: one sentence
- Fix: specific migration code change

Good finding example:
> [BLOCKER] New required field `seoTitle` has no default value. Existing
> 342 product entries will fail validation on next publish. Fix: add
> `{ defaultValue: { 'en-CA': '' } }` or mark as not required initially.

Bad finding example (do not produce these):
> [SUGGESTION] Consider adding more fields for SEO.

Do NOT comment on code style, variable naming, or formatting.
```

### Why It Works

**Meta-prompting** -- using AI to write prompts for AI -- is the highest-leverage skill in this entire presentation. The system prompt above took 30 seconds to generate and will be reused hundreds of times. It's also better than what most people would write from scratch because the AI has seen thousands of effective system prompts. **Use AI to write the prompts that make AI better.**

---

## Quick Reference: Prompt Engineering Cheat Sheet

| Pattern | When to Use | Template |
|---|---|---|
| **System Prompt** | Every interaction | Role + Context + Constraints + Format + Examples |
| **Few-Shot** | Pattern completion, data transforms, formatting | 2-3 input/output examples, then the real request |
| **Chain-of-Thought** | Complex logic, error handling, multi-step reasoning | "Before writing code, reason through step by step..." |
| **APE** | Any task request | **A**ction (what) + **P**urpose (why) + **E**xpectation (done looks like) |
| **Constraints** | Always -- add to every prompt | "Focus ONLY on..." + "Do NOT..." block |
| **Response Iteration** | Complex features, multi-concern components | Generate core, then critique, then refine (same thread) |
| **Role Prompting** | Specialized reviews, security, performance | "You are a [specific role] reviewing [specific artifact]..." |
| **Meta-Prompt** | Creating reusable system prompts | "Generate a system prompt for [task] using: role, context, constraints, format, examples" |
| **Rethink, Don't Bolt On** | Starting any AI-assisted task | Step back to the *outcome* you need, then design the approach with AI as a collaborator -- don't just automate the old steps |

### The 30-Second Version

Every good prompt answers five questions:

1. **Who** are you? (Role)
2. **What** am I working with? (Context -- stack, constraints, existing code)
3. **What** should you do? (Task -- specific, scoped)
4. **What** should you NOT do? (Constraints -- at least 3 "do nots")
5. **What** does done look like? (Output format -- structure, examples)

---

## Anti-Patterns to Avoid

### 1. "Make it better"

**Problem**: Better how? Faster? More readable? More accessible? The model picks randomly.

**Fix**: "Improve the render performance by memoizing the filtered product list and preventing re-renders when only the sort order changes."

### 2. "Fix the bugs"

**Problem**: The model doesn't know which behavior is a bug and which is intentional.

**Fix**: "When I click 'Add to Bag' on a product with no available sizes, nothing happens. Expected: show a 'Select a size' tooltip on the size selector."

### 3. Starting with "Can you..."

**Problem**: "Can you write a function that..." is 4 wasted tokens. The model will always say yes and then do the thing. Just state the task.

**Fix**: "Write a function that..." -- or even better, just describe the function: "A `formatPrice` function that takes cents (number) and locale (string) and returns a formatted currency string."

### 4. Restarting instead of iterating

**Problem**: Every new conversation loses all prior context. You re-explain your stack, your constraints, your types -- every time.

**Fix**: Keep building in the same thread. Follow up with refinements. The model remembers everything.

### 5. Zero constraints

**Problem**: Without "do nots," the model makes default assumptions (CSS modules, default exports, explanatory comments) that don't match your codebase.

**Fix**: Every prompt should include at least 3 constraints. "No default exports. No inline styles. No `any` types."

### 6. The kitchen sink prompt

**Problem**: "Build a search component with autocomplete, keyboard nav, accessibility, animations, caching, error handling, loading states, and mobile responsiveness." Too many concerns. Each gets 12% of the model's attention.

**Fix**: Break into 3-4 focused requests in the same thread. Each concern gets 100% attention, and results compound.

### 7. Bolting AI onto your old workflow

**Problem**: You take your existing 6-step process, find the slow step, and ask AI to do it. The output is mediocre because the AI has no context about the decisions that led to that step.

**Fix**: Step back to the outcome. Instead of "write tests for this function," try "here's the behavior I need — generate the implementation and tests together." Operate at a higher level of abstraction. The teams getting the most value aren't automating old processes — they're rethinking the process itself.

### 8. No context about your stack

**Problem**: "Write a form component" could produce React, Vue, Angular, Svelte, or vanilla JS. It could use CSS modules, styled-components, Tailwind, or inline styles.

**Fix**: State your stack explicitly: "Using React 18, TypeScript strict mode, Tailwind CSS, React Hook Form with Zod validation." Or better yet, put it in your `copilot-instructions.md` so you never have to say it again.

---

*"The gap between a mediocre developer with great prompts and a great developer with no prompts is closing fast. The gap between a great developer with great prompts and everyone else is widening."*
