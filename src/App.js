import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

	const [error, setError] = useState(false);
	let msgColor;

	if (error) {
		msgColor = 'red';
	}
	else {
		msgColor = 'green';
	}

	console.log(msgColor);
	return (
		<main className="full-screen-container">
			<div className="login-container">
				<h1 className='title'>Welcome</h1>
				<form className='form'>
					<div className="input-group">
						<label for='email'>Email</label>
						<input type='emial' name='email' id='email' placeholder='abc@gamil.com' />
						<span className={`msg ${msgColor}`}>Valid msg</span>
					</div>
					<div className="input-group">
						<label for='password'>Password</label>
						<input type='password' name='password' id='password' />
						<span className={`msg ${msgColor}`}>Valid msg</span>
					</div>
					<button type='submit' className='login-btn'>Login</button>
				</form>
			</div>
		</main>
	);
}

export default App;
