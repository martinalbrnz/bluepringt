import { SidebarItem } from "@models/sidebarItems.interface"

export const navRoutesMock: SidebarItem[] = [
	{
		path: '',
		label: "Inicio"
	},
	{
		label: 'Perfil',
		children: [
			{
				path: 'profile/:id',
				label: 'Ver mi perfil'
			},
			{
				path: 'perfil/editar',
				label: 'Actualizar'
			}
		]
	},
	{
		path: 'users',
		label: 'Usuarios',
	},
	{
		label: 'Proyectos',
		children: [
			{
				label: 'Nuevos',
				children: [
					{ label: 'Proyecto 1' },
					{ label: 'Proyecto 2' },
					{ label: 'Proyecto 3' },
					{ label: 'Proyecto 4' },
				]
			},
			{
				label: 'Empezados',
				children: [
					{ label: 'Proyecto 6' },
					{ label: 'Proyecto 7' },
					{ label: 'Proyecto 8' },
					{ label: 'Proyecto 9' },
					{ label: 'Proyecto 10' },
					{ label: 'Proyecto 11' },
				]
			},
			{
				label: 'Terminados',
				children: [
					{
						label: 'Proyecto 12',
						children: [
							{ label: 'Ingresos' },
							{ label: 'Costos' }
						]
					},
					{
						label: 'Proyecto 13',
						children: [
							{ label: 'Ingresos' },
							{ label: 'Costos' }
						]
					},
					{
						label: 'Proyecto 14',
						children: [
							{ label: 'Ingresos' },
							{ label: 'Costos' }
						]
					}
				]
			}
		]
	},
	{
		label: 'Llamar consola',
		action: () => { console.log('AAAAAAAAA') }
	}
]
