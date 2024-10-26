import { useState } from 'react'
import './App.css'
import { DecisionMode } from './CustomTypes'
import OptionsList from './OptionsList'

function App() {

const [options, setOptions] = useState(["Austin", "Sara", "Reginald"])
const [decisionMode, setDecisionMode] = useState(DecisionMode.Normal)

function onOptionDeleted(option: string) {

}

  return <>
    <OptionsList options={options} onOptionDeleted={onOptionDeleted}/>
  </>
}

export default App
