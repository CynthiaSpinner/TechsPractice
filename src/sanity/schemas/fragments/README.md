# Fragments

This directory contains reusable field definitions or groups of fields that can be included in other documents. Fragments allow you to avoid repetition by defining commonly used fields that are shared across multiple document types.

## Purpose
Fragments are typically used to define reusable field groups or components that appear in multiple documents. For example, a "SEO metadata" fragment could be included in various document types like articles, product pages, and home pages.

## Example Usage
For example:
- `seoMeta.ts`: A fragment for SEO metadata that can be added to any document type to define meta title, description, and other SEO-related fields.
- `address.ts`: A reusable fragment for address fields that can be used across various document types like event locations, office locations, etc.

## Structure
- **Reusable field groups**: Fragments define groups of fields that can be reused across multiple documents.
- **Modular data**: Each fragment can be plugged into a document schema to add common fields.

## Note
Use this directory for reusable content or field definitions that are shared across multiple document types or sections of your site.
