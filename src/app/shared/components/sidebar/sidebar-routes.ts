import { SidebarItem } from "@models/sidebarItems.interface"

export const sidebarRoutes: SidebarItem[] = [
	{
		path: '',
		label: "Inicio"
	},
	{
		label: 'Componentes',
		children: [
			{
				path: 'components',
				label: 'Todos los componentes'
			},
		]
	},
	{
		path: 'directivas',
		label: 'Directivas',
		children: [
			{
				path: 'show-dev',
				label: 'Modo dev (*showDev)'
			},
			{
				path: 'feature-flag',
				label: 'Modo dev (feature-flag)'
			},
		]
	},
	{
		label: 'Llamar consola',
		action: () => { console.log('AAAAAAAAA') }
	}
]
