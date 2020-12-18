import axios from 'axios'
import React, { useEffect, useState } from 'react'


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
	const [persons, setPersons] = useState([])
	const [newName, setNewName] = useState('')
	const [newNumber, setNewNumber] = useState('')
	const [kw, setKw] = useState('')

	useEffect(() => {
		console.log('effect')
		axios
			.get('http://localhost:3001/persons')
			.then(response => {
				console.log('promise fulfilled')
				setPersons(response.data)
			})
	}, [])
	console.log('render', persons.length, 'persons')

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
			<Display persons={persons} kw={kw}></Display>
			<h2>add a new</h2>
			<form onSubmit={addNewName}>
				<div>name: <input value={newName} onChange={handleNameChange} /></div>
				<div>number: <input value={newNumber} onChange={handleNumberChange} /></div>
				<div>
					<button type="submit">add</button>
				</div>
			</form>

		</div>
	)
}

export default App
