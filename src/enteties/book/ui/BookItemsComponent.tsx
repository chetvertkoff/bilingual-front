import React, { FC, useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import { Box, Card, CardMedia, Grid, LinearProgress } from '@mui/material'
import * as noimage from '@/common/assets/img/noimage.jpg'
import { BaseRequestParams, Callback } from '@/common'
import { bookListStore } from '@/enteties/book/model/BookListStore'
import { BookModel } from '@/common/api/model/Book/BookModel'

const { loadBooks } = bookListStore

interface Props {
	onItemClick?: Callback<BookModel>
}
export const BookItemsComponent: FC<Props> = observer(({ onItemClick }) => {
	const { bookList, clearStore } = bookListStore

	useEffect(() => {
		loadBooks(new BaseRequestParams())

		return () => {
			clearStore()
		}
	}, [])

	return (
		<Box>
			<Grid container rowSpacing={5} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
				{bookList.map((item) => (
					<Grid item xs={2} key={item.id} onClick={() => onItemClick?.(item)}>
						<Card>
							{item.id}
							<CardMedia
								component="img"
								image={item?.cover ? `data:image;base64,${item.cover}` : noimage.default}
							/>
							{item.progress && <LinearProgress variant="determinate" value={item.progress} />}
						</Card>
					</Grid>
				))}
			</Grid>
		</Box>
	)
})
