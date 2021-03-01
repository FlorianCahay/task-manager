import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
	const [initialData, setInitialData] = useState([{}]);
	
	useEffect(() => {
		fetch('/test').then(response => response.json())
			.then(data => setInitialData(data))
	}, []);
	
	return (
		<div className="App">
			<p>{initialData.text}</p>
		</div>
	);
}

export default App;
