import React, { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
)

const Votes = (props) => (
  <div>
    has {props.value} votes
  </div>
)

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blod tests when dianosing patients'
  ]


  const getRandom = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const rand = Math.floor(Math.random() * (max - min + 1)) + min;
    return rand;
  }

  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(new Array(anecdotes.length).fill(0))

  return (
    <div>
      <p>{anecdotes[selected]}</p>
      <Votes value={points[selected]} />
      <Button text="vote" handleClick={() => {
        const copyVotes = [...points];
        copyVotes[selected] += 1;
        setPoints(copyVotes);
      }} />
      <Button text="next anecdotes" handleClick={() => setSelected(getRandom(0, anecdotes.length - 1))} />
    </div>
  )
}

export default App