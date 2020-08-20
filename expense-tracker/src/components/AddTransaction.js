import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {
	const [text, setText] = useState('');
	const [amount, setAmount] = useState(0);

	const { addTransaction } = useContext(GlobalContext);

	const onSubmit = e => {
		e.preventDefault();

		const newTransaction = {
			id: Math.floor(Math.random() * 100000000),
			text,
			//convert string to a number
			amount: +amount
		};

		addTransaction(newTransaction);
	};

	return (
		<>
			<form onSubmit={onSubmit}>
				<div className='form-control'>
					<label htmlFor='text'>Transaction Name</label>
					<input
						type='text'
						value={text}
						onChange={e => setText(e.target.value)}
						placeholder='Enter Transaction Name..'
						required
					/>
				</div>
				<div className='form-control'>
					<label ftmlFor='amount'>
						Amount <br />
					</label>
					<input
						type='number'
						value={amount}
						onChange={e => setAmount(e.target.value)}
						placeholder='Enter Amount..'
					/>
				</div>
				<button className='btn'>ADD TRANSACTION</button>
			</form>
		</>
	);
};
