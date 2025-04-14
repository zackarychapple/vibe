# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build Commands
- Build all apps: `npx nx run-many --target=build --all`
- Build specific app: `npx nx build [app-name]` (e.g., `npx nx build feed`)
- Start dev server:
  - Host: `npx nx serve vibe`
  - Remotes: `npx nx serve feed`, `npx nx serve grok`, `npx nx serve create`
- Run tests: `npx nx test [app-name]` (e.g., `npx nx test vibe`)
- Run single test: `npx nx test [app-name] -- -t "test name"`
- Type check: `npx nx typecheck [app-name]`
- Check affected: `npx nx affected --target=build`

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

## Project Architecture
- Microfrontend architecture for an X clone
- `vibe`: Host application (app shell)
- Remote microfrontends:
  - `feed`: Displays feed content
  - `grok`: AI capabilities
  - `create`: Post creation functionality

## Commit Guidelines
- Uses commitlint with conventional commit format
- Valid scopes: `vibe`, `feed`, `grok`, `create`
- Format: `type(scope): message` (e.g., `feat(feed): add post component`)
- Types: feat, fix, docs, style, refactor, test, chore, etc.