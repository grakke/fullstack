import React from 'react'
import ReactDOM from 'react-dom'

const Hello = (props) => {
return(
    <div>
      <p>Hello {props.name}, your are {props.age} !</p>
    </div>
  )
}

const App = () => {
  console.log('Hello from compontent')
  const now = new Date()
  const a = 100
  const b =200

  const name = 'Wallcot'
  const age = 31
  return (
      <div>
        <p>Hello world, It's {now.toString()}</p>
        <p>
          {a} + {b} = {a+ b}
        </p>
        <Hello name="Henry" age = {20+13}/>
        <Hello name={name} age = {age}/>
      </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))