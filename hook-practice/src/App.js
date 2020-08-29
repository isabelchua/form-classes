import React, { useReducer } from 'react';

const initialState = 0;

function reducer(state, action) {
	switch (action) {
		case 'increment':
			return state + 1;
		case 'double':
			return state * 2;
		case 'decrement':
			return state - 1;
		case 'reset':
			return initialState;
		default:
			return state;
	}
}

function Counter() {
	const [count, dispatch] = useReducer(reducer, initialState);

	return (
		<>
			Count: {count}
			<button onClick={() => dispatch('decrement')}>-</button>
			<button onClick={() => dispatch('increment')}>+</button>
			<button onClick={() => dispatch('double')}>x 2</button>
			<button onClick={() => dispatch('reset')}>x</button>
		</>
	);
}

function App() {
	return <div className='App'>{Counter()}</div>;
}

export default App;
