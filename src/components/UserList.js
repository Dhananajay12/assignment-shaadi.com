import { Box, Grid } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Loading from './Loading';

const UserList = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [data, setData] = useState([]);
	const [page, setPage] = useState(1);

	const fetchData = async () => {
		setIsLoading(true);
		try {
			const response = await axios.get(`https://randomuser.me/api/?page=${page}&results=9`);
			const newData = response.data.results;
			setTimeout(() => {
			setData((prevData) => [...prevData, ...newData]);
			setIsLoading(false);
			}, 1000);
		} catch (error) {
			console.log(error);
		}
	};

	const handleScroll = () => {
		const scrollHeight = document.documentElement.scrollHeight;
		const scrollTop = document.documentElement.scrollTop;
		const clientHeight = window.innerHeight;
		try {

			if (scrollTop + clientHeight >= scrollHeight && !isLoading) {
				setIsLoading(true)
				setPage((prev) => prev + 1);
			}
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		fetchData();
	},[page]);


	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	});

	return (
		<Grid container p={2} mt={2} >

				{data.map((user) => (
					<Grid item xs={4} p={2} key={user.login.uuid}>
						<center>
							<Box backgroundColor="#121212" p={2} >
								<img className='img-size' src={user.picture.medium} alt={user.name.first} />
								<div>
									<h3>{`${user.name.first} ${user.name.last}`}</h3>
									<p>{user.email}</p>
								</div>
							</Box>
						</center>
					</Grid>
				))}
			{isLoading && <Loading></Loading> }
			
		</Grid>
	)
}

export default UserList