# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build Commands
- Build app: `npx nx build vibe`
- Start dev server: `npx nx serve vibe`
- Run tests: `npx nx test vibe`
- Run single test: `npx nx test vibe -- -t "test name"`
- Type check: `npx nx typecheck vibe`

## Code Style Guidelines
- Indentation: 2 spaces (defined in .editorconfig)
- Use TypeScript's strict mode
- Follow React functional component patterns
- Use Tailwind CSS for styling
- No unused local variables (enforced by TypeScript)
- Explicit return types on functions
- No fallthrough cases in switch statements
- Imports: Use absolute imports from the workspace root
- Test files: Use `.spec.tsx` extension, co-located with implementation files
- Components: PascalCase for component names and files
- Utilities: camelCase for utility functions and files
- Error handling: Prefer early returns, use try/catch for async operations

## Commit Guidelines
- Uses commitlint with conventional commit format
- Valid scopes: `vibe` (add new microfrontend scopes as they're created)
- Format: `type(scope): message` (e.g., `feat(vibe): add new component`)
- Types: feat, fix, docs, style, refactor, test, chore, etc.