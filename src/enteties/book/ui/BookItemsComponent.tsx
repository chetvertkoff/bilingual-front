import React, { FC, useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import { Box, Card, CardMedia, Grid } from '@mui/material'
import * as noimage from '@/common/assets/img/noimage.jpg'
import { Callback } from '@/common'
import { bookListStore } from '@/enteties/book/model/BookListStore'
import { BookModel } from '@/common/api/model/Book/BookModel'

const { loadBooks } = bookListStore

interface Props {
	onItemClick?: Callback<BookModel>
}
export const BookItemsComponent: FC<Props> = observer(({ onItemClick }) => {
	const { bookList } = bookListStore

	useEffect(() => {
		loadBooks()
	}, [])

	return (
		<Box>
			<Grid container rowSpacing={5} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
				{bookList.map((item) => (
					<Grid item xs={2} key={item.id} onClick={() => onItemClick?.(item)}>
						<Card sx={{ maxWidth: 345 }}>
							<CardMedia component="img" image={noimage.default} />
						</Card>
					</Grid>
				))}
			</Grid>
		</Box>
	)
})
