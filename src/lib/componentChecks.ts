// Utility function to check if components are loaded correctly
export function checkComponentAvailability(components: Record<string, any>) {
	Object.entries(components).forEach(([name, component]) => {
		if (!component) {
			console.warn(`${name} component is missing.`)
		}
	})
}
