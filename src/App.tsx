import { useState } from 'react'
import './App.css'
import { DecisionMode } from './CustomTypes'
import OptionsList from './OptionsList'
import ModeControls from './ModeControls'

function App() {

const allYeNoOptions = ["Yes", "No"]
const allMagicOptions = [`Absotootley`, `There's not freaking way`]

const [options, setOptions] = useState(["Austin", "Sara", "Reginald"])
const [decisionMode, setDecisionMode] = useState(DecisionMode.Normal)

function onOptionDeleted(option: string) {
  setOptions( options => [...options].filter( opt => opt !== option))
}

function onDecisionModeChanged(newMode: DecisionMode) {
  setDecisionMode(newMode)
}

const optionListProps = () => {
  return {
    options: decisionMode === DecisionMode.Magic ? allMagicOptions : decisionMode === DecisionMode.YesNo ? allYeNoOptions : options,
    onOptionDeleted: onOptionDeleted,
  }
}

const modeControlsProps = () => {
  return {
    currentMode: decisionMode,
    onDecisionModeChanged: onDecisionModeChanged
  }
}

  return <>
    <ModeControls {...modeControlsProps()}/>
    {decisionMode === DecisionMode.Normal && <OptionsList {...optionListProps()}/>}
  </>
}

export default App
