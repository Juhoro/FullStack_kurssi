import { useState } from 'react'

const StatisticLine = ({text, value}) => {
  let icon = ''
  if(text == "positive"){
    icon = '%'
  } else {
    icon = ''
  }
  return(
    <tbody><td>{text}</td><td>{value} {icon}</td></tbody>
  )
}

const Button = ({text, handleclick}) => {
  return(
    <button onClick= {handleclick}>{text}</button>
  )
}

const Statistics = ({good, bad, neutral}) => {
  const total = good+bad+neutral
  const average = (good+bad*(-1))/total
  const positive = good/total
  return(
    <table>
      <StatisticLine text="good" value ={good} />
      <StatisticLine text="neutral" value ={bad} />
      <StatisticLine text="bad" value ={neutral} />
      <StatisticLine text="total" value ={total} />
      <StatisticLine text="average" value ={average} />
      <StatisticLine text="positive" value ={positive} />
    </table>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <div>
        <Button text = {"Good"} handleclick ={() => setGood(good+1)}/>
        <Button text = {"Bad"} handleclick ={() => setBad(bad+1)}/>
        <Button text = {"Neutral"} handleclick ={() => setNeutral(neutral+1)}/>
      </div>
      <h1>Statistics</h1>
      <Statistics good = {good} bad = {bad} neutral = {neutral} />
    </div>
  )
}

export default App;