import { Box, Button,TextField, Typography } from '@mui/material';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {

	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const navigate = useNavigate();

	const handleLogin = () => {
		if (username === 'foo' && password === 'bar') {
			localStorage.setItem('isLoggedIn', true);
			navigate('/home');
		} else {
			alert('Invalid credentials');
		}
	};
   
	// const [showPassword, setShowPassword] = useState(false);

	// const handleClickShowPassword = () => setShowPassword((show) => !show);

	// const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
	// 	event.preventDefault();
	// };

	
	return (
		<div className='center-div' >
			
			<Box alignItems={'center'} bac>
				<Typography fontSize={'22px'}>Login</Typography>
				<Box mt={2}>
				
					<TextField id="outlined-basic" label="UserName" variant="outlined" value={username} onChange={(e) => setUsername(e.target.value)} />
				</Box>
				<Box mt={2}>
					<TextField id="outlined-basic" label="Password" variant="outlined" type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
				</Box>
				<Box mt={2}>

					<Button mt={2} variant="contained" onClick={handleLogin}>Login</Button>
				</Box>
			
			</Box>
		</div>
	)
}

export default Login