import React, { useReducer } from 'react';

const initialState = {
	firstCounter: 0,
	secondCounter: 10
};

function reducer(state, action) {
	switch (action.type) {
		case 'increment':
			return { ...state, firstCounter: state.firstCounter + action.value };
		case 'decrement':
			return { ...state, firstCounter: state.firstCounter - action.value };
		case 'increment2':
			return { ...state, secondCounter: state.secondCounter + action.value };
		case 'decrement2':
			return { ...state, secondCounter: state.secondCounter - action.value };

		case 'double':
			return { firstCounter: state.firstCounter * 2 };

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
			Count: {count.firstCounter}
			Second Counter - {count.secondCounter}
			<button onClick={() => dispatch({ type: 'increment', value: 1 })}>
				+
			</button>
			<button onClick={() => dispatch({ type: 'decrement', value: 1 })}>
				-
			</button>
			<button onClick={() => dispatch({ type: 'increment', value: 5 })}>
				increment 5
			</button>
			<button onClick={() => dispatch({ type: 'decrement', value: 5 })}>
				decrement 5
			</button>
			<button onClick={() => dispatch({ type: 'increment2', value: 1 })}>
				increment counter 2
			</button>
			<button onClick={() => dispatch({ type: 'decrement2', value: 1 })}>
				decrement counter 2
			</button>
			<button onClick={() => dispatch({ type: 'double' })}>x 2</button>
			<button onClick={() => dispatch({ type: 'reset' })}>x</button>
		</>
	);
}

function CounterTwo() {
	return <div className='App'>{Counter()}</div>;
}

export default CounterTwo;
