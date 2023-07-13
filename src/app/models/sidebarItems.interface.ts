export interface SidebarItem {
	label: string
	path?: string
	action?: () => void
	roles?: string[]
	children?: SidebarItem[]
	extraClass?: string
}
