## Steps
1. `npx create-nx-workspace vibe --packageManager=pnpm`
2. Complete the workspace creation
```bash
Need to install the following packages:
create-nx-workspace@20.8.0
Ok to proceed? (y) y


NX   Let's create a new workspace [https://nx.dev/getting-started/intro]

✔ Which stack do you want to use? · react
✔ What framework would you like to use? · none
✔ Application name · vibe
✔ Would you like to use React Router for server-side rendering [https://reactrouter.com/]? · No
✔ Which bundler would you like to use? · rspack
✔ Which unit test runner would you like to use? · vitest
✔ Test runner to use for end to end (E2E) tests · none
✔ Default stylesheet format · tailwind
✔ Would you like to use ESLint? · No
✔ Would you like to use Prettier for code formatting? · No
✔ Which CI provider would you like to use? · github

NX   Creating your v20.8.0 workspace.

✔ Installing dependencies with pnpm
✔ Successfully created the workspace: vibe.
✔ Nx Cloud has been set up successfully
✔ CI workflow has been generated successfully

NX   Your CI setup is almost complete.

Finish it by visiting: https://cloud.nx.app/connect/goBSWinhoZ

NX   Welcome to the Nx community! 👋

🌟 Star Nx on GitHub: https://github.com/nrwl/nx
📢 Stay up to date on X: https://x.com/nxdevtools
💬 Discuss Nx on Discord: https://go.nx.dev/community
```
3. `claude`
4. Inside claude terminal ui `/init`
5. Add commit lint `pnpm add --save-dev @commitlint/{cli,config-conventional}`
6. Echo config `echo "export default { extends: ['@commitlint/config-conventional'] };" > commitlint.config.js`
7. Add commit lint rules and guidance to claude config. `We will be using commitlint as we work on this project. As we create each microfrontend we will need to add it to the scopes for commit lint config. Lets add vibe as one of the valid scopes.`
8. Claude asked to add husky, allowed it to do so. 
