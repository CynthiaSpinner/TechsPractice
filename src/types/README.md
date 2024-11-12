# types

This directory contains TypeScript type definitions that are used across the application. These types are used to define the shape of data, functions, or props, providing type safety and improving the developer experience.

## Purpose
The `types` directory is responsible for organizing all TypeScript types that define how data is structured, what arguments are passed to functions, or what props are required in components.

## Example Usage
- **Data models**: Type definitions for the data you fetch from APIs or store in the state.
- **Component props**: Define the shape of props that components expect.
- **Function types**: Define function signatures, including argument types and return types.

## Structure
- **Data types**: Types that define the structure of data objects.
- **Component types**: Types for React component props or context.
- **Utility types**: Types for helper functions and logic.

## Example
```typescript
// Example: event.ts in types
export interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
  speakers: string[];
}
