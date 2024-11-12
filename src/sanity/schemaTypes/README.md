import { defineType } from "sanity";

# schematypes

This directory contains the schema definitions for the application's data structure. It is specifically used for the types related to Sanity schema files, including document types, objects, and custom field definitions.

## Purpose
The `schematypes` directory is for defining the Sanity schema types that structure the content your app will manage. This directory contains files that define what fields are available for content types and how those fields are structured.

## Example Usage
- **Document schemas**: Defines major content pieces (e.g., `Post`, `Event`, `Author`).
- **Object schemas**: Defines smaller, reusable field groups (e.g., `SeoMeta`, `ImageWithCaption`).
- **Custom field types**: Create reusable types like `customDatePicker` or `richText`.

## Structure
- **Document schemas**: Each document type corresponds to a content type in Sanity.
- **Object schemas**: Reusable data structures shared across multiple documents.
- **Field types**: Custom types that add specific functionalities like custom validation or input rendering.

## Example
```typescript
// Example: post.ts in schematypes

export default defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'body',
      title: 'Body',
      type: 'text',
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [{ type: 'author' }],
    },
  ],
});
