import React, { useState } from 'react'

const Header = (props) => (
  <h1> {props.title}</h1>
)

const Button = (props) => (
  <button onClick={props.handleClick}> {props.text}</button>
)

const Display = props => {
  const value = isNaN(props.value) ? 0 : props.value;
  if (props.percent === true) {
    return <div>{props.text} {value} %</div>
  }
  return <div>{props.text} {value} </div>
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const goodStr = "good"
  const neutralStr = "neutral"
  const badStr = "bad"
  let total = (good + bad + neutral)
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
      <Display text="all" value={total} />
      <Display text="average" value={(good - bad) / total} />
      <Display text="positive" value={good * 100 / total} percent={true} />
    </div>
  )
}

export default App