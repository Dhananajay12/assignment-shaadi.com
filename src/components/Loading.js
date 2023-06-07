import { Grid, Skeleton } from '@mui/material'
import React from 'react'

const Loading = () => {
	return (
		<>	<Grid item xs={4} p={2}>
			<Skeleton variant="rectangular" width={"100%"} height={150} />
		</Grid>
			<Grid item xs={4} p={2}>
				<Skeleton variant="rectangular" width={"100%"} height={150} />
			</Grid>
			<Grid item xs={4} p={2}>
				<Skeleton variant="rectangular" width={"100%"} height={150} />
			</Grid>
			<Grid item xs={4} p={2}>
				<Skeleton variant="rectangular" width={"100%"} height={150} />
			</Grid>
			<Grid item xs={4} p={2}>
				<Skeleton variant="rectangular" width={"100%"} height={150} />
			</Grid>
			<Grid item xs={4} p={2}>
				<Skeleton variant="rectangular" width={"100%"} height={150} />
			</Grid></>
	)
}

export default Loading