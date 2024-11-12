import { GoPerson } from 'react-icons/go'
import { defineField, defineType } from 'sanity'

export default defineType({
	name: 'person', // The internal name of the schema
	title: 'Person', // The title that will be shown in the Sanity Studio
	type: 'document', // The type is "document" because we're defining a document schema
	icon: GoPerson, // The icon to represent this schema in the Sanity Studio

	// Define fields for the 'person' document
	fields: [
		// The name of the person (required field)
		defineField({
			name: 'name', // Field name used internally
			title: 'Name', // Title displayed in the Sanity Studio UI
			type: 'string', // The type is "string", meaning a short text field
			validation: (Rule) => Rule.required(), // Validation rule to make sure the name is filled out
		}),

		// The image of the person (optional)
		defineField({
			name: 'image', // Field name used internally
			type: 'image', // The type is "image", meaning the field will hold an image
			options: {
				hotspot: true, // Enables hotspot functionality to crop the image
			},
		}),

		// Biography field (optional, rich text editor for detailed bio)
		defineField({
			name: 'biography', // Field name
			title: 'Biography', // Title displayed in the Sanity Studio UI
			type: 'text', // The type is "text", which supports long-form content
			description: 'Short biography or description of the person', // Tooltip description
		}),

		// Contact email field (optional, string type for email address)
		defineField({
			name: 'email', // Field name
			title: 'Email', // Title displayed in the Sanity Studio UI
			type: 'string', // The type is "string", which works for email addresses
			validation: (Rule) => Rule.required(), // Validation rule to make sure the email is filled out
		}),

		// Phone number field (optional, string type)
		defineField({
			name: 'phone', // Field name
			title: 'Phone', // Title displayed in the Sanity Studio UI
			type: 'string', // The type is "string", allowing phone number input
		}),

		// Social Media Links (array of strings)
		defineField({
			name: 'socialLinks', // Field name
			title: 'Social Media Links', // Title displayed in the Sanity Studio UI
			type: 'array', // The type is "array", meaning multiple items can be added
			of: [
				{
					type: 'url', // Each item in the array is a URL (link to social media profile)
				},
			],
			description: 'Links to social media profiles or websites', // Tooltip description
		}),

		// Job title field (optional)
		defineField({
			name: 'jobTitle', // Field name
			title: 'Job Title', // Title displayed in the Sanity Studio UI
			type: 'string', // The type is "string", meaning a short text input
			description: "The person's job or role title", // Tooltip description
		}),

		// Location field (optional)
		defineField({
			name: 'location', // Field name
			title: 'Location', // Title displayed in the Sanity Studio UI
			type: 'string', // The type is "string", allowing input for location
			description: 'Where the person is located (city, country)', // Tooltip description
		}),

		// Date of birth field (optional)
		defineField({
			name: 'dob', // Field name
			title: 'Date of Birth', // Title displayed in the Sanity Studio UI
			type: 'date', // The type is "date", so the field will capture a date
			description: "The person's date of birth", // Tooltip description
		}),

		// Website field (optional, URL type)
		defineField({
			name: 'website', // Field name
			title: 'Website', // Title displayed in the Sanity Studio UI
			type: 'url', // The type is "url", which is a valid URL input field
			description: 'Personal or professional website link', // Tooltip description
		}),

		// Featured status (boolean, used to mark if the person should be featured in a list)
		defineField({
			name: 'featured', // Field name
			title: 'Featured', // Title displayed in the Sanity Studio UI
			type: 'boolean', // The type is "boolean" (true/false)
			initialValue: false, // Default value is false (not featured by default)
			description: 'Mark this person as featured', // Tooltip description
		}),

		// Published status (boolean, used to mark whether the person's profile is visible or not)
		defineField({
			name: 'published', // Field name
			title: 'Published', // Title displayed in the Sanity Studio UI
			type: 'boolean', // The type is "boolean" (true/false)
			initialValue: true, // Default value is true (published by default)
			description: "Whether the person's profile is visible or not", // Tooltip description
		}),
	],
})
