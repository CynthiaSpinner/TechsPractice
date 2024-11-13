import { createClient } from 'next-sanity'
import { projectId, dataset, apiVersion } from '../lib/env'
import { dev } from '../lib/env'

export default createClient({
	projectId: projectId,
	dataset,
	apiVersion,
	useCdn: !dev,
	stega: {
		studioUrl: '/admin',
	},
})
