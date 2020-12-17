import React, { useState } from 'react'


const Display = ({ persons, kw }) => {
	persons = kw ? persons.filter(person => person['name'].toLowerCase().indexOf(kw.toLowerCase()) !== -1) : persons

	return (
		<div>
			<h2>Numbers</h2>
			{persons.map((person, index) => <p key={index}> name:{person.name} number:{person.number}</p>
			)}
		</div>
	)
}

const App = () => {
	const [persons, setPersons] = useState([
		{ name: 'Arto Hellas', number: '040-123456' },
		{ name: 'Ada Lovelace', number: '39-44-5323523' },
		{ name: 'Dan Abramov', number: '12-43-234345' },
		{ name: 'Mary Poppendieck', number: '39-23-6423122' }
	])
	const [newName, setNewName] = useState('')
	const [newNumber, setNewNumber] = useState('')
	const [kw, setKw] = useState('')


	const nameObject = {
		name: newName,
		number: newNumber
	}

	const addNewName = (event) => {
		event.preventDefault()
		setPersons(persons.concat(nameObject))
		setNewName('')
		setNewNumber('')
	}

	const handleNameChange = (event) => setNewName(event.target.value)
	const handleNumberChange = (event) => setNewNumber(event.target.value)
	const handleKwChange = (event) => setKw(event.target.value)

	return (
		<div>
			<h1>Phonebook</h1>
			<div>filter shown with <input value={kw} onChange={handleKwChange} /></div>
			<h2>add a new</h2>
			<form onSubmit={addNewName}>
				<div>name: <input value={newName} onChange={handleNameChange} /></div>
				<div>number: <input value={newNumber} onChange={handleNumberChange} /></div>
				<div>
					<button type="submit">add</button>
				</div>
			</form>

			<Display persons={persons} kw={kw}></Display>
		</div>
	)
}

export default App
