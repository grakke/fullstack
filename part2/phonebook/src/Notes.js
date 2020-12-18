import React, { useEffect, useState } from 'react'
import noteService from './services/notes'

const Note = ({ note, toggleImportance }) => {
	const label = note.important
		? 'make not important' : 'make important'

	return (
		<li>
			{note.content}
			<button onClick={toggleImportance}>{label}</button>
		</li>
	)
}

const Notes = (props) => {
	const [notes, setNotes] = useState([])
	const [newNote, setNewNote] = useState(
		'a new note...'
	)
	const [showAll, setShowAll] = useState(true)

	useEffect(() => {
		console.log('effect')
		noteService.getAll()
			.then(initialNotes => {
				console.log('promise fulfilled')
				setNotes(initialNotes)
			})
	}, [])
	console.log('render', notes.length, 'notes')

	const toggleImportanceOf = (id) => {
		console.log(`importance of ${id} needs to be toggled`)
		const note = notes.find(n => n.id === id)
		const changedNote = { ...note, important: !note.important }

		noteService
			.update(id, changedNote)
			.then(returnedNote => {
				setNotes(notes.map(note => note.id !== id ? note : returnedNote))
			})
			.catch(error => {
				alert(
					`the note '${note.content}' was already deleted from server`
				)
				setNotes(notes.filter(n => n.id !== id))
			})
	}

	const addNote = event => {
		event.preventDefault()

		const noteObject = {
			content: newNote,
			date: new Date().toISOString(),
			important: Math.random() < 0.5,
			id: notes.length + 1,
		}

		noteService
			.create(noteObject)
			.then(returnedNote => {
				setNotes(notes.concat(returnedNote))
				setNewNote('')
			})
	}

	const handleNoteChange = (event) => {
		console.log(event.target.value)
		setNewNote(event.target.value)
	}

	const handleFocus = (event) => {
		setNewNote('')
	}

	const notesToShow = showAll
		? notes
		: notes.filter(note => note.important === true)

	return (
		<div>
			<h1>Notes</h1>
			<div>
				<button onClick={() => setShowAll(!showAll)}>
					show {showAll ? 'important' : 'all'}
				</button>
			</div>

			<ul>
				{notesToShow.map(note =>
					<Note key={note.id} note={note} toggleImportance={() => toggleImportanceOf(note.id)} />
				)}
			</ul>

			<form onSubmit={addNote}>
				<input
					value={newNote}
					onChange={handleNoteChange}
					onFocus={handleFocus}
				/>
				<button type="submit">save</button>
			</form>
		</div>
	)
}

export default Notes
