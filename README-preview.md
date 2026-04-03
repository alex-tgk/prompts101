# Local Markdown Preview

Quick local preview for markdown files in this workspace.

Usage

1. Install dependencies (pnpm recommended):

```bash
pnpm install
```

2. Start the local preview server:

```bash
pnpm preview
```

3. The preview opens at `preview/index.html`. You can also open directly in your browser and pass a file with `?file=qa-cheat-sheet.md`.

Notes

- The preview uses `live-server` to serve the workspace and `marked` + `highlight.js` to render markdown and highlight code.
- If you prefer a VS Code extension instead, I recommend `Markdown All in One` or `Markdown Preview Enhanced`.
