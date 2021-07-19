import React, { useState } from 'react'

const Header = (props) => (
  <h1> {props.title}</h1>
)

const Button = (props) => (
  <button onClick={props.handleClick}> {props.text}</button>
)

const Display = props => <div>{props.text} {props.value} </div>

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const goodStr = "good"
  const neutralStr = "neutral"
  const badStr = "bad"
  return (
    <div>
      <Header title="give feedback" />
      <Button text={goodStr} handleClick={() => setGood(good + 1)} />
      <Button text={neutralStr} handleClick={() => setNeutral(neutral + 1)} />
      <Button text={badStr} handleClick={() => setBad(bad + 1)} />
      <Header title="statistics" />
      <Display text={goodStr} value={good} />
      <Display text={neutralStr} value={neutral} />
      <Display text={badStr} value={bad} />
    </div>
  )
}

export default App