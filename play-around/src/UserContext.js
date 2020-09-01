import React, { createContext, useState } from 'react';

export const UserContext = createContext();

const UserContextProvider = ({ children, name }) => {
	const [submit, setSubmit] = useState('yey');

	// const setNameContext = e => {
	// 	setName({ ...name, lastName: e.target.value });
	// };

	function handleSubmit(e) {
		let name2 = '';
		name2 = name;
		setSubmit(name2);

		console.log({ name2 });
	}

	return (
		<UserContext.Provider value={{ handleSubmit, submit }}>
			{children}
		</UserContext.Provider>
	);
};
export default UserContextProvider;
