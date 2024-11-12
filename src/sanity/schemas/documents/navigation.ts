import { VscSymbolClass } from 'react-icons/vsc'
import { defineField, defineType } from 'sanity'
import { count } from '../../lib/utils'

export default defineType({
	name: 'navigation',
	title: 'Navigation',
	icon: VscSymbolClass,
	type: 'document',
	fields: [
		// Title of the navigation
		defineField({
			name: 'title',
			type: 'string',
			validation: (Rule) =>
				Rule.required()
					.min(3)
					.max(100)
					.error(
						'Title is required and should be between 3 and 100 characters',
					),
		}),

		// Items for navigation: An array of links or lists
		defineField({
			name: 'items',
			type: 'array',
			of: [{ type: 'link' }, { type: 'link.list' }],
			validation: (Rule) =>
				Rule.required()
					.min(1)
					.error('Navigation should contain at least one item'),
		}),

		// SEO Fields for better search engine optimization
		defineField({
			name: 'seoTitle',
			title: 'SEO Title',
			type: 'string',
			description: 'Title used for SEO purposes',
			validation: (Rule) =>
				Rule.min(10)
					.max(70)
					.error('SEO Title should be between 10 and 70 characters'),
		}),
		defineField({
			name: 'seoDescription',
			title: 'SEO Description',
			type: 'text',
			description: 'Description used for SEO purposes',
			validation: (Rule) =>
				Rule.min(50)
					.max(160)
					.error('SEO Description should be between 50 and 160 characters'),
		}),

		// Parent Navigation: For creating hierarchical structures
		defineField({
			name: 'parent',
			title: 'Parent Navigation',
			type: 'reference',
			to: [{ type: 'navigation' }],
			description:
				'Select a parent navigation to create a hierarchy (optional)',
		}),

		// Ordering: Control the order of the items in navigation
		defineField({
			name: 'ordering',
			title: 'Ordering',
			type: 'number',
			description:
				'Set the order of navigation items (lower numbers appear first)',
			validation: (Rule) =>
				Rule.min(0).error('Ordering should be a positive number'),
		}),

		// Additional Description for the navigation item
		defineField({
			name: 'description',
			title: 'Description',
			type: 'text',
			description: 'A short description for the navigation item',
			validation: (Rule) =>
				Rule.min(10)
					.max(200)
					.error('Description should be between 10 and 200 characters'),
		}),
	],

	// Preview Configuration
	preview: {
		select: {
			title: 'title',
			items: 'items',
			seoTitle: 'seoTitle',
			ordering: 'ordering',
		},
		prepare: ({ title, items, seoTitle, ordering }) => ({
			title,
			subtitle: `${seoTitle || 'No SEO title'} | Items: ${count(items)} | Order: ${ordering || 'N/A'}`,
		}),
	},
})
