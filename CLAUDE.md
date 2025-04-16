# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Setup
- Package manager: pnpm (use pnpm instead of npm/yarn)
- Monorepo management: NX
- Module Federation for microfrontends
- Build tool: Rspack with Zephyr plugin
- UI styling: Tailwind CSS

### Creating New Microfrontends
To create a new microfrontend app:
1. Generate a new app directly in the apps directory: `pnpm nx g @nx/react:app apps/[app-name] --bundler=rspack`
2. Remove the generated `nx-welcome.tsx` file to clean up the project
3. Rename `rspack.config.js` to `rspack.config.ts` and update it to use Module Federation
4. Ensure all Module Federation names use underscores (`_`) instead of hyphens (`-`) in ModuleFederationPlugin configuration:
   ```javascript
   name: 'app_name', // Use underscores for project names, not hyphens
   exposes: {
     './component_name': './src/app/component-name.tsx', // Use underscores in remote path identifiers, but component files can use kebab-case
   }
   ```
5. Update the host app (vibe) to import the new remote in its rspack.config.ts (using underscores in names)
6. Set up a consistent port for development in package.json and ensure it follows the pattern:
   ```json
   "scripts": {
     "serve": "rspack serve --port 301X" // e.g. 3014 for verified_orgs, following the pattern
   }
   ```
7. Install necessary UI dependencies for components:
   ```bash
   pnpm add @radix-ui/react-slot class-variance-authority clsx lucide-react tailwind-merge
   ```
8. Implement dynamic imports in the router.tsx file using React.lazy() with consistent naming:
   ```javascript
   const ComponentR = React.lazy(() => import('app_name/component_name')); // Use underscores to match ModuleFederationPlugin config
   ```

## Build Commands
- Install dependencies: `pnpm install`
- Build all apps: `pnpm nx run-many --target=build --all`
- Build specific app: `pnpm nx build [app-name]` (e.g., `pnpm nx build feed`)
- Start dev server:
  - Host: `pnpm nx serve vibe`
  - Remotes: `pnpm nx serve feed`, `pnpm nx serve grok`, `pnpm nx serve create`, `pnpm nx serve verified-orgs`
- Run tests: `pnpm nx test [app-name]` (e.g., `pnpm nx test vibe`)
- Run single test: `pnpm nx test [app-name] -- -t "test name"`
- Type check: `pnpm nx typecheck [app-name]`
- Check affected: `pnpm nx affected --target=build`

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

## UI Component Library

The project uses a shared UI component library located in `libs/ui`. This library provides common UI components used across all microfrontends to ensure consistency and reduce duplication.

### Available Components
- **Button**: A versatile button component with various styles and sizes
- **Avatar**: User avatar component with image and fallback support
- **Input**: Text input field with consistent styling
- **Separator**: Horizontal or vertical separator line

### Usage
The components can be imported directly from the @vibe/ui package:

```tsx
import { Button, Avatar, AvatarImage, AvatarFallback } from '@vibe/ui';

// Use components in your application
<Button variant="ghost">Click Me</Button>
```

## Microfrontend Architecture

### Overview
This project implements a Twitter/X clone using a microfrontend architecture with Module Federation. The application is split into multiple independently deployable frontend applications that are composed together at runtime.

### Apps Structure
- `vibe`: Host application (app shell)
  - Functions as the container app
  - Provides layout, navigation, and shared UI components
  - Consumes and integrates all remote microfrontends

- Remote microfrontends:
  - `feed`: Displays feed content
  - `grok`: AI capabilities
  - `create`: Post creation functionality
  - `verified-orgs`: Organization verification features
  - `explore`: Trending topics and exploration features

### Module Federation Implementation

#### Host App (vibe)
- Defined as the shell container in `apps/vibe/rspack.config.ts`
- Declares remotes with their URLs:
  ```javascript
  remotes: {
    'grok': 'grok@http://localhost:3011/remoteEntry.js',
    'create': 'create@http://localhost:3012/remoteEntry.js',
    'feed': 'feed@http://localhost:3013/remoteEntry.js',
    'verified_orgs': 'verified_orgs@http://localhost:3014/remoteEntry.js'
  }
  ```
- Declares shared dependencies (React, React DOM, TanStack libraries) to avoid duplication
- Uses React.lazy for code-splitting and dynamic importing of remote components
- Integrates imported components through TanStack Router routes

#### Remote MFEs (feed, grok, create, verified_orgs, explore)
Each remote MFE:
1. Exports specific components in its rspack.config.ts:
   ```javascript
   exposes: {
     './component_name': './src/app/component-name.tsx', // Underscore in the exposed name, kebab-case for actual file
   }
   ```
2. Has its own routing system using TanStack Router
3. Contains its own data fetching logic (using TanStack Query)
4. Can run independently or be integrated into the host

#### Component Organization & Entry Points
Each MFE maintains dual entry points:
- **[component].tsx** (e.g., explore.tsx): 
  - The primary exported component that other applications import
  - This is the component exposed via Module Federation in rspack.config.ts
  - Contains the actual UI logic and component implementation
  - Directly imports and uses data fetching hooks (e.g., `useTrends`)

- **app.tsx**: 
  - Only used when developing/viewing the MFE in standalone mode
  - Provides necessary wrapper context providers (QueryClientProvider)
  - Acts as the entry point that bootstraps the application for standalone development
  - Not exposed or used by other applications

### Routing Architecture
- Uses TanStack Router for declarative, type-safe routing
- Host app (`vibe`) defines the primary routes and integrates remote apps
- Route structure:
  - `/home` → Loads the Feed MFE
  - `/grok` → Loads the Grok AI MFE  
  - `/compose/post` → Loads the Create MFE
  - `/verified-orgs` → Loads the Verified Organizations MFE
- Remote MFEs have their own internal routing
  - For example, the Feed MFE handles tabs like "For you" and "Following"

### Data Management
- TanStack Query for data fetching, caching, and state management
- Each MFE manages its own data requirements
- Shared libraries/types ensure consistency across MFEs

#### Query Client Configuration
- **In app.tsx (for standalone mode)**: Contains a fully configured QueryClient with performance optimizations
  ```javascript
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 1000 * 60 * 5, // 5 minutes
        refetchOnWindowFocus: false,
      },
    },
  });
  ```
  - These settings are only used when the component runs standalone
  - Provides data caching for 5 minutes
  - Prevents unnecessary refetching when the window regains focus

- **In component files (e.g., explore.tsx)**: Simply use hooks directly
  ```javascript
  const { data: trends = [], isLoading: isTrendsLoading } = useTrends();
  ```
  - When integrated into the host app, uses the QueryClient configured in the host
  - No query configuration at the component level - follows separation of concerns
  - All data fetching uses the host's QueryClient and its caching rules when integrated

## Commit Guidelines
- Uses commitlint with conventional commit format
- Valid scopes: `vibe`, `feed`, `grok`, `create`, `verified-orgs`, `explore`, `common`
- Format: `type(scope): message` (e.g., `feat(feed): add post component`)
- Types: feat, fix, docs, style, refactor, test, chore, etc.

## Important Instructions for Claude
- NEVER commit changes automatically; always show proposed changes and wait for explicit user confirmation
- Do not push code to remote repositories
- For large changes, show staged changes before recommending commit