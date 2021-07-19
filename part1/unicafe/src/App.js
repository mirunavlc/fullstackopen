import React, { useState } from 'react'

const goodStr = "good"
const neutralStr = "neutral"
const badStr = "bad"

const Header = (props) => (
  <h1> {props.title}</h1>
)

const Button = (props) => (
  <button onClick={props.handleClick}> {props.text}</button>
)

const Statistic = props => {
  const value = isNaN(props.value) ? 0 : props.value;
  if (props.percent === true) {
    return <tr><td>{props.text}</td><td> {value}</td><td>%</td></tr>
  }
  return <tr><td>{props.text}</td><td> {value}</td></tr>
}


const Statistics = (props) => {
  let total = (props.good + props.bad + props.neutral)
  if (total === 0) {

    return (
      <div>
        <Header title="statistics" />
        <div>No feedback given</div>
      </div >
    )
  }
  return (
    <div>
      <Header title="statistics" />
      <table>
        <Statistic text={goodStr} value={props.good} />
        <Statistic text={neutralStr} value={props.neutral} />
        <Statistic text={badStr} value={props.bad} />
        <Statistic text="all" value={total} />
        <Statistic text="average" value={(props.good - props.bad) / total} />
        <Statistic text="positive" value={props.good * 100 / total} percent={true} />
      </table>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Header title="give feedback" />
      <Button text={goodStr} handleClick={() => setGood(good + 1)} />
      <Button text={neutralStr} handleClick={() => setNeutral(neutral + 1)} />
      <Button text={badStr} handleClick={() => setBad(bad + 1)} />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App