import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => (
	<button onClick={props.handleClick}>
		{props.text}
	</button>
)

const App = () => {
	// save clicks of each button to own state
	const [good, setGood] = useState(0)
	const [neutral, setNeutral] = useState(0)
	const [bad, setBad] = useState(0)
	let all = good + bad + neutral;
	let average = (good + bad * -1) / all;
	average = !isNaN(average) ? average : 0;

	return (
		<div>
			<h2>give feedback</h2>
			<div>

				<Button handleClick={() => setGood(good + 1)} text="good" />
				<Button handleClick={() => setNeutral(neutral + 1)} text="netural" />
				<Button handleClick={() => setBad(bad + 1)} text="bad" />
			</div>

			<h2>statistics</h2>
			<p>
				good:{good}</p>
			<p>
				netual:{neutral}</p>
			<p>bad:{bad}</p>
			<p>
				all:{all}
			</p>
			<p>
				average:{average}
			</p>
			<p>
				positive:{good ? (good / all) : 0} %
			</p>
		</div>
	)
}

ReactDOM.render(<App />,
	document.getElementById('root')
)
