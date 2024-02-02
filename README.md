# double-layout-not-found

This shows an interesting quirk where Next will evaluate `not-found` even when already running a matched page, causing 2x the work for shared components between both the page and `not-found`.

## Steps:

- Clone the repo
- Run `bun install` (Bun >= 1.0.6)
- Run `bun run dev`
- Navigate to [http://localhost:3000/](http://localhost:3000/test)
- See two logs on the server: `Fetching data for the header....`
