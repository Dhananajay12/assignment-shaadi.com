import React from 'react'
import UserList from './UserList'
import { Box, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';


const Home = () => {
	const navigate = useNavigate();
	const handleLogout = () => {
		localStorage.removeItem('isLoggedIn');
		navigate('/login');
	};

	return (
		<>
		<Box  display={'flex'} justifyContent={'space-between'} p={2} backgroundColor="#121212" height={'3rem'} >
			<Typography fontSize={'30px'}> Home </Typography>
			<Button variant="contained" onClick={() => handleLogout()}>LogOut</Button>
		 </Box>
			<UserList />
		</>
	)
}

export default Home