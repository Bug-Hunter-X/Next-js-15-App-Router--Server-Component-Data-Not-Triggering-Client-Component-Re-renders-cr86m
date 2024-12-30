# Next.js 15 App Router: Server Component Data Not Triggering Client Component Re-renders

This repository demonstrates a bug in Next.js 15's App Router where data updates in a server component do not always trigger re-renders in associated client components.  This can lead to stale data being displayed in the UI.

## Bug Description:

The issue occurs when using server components to fetch data and pass that data down to client components.  Even with appropriate `use` or `useState` hooks in the client component, re-rendering does not consistently happen when the server component data changes.

## Reproduction Steps:

1. Clone this repository.
2. Run `npm install`.
3. Run `npm run dev`.
4. Observe the behavior.  The counter from the server component may not always update the client component.

## Solution:

The solution involves using a combination of appropriate state management strategies to ensure data is refetched whenever necessary in the client component, thereby triggering a re-render.