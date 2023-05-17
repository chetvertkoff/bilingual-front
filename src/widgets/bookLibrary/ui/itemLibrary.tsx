import React, { FC } from 'react'
import { Card, CardMedia, Grid, LinearProgress } from '@mui/material'
import * as noimage from '@/shared/assets/img/noimage.jpg'
import { BookModel, Callback } from '@/shared'

interface Props {
	item: BookModel
	onItemClick?: Callback<BookModel>
}

export const BookItem: FC<Props> = ({ item, onItemClick }) => {
	return (
		<Grid item xs={2} key={item.id} onClick={() => onItemClick?.(item)}>
			<Card>
				<CardMedia
					component="img"
					image={item?.cover ? `data:image;base64,${item.cover}` : noimage.default}
				/>
				{item.progress && <LinearProgress variant="determinate" value={item.progress} />}
			</Card>
		</Grid>
	)
}
