import '@/styles/app.css'
import Announcement from '@/ui/Announcement'
import Footer from '@/ui/footer'
import Header from '@/ui/header'
import SkipToContent from '@/ui/SkipToContent'
import VisualEditingControls from '@/ui/VisualEditingControls'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { ErrorBoundaryWrapper } from '@/lib/ErrorBoundaryWrapper'
import { checkComponentAvailability } from '@/lib/componentChecks'

// Type for props
type RootLayoutProps = {
	children: React.ReactNode
}

// Root layout component
export default async function RootLayout({ children }: RootLayoutProps) {
	// Check for missing components once
	checkComponentAvailability({
		SkipToContent,
		Announcement,
		Header,
		Footer,
		VisualEditingControls,
		Analytics,
		SpeedInsights,
	})

	return (
		<html lang="en">
			<head>
				<meta charSet="UTF-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<title>My App</title>
				<link rel="stylesheet" href="/path/to/fonts.css" />
			</head>

			<body className="bg-canvas text-ink">
				<ErrorBoundaryWrapper name="SkipToContent">
					{SkipToContent && <SkipToContent />}
				</ErrorBoundaryWrapper>

				<ErrorBoundaryWrapper name="Announcement">
					{Announcement && <Announcement />}
				</ErrorBoundaryWrapper>

				<ErrorBoundaryWrapper name="Header">
					{Header && <Header />}
				</ErrorBoundaryWrapper>

				<main id="main-content" tabIndex={-1}>
					{children}
				</main>

				<ErrorBoundaryWrapper name="Footer">
					{Footer && <Footer />}
				</ErrorBoundaryWrapper>

				<ErrorBoundaryWrapper name="VisualEditingControls">
					{VisualEditingControls && <VisualEditingControls />}
				</ErrorBoundaryWrapper>

				<ErrorBoundaryWrapper name="Analytics">
					{Analytics && <Analytics />}
				</ErrorBoundaryWrapper>

				<ErrorBoundaryWrapper name="SpeedInsights">
					{SpeedInsights && <SpeedInsights />}
				</ErrorBoundaryWrapper>
			</body>
		</html>
	)
}
