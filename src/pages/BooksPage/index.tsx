import React from 'react'
import { BookUpload } from '@/features/bookUpload/ui'
import { AppBar, Box, CssBaseline, Toolbar, Typography } from '@mui/material'
import { BookLibrary } from '@/features/bookLibrary'
import './style.scss'

const BooksPage = () => {
	return (
		<div className="BookLayout">
			<CssBaseline />
			<AppBar position="static">
				<Toolbar>
					<Typography variant="h6" color="inherit" noWrap>
						Bilingual app
					</Typography>
				</Toolbar>
			</AppBar>
			<main>
				<div>
					<div className="BookLayout_content">
						<Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
							Try to upload book
						</Typography>

						<Box sx={{ textAlign: 'center' }}>
							<BookUpload />
						</Box>
					</div>
				</div>
				<Typography component="h1" variant="h5" align="center" color="textPrimary" gutterBottom>
					Your library
				</Typography>
				<div>
					<BookLibrary />
				</div>
			</main>
			<footer className="BookLayout_footer">
				<Typography variant="h6" align="center" gutterBottom>
					Footer
				</Typography>
				<Typography variant="subtitle1" align="center" color="textSecondary" component="p">
					Something here to give the footer a purpose!
				</Typography>
			</footer>
		</div>
	)
}
export default BooksPage
