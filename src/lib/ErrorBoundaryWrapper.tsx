import React from 'react'

// Props type for the error boundary wrapper
type ErrorBoundaryWrapperProps = {
	children: React.ReactNode
	name: string
}

export function ErrorBoundaryWrapper({
	children,
	name,
}: ErrorBoundaryWrapperProps) {
	try {
		return <>{children}</>
	} catch (error) {
		console.error(`Error rendering ${name}:`, error)
		return null
	}
}
