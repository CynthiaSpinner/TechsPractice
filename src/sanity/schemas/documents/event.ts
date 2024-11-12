import imageBlock from '../fragments/image-block'
import { VscCalendar } from 'react-icons/vsc'
import { defineArrayMember, defineField, defineType } from 'sanity'

// Import necessary Sanity helpers for defining schema types and fields

// Import a React icon to represent the event schema in the Sanity Studio

// Import a custom fragment for handling image blocks in the body field

// Define the event schema
export default defineType({
	// The name of this schema (used internally in Sanity and as the document type)
	name: 'event',

	// The title of the schema as it will appear in the Sanity Studio
	title: 'Event',

	// The icon for the schema, which will appear in the Sanity Studio (uses a calendar icon here)
	icon: VscCalendar,

	// The type of this schema (it is a "document", meaning this is a full document schema in Sanity)
	type: 'document',

	// Groups organize fields into sections within the Sanity Studio
	groups: [
		// The "content" group holds all main content-related fields like title, description, and event body
		{ name: 'content', default: true },

		// The "options" group holds settings like "featured" status and other options
		{ name: 'options' },

		// The "seo" group holds fields related to SEO, such as metadata
		{ name: 'seo', title: 'SEO' },
	],

	// Define the fields in this schema (which users will see and edit in the Studio)
	fields: [
		// Title field: The main title of the event (required)
		defineField({
			name: 'title', // The field's name (this is used to reference the field in code)
			type: 'string', // The data type is a string
			validation: (Rule) => Rule.required(), // Validation rule to make sure the field is filled out
			group: 'content', // This field belongs to the "content" group
		}),

		// Description field: A text field where the user can provide a detailed event description (required)
		defineField({
			name: 'description', // Field name
			type: 'text', // The field type is "text", meaning it can store multiple lines of text
			validation: (Rule) => Rule.required(), // Validation rule (the description must be provided)
			group: 'content', // This field belongs to the "content" group
		}),

		// Event Date field: The date and time when the event takes place (required)
		defineField({
			name: 'eventDate', // Field name
			type: 'datetime', // The field type is "datetime" to capture date and time
			validation: (Rule) => Rule.required(), // The event date is required
			group: 'content', // This field belongs to the "content" group
		}),

		// Location field: The physical or online location of the event (optional)
		defineField({
			name: 'location', // Field name
			type: 'string', // The field type is "string", so the location is a short piece of text
			group: 'content', // This field belongs to the "content" group
		}),

		// Speakers field: An array of references to "person" documents for speakers at the event
		defineField({
			name: 'speakers', // Field name
			type: 'array', // This is an array, meaning there can be multiple speakers
			of: [
				{
					type: 'reference', // Each item in the array is a reference to another document
					to: [{ type: 'person' }], // The reference is to the "person" document type
				},
			],
			group: 'content', // This field belongs to the "content" group
		}),

		// Image field: An image field to upload an image associated with the event (e.g., event banner)
		defineField({
			name: 'image', // Field name
			type: 'image', // The field type is "image"
			group: 'content', // This field belongs to the "content" group
		}),

		// Body field: An array of content blocks for the body of the event page
		defineField({
			name: 'body', // Field name
			type: 'array', // The field type is "array", meaning it can contain multiple items
			of: [
				{ type: 'block' }, // A block of text (like paragraphs)
				imageBlock, // Custom image block fragment (imported from the fragments directory)
				defineArrayMember({
					type: 'code', // A code block that can include filename support
					options: {
						withFilename: true, // Option to allow filename display in the code block
					},
				}),
				{ type: 'custom-html' }, // A custom HTML block for embedding raw HTML
			],
			group: 'content', // This field belongs to the "content" group
		}),

		// Featured field: A boolean to mark whether the event is featured or not
		defineField({
			name: 'featured', // Field name
			type: 'boolean', // The field type is "boolean" (true/false)
			group: 'options', // This field belongs to the "options" group
			initialValue: false, // The default value for "featured" is false
		}),

		// Hide Table of Contents field: A boolean to hide the table of contents for the event page
		defineField({
			name: 'hideTableOfContents', // Field name
			type: 'boolean', // The field type is "boolean" (true/false)
			group: 'options', // This field belongs to the "options" group
			initialValue: false, // The default value for "hideTableOfContents" is false
		}),

		// Metadata field: A reference to the metadata schema, typically containing SEO-related data
		defineField({
			name: 'metadata', // Field name
			type: 'metadata', // The field type is a reference to the "metadata" schema
			group: 'seo', // This field belongs to the "seo" group
		}),
	],

	// Preview section: How this event document will be previewed in the Sanity Studio
	preview: {
		select: {
			// Define which fields will be used to display the preview
			featured: 'featured',
			title: 'metadata.title', // Use the title from the "metadata" field
			eventDate: 'eventDate', // Use the event date for display
			slug: 'metadata.slug.current', // Use the current slug for the event
			media: 'metadata.image', // Use the image from the metadata
		},
		prepare: ({ title, eventDate, slug, media, featured }) => ({
			// Prepare the preview data
			title: [featured && '★', title].filter(Boolean).join(' '), // If featured, add a star to the title
			subtitle: [eventDate || 'No date', slug && `/${slug}`] // Format the subtitle with event date and slug
				.filter(Boolean)
				.join(' — '),
			media, // Display the image from the metadata
		}),
	},

	// Ordering options: How the events should be sorted in the studio's list view
	orderings: [
		{
			title: 'Event Date', // Sorting by event date
			name: 'eventDate', // Sort by the "eventDate" field
			by: [{ field: 'eventDate', direction: 'desc' }], // Sort in descending order (newest events first)
		},
		{
			title: 'Title', // Sorting by event title
			name: 'metadata.title', // Sort by the "title" field in metadata
			by: [{ field: 'title', direction: 'asc' }], // Sort in ascending order (A-Z)
		},
	],
})
