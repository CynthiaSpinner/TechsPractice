import { GrBlockQuote } from 'react-icons/gr'
import { defineField, defineType } from 'sanity'
import { getBlockText } from '../../lib/utils'

export default defineType({
	name: 'testimonial',
	title: 'Testimonial',
	icon: GrBlockQuote,
	type: 'document',
	fields: [
		// Content Field: Array of blocks (for testimonial text)
		defineField({
			name: 'content',
			type: 'array',
			of: [{ type: 'block' }],
			validation: (Rule) =>
				Rule.required().min(1).error('Testimonial content is required'),
		}),

		// Author Information: Object for details about the testimonial author
		defineField({
			name: 'author',
			type: 'object',
			fields: [
				defineField({
					name: 'name',
					title: 'Author Name',
					type: 'string',
					validation: (Rule) =>
						Rule.required().min(1).error('Author name is required'),
				}),
				defineField({
					name: 'title',
					title: 'Author Title',
					type: 'string',
				}),
				defineField({
					name: 'image',
					title: 'Author Image',
					type: 'image',
					options: {
						hotspot: true,
					},
				}),
			],
			validation: (Rule) =>
				Rule.required().custom((author) => {
					if (!author?.name && !author?.title && !author?.image) {
						return 'At least one of Name, Title, or Image is required for the author'
					}
					return true
				}),
		}),

		// Rating Field: An optional rating field for testimonials
		defineField({
			name: 'rating',
			title: 'Rating',
			type: 'number',
			description: 'Rate the testimonial from 1 to 5 stars',
		}),

		// SEO Fields: Add SEO-related fields for better search engine indexing
		defineField({
			name: 'seoTitle',
			title: 'SEO Title',
			type: 'string',
		}),
		defineField({
			name: 'seoDescription',
			title: 'SEO Description',
			type: 'text',
		}),

		// Additional Media Field: Allow multiple images/videos for the testimonial
		defineField({
			name: 'media',
			title: 'Additional Media',
			type: 'array',
			of: [{ type: 'image' }, { type: 'video' }],
			description: 'Add images or videos that complement the testimonial.',
		}),
	],

	// Preview Configuration: Customize what the user sees in the preview
	preview: {
		select: {
			content: 'content',
			author: 'author',
			rating: 'rating',
			media: 'media',
		},
		prepare: ({ content, author, rating, media }) => ({
			title: author?.name || author?.title || 'No author',
			subtitle: getBlockText(content),
			media: author?.image,
			description: rating ? `Rating: ${rating} stars` : 'No rating provided',
			additionalInfo: media?.length
				? `${media.length} media items`
				: 'No media',
		}),
	},
})
