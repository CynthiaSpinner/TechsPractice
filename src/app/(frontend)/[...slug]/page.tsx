import Modules from '@/ui/modules'
import client from '@/sanity/client'
import processMetadata from '@/lib/processMetadata'
import { notFound } from 'next/navigation'
import { fetchSanityLive, groq } from '@/sanity/lib/fetch'
import { modulesQuery } from '@/sanity/lib/queries'

type Props = {
	params: { slug?: string[] }
}

export default async function Page({ params }: Props) {
	const page = await getPage(await params)
	if (!page) notFound()
	return <Modules modules={page?.modules} page={page} />
}

export async function generateMetadata({ params }: Props) {
	const page = await getPage(await params)
	if (!page) notFound()
	return processMetadata(page)
}

export async function generateStaticParams() {
	const slugs = await client.fetch<string[]>(
		groq`*[
			_type == 'page' &&
			defined(metadata.slug.current) &&
			!(metadata.slug.current in ['index', '404', 'blog/*'])
		].metadata.slug.current`,
	)

	// Add a check to see if slugs are returned correctly
	if (!slugs.length) {
		throw new Error('No slugs found for pages')
	}

	return slugs.map((slug) => ({ slug: slug.split('/') }))
}

async function getPage(params: { slug?: string[] }) {
	return await fetchSanityLive<Sanity.Page>({
		query: groq`*[
			_type == 'page' &&
			metadata.slug.current == $slug &&
			!(metadata.slug.current in ['index', '404', 'blog/*'])
		][0]{
			...,
			modules[]{ ${modulesQuery} },
			metadata {
				...,
				'ogimage': image.asset->url + '?w=1200'
			}
		}`,
		params: { slug: params.slug?.join('/') },
	})
}

//* params should already be resolved when passed to the component, awaiting it might cause unnecessary delays. I could be wrong though.. still trying to understand all this.
/* type Props = {
	params: Promise<{ slug?: string[] }>
}
 */
