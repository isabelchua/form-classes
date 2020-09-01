import React from 'react';

import './App.css';
import Home from './Home';
import UserContextProvider from './UserContext';

function App() {
	return (
		<UserContextProvider>
			<div className="App">
				<Home />
			</div>
		</UserContextProvider>
	);
}

export default App;
