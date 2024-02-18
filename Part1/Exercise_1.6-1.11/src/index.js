import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const StatisticLine = (props) => (
 <p>{props.text} {props.value}</p>
)

const Statistics = (props) => {
  let all = props.good+props.bad+props.neutral;
  let average = (props.good-props.bad)/all;
  let positive = (props.good*100)/all;
  if (props.good === 0 && props.bad === 0 && props.neutral === 0){
    return(
      <div>
        <p>No feedback given</p>
      </div>
    )
  }else{
   return(
      <table>
        <tbody>
          <tr><StatisticLine text="good" value={props.good}/></tr>
          <tr><StatisticLine text="neutral" value={props.neutral}/></tr>
          <tr><StatisticLine text="bad" value={props.bad}/></tr>
          <tr><StatisticLine text="all" value={all}/></tr>
          <tr><StatisticLine text="average" value={average}/></tr>
          <tr><StatisticLine text="positive" value={`${positive}%`}/></tr>
        </tbody>
      </table>
   )
  }
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  

  const setToGood = newValue => {
    setGood(newValue)
  }

  const setToNeutral = newValue => {
    setNeutral(newValue)
  }

  const setToBad = newValue => {
    setBad(newValue)
  }

  return (
    <div>

      <h1>give feedback</h1>
      <Button handleClick = {() => setToGood(good + 1)}  text="good" />
      <Button handleClick = {() => setToNeutral(neutral + 1)}  text="nuetral" />
      <Button handleClick = {() => setToBad(bad + 1)}  text="bad" />

      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
