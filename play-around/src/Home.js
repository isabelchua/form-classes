import React, { useContext, useState } from 'react';
import { UserContext } from './UserContext';

const Home = () => {
	const { handleSubmit, submit } = useContext(UserContext);

	const [name, setName] = useState({ firstName: '' });

	const [contact, setContact] = useState({
		name1: ''
	});
	const { name1 } = contact;

	const onChange = e => setContact({ [e.target.name]: e.target.value });

	return (
		<div>
			<form>
				<input
					type="text"
					value={name.firstName}
					onChange={e => {
						setName({ firstName: e.target.value });
					}}
				/>
				<input
					type="text"
					value={name1}
					onChange={onChange}
					onBlur={handleSubmit}
				/>
			</form>
			<h2>first name is {submit}</h2>
			<h2>first name is {name.firstName}</h2>

			{/* <button onClick={editThis}>+</button> */}
		</div>
	);
};

export default Home;
