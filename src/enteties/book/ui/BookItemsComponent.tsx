import React, { FC, useEffect, useState } from 'react'
import { bookActions, bookListState, BookState } from '@/enteties/book'
import { observer } from 'mobx-react-lite'
import { Box, Card, CardMedia, Grid } from '@mui/material'
import * as noimage from '@/common/assets/img/noimage.jpg'
import { Callback } from '@/common'

interface Props {
	onItemClick?: Callback<BookState['book']>
}
export const BookItemsComponent: FC<Props> = observer(({ onItemClick }) => {
	const [state] = useState(bookListState)
	const { bookList } = state

	useEffect(() => {
		bookActions.loadBooks()
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
