# Objects

This directory contains field definitions that are reusable in documents. Objects typically represent smaller, individual pieces of data that can be used in other documents to avoid redundancy.

## Purpose
Objects are used to define smaller, reusable fields or field groups that can be embedded within other schemas. These could be things like an image with caption, author information, or event details.

## Example Usage
For example:
- `author.ts`: Defines the fields for an author (name, bio, image, etc.) that can be reused across articles, blog posts, etc.
- `eventDetails.ts`: An object that defines fields related to event information (e.g., date, location, speakers) that can be included in various event-related documents.

## Structure
- **Smaller data objects**: Objects define individual data items that can be included as part of a larger document schema.
- **Reusability**: These objects are reusable across multiple documents and can be used to simplify the schema of those documents.

## Note
Use this directory for smaller pieces of data that will be embedded into other content types or documents.
