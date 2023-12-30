'use client'

import { motion } from 'framer-motion'

import { footerItemVariants, footerVariants } from '@components/footer'

export function Footer() {
	return (
		<motion.footer
			variants={footerVariants}
			initial='hidden'
			whileInView='visible'
			viewport={{ once: true }}
			className='md:flex-row md:justify-between container flex flex-col justify-center gap-10 py-16'
		>
			<section className='md:gap-12 flex w-1/2 gap-8 text-xl'>
				<motion.a
					href='https://github.com/LarryLobsters'
					target='_blank'
					rel='noreferrer'
					variants={footerItemVariants}
					className='nav-link text-dark-500 text-xl'
				>
					Github
				</motion.a>

				<motion.a
					href='https://www.linkedin.com/in/larry-l-3349721a4/'
					target='_blank'
					rel='noreferrer'
					variants={footerItemVariants}
					className='nav-link text-dark-500 text-xl'
				>
					Linkedin
				</motion.a>
			</section>

			<motion.p
				variants={footerItemVariants}
				className='text-dark-300 dark:text-dark-400 font-light'
			>
				&copy; larryLobsters {new Date().getFullYear()}
			</motion.p>
		</motion.footer>
	)
}
