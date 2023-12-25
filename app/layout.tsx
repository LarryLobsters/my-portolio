import type { Metadata } from 'next'
import { Footer } from '@components/footer'
import { MobileNav } from '@components/mobile-navigation'
import { Navigation } from '@components/navigation'

import './globals.css'
import { Providers } from '@providers'

export const metadata: Metadata = {
	title: 'Larry Ly - Frontend developer',
	description: `I design & develop application that focus on smooth intuitive user experiences using modern web technologies.`,
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html
			lang='en'
			className='scroll-p-32 scroll-smooth'
			suppressHydrationWarning
		>
			<body className='bg-dark-50 text-dark-600 transition-colors duration-300 ease-in-out dark:bg-dark-850 dark:text-dark-50'>
				<Providers>
					<Navigation />
					<MobileNav />
					{children}
					<Footer />
				</Providers>
			</body>
		</html>
	)
}
