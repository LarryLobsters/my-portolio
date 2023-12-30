export type Project = {
	id: number
	name: string
	area: string
	link: string
	image: string
	imageAlt: string
	color?: string
}

export const projects: Project[] = [
	{
		id: 1,
		name: 'Admin Hippo',
		area: 'Design and Development',
		image:
			'https://cdn.dribbble.com/userupload/12178406/file/original-5e332247bb89258ea8e13dd1d5fadb23.png?resize=1471x1049',
		imageAlt: 'Legal prep application',
		link: '/project/tsks',
		color: '#1D1D26',
	},
	{
		id: 0,
		name: 'Swim Coach App',
		area: 'Design and Development',
		image:
			'https://cdn.dribbble.com/users/1858541/screenshots/17394216/media/113b3233d9f61e804377a2aa2488d613.png',
		imageAlt: 'Miinto 2.0 by larrydevelops',
		link: '/project/miinto',
	},
	{
		id: 2,
		name: '100 days of UI',
		area: 'Design',
		image:
			'https://cdn.dribbble.com/users/1858541/screenshots/15230513/media/7397c1314ebf5d5090efa3c2af032deb.png',
		imageAlt: '100 days of UI by larrydevelops',
		link: '/project/100-days-of-ui',
		color: '#E3E3E3',
	},
]
