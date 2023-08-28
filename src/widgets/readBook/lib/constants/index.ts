import { TagNames } from '@/enteties/book/paragraph'

export const paragraphSizes = ['0.5rem', '0.8rem', '1rem', '1.5rem', '2rem', '3rem', '4rem', '5rem']

export const h1Sizes = ['2rem', '3rem', '4rem', '5rem', '6rem', '7rem', '8rem', '9rem']

export const h2Sizes = [
	'1.6rem',
	'2.6rem',
	'3.6rem',
	'4.6rem',
	'5.6rem',
	'6.6rem',
	'7.6rem',
	'8.6rem',
]

export const h3Sizes = [
	'1.5rem',
	'2.5rem',
	'3.5rem',
	'4.5rem',
	'5.5rem',
	'6.5rem',
	'7.5rem',
	'8.5rem',
]

export const h4Sizes = [
	'1.4rem',
	'2.4rem',
	'3.4rem',
	'4.4rem',
	'5.4rem',
	'6.4rem',
	'7.4rem',
	'8.4rem',
]

export const h5Sizes = [
	'1.3rem',
	'2.3rem',
	'3.3rem',
	'4.3rem',
	'5.3rem',
	'6.3rem',
	'7.3rem',
	'8.3rem',
]

export const h6Sizes = [
	'1.2rem',
	'2.2rem',
	'3.2rem',
	'4.2rem',
	'5.2rem',
	'6.2rem',
	'7.2rem',
	'8.2rem',
]

export const bookReadTypography = {
	[TagNames.P]: paragraphSizes,
	[TagNames.H1]: h1Sizes,
	[TagNames.H2]: h2Sizes,
	[TagNames.H3]: h3Sizes,
	[TagNames.H4]: h4Sizes,
	[TagNames.H5]: h5Sizes,
	[TagNames.H6]: h6Sizes,
}
