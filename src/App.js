
import './App.css';
import {  BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';

let cureentUser = false;

const RequireAuth = ({ children }) => {

	const currentFont = localStorage.getItem('isLoggedIn');

	if (currentFont) {
		cureentUser = true;
	}
	else {
		alert("login please")
	}
	return cureentUser ? children : <Navigate to="/login" />
}

function App() {

  return (
		<div className='color-app'>

		<BrowserRouter>
			<Routes>
					<Route path="/" element={<Navigate to="/login" replace />} />
				<Route path="/login" element={<Login />} />
				<Route path="/home" element={<RequireAuth> <Home /> </RequireAuth>} />
			</Routes>
		</BrowserRouter>
		</div>
  );
}

export default App;
