import { useState } from 'react'
import './App.css'
import { DecisionMode } from './CustomTypes'
import OptionsList from './OptionsList'
import ModeControls from './ModeControls'
import Output from './Output'
import { getRandomElement } from './UtilityFunctions'

function App() {

const allYeNoOptions = ["Yes", "No"]
const allMagicOptions = [`Absotootley`, `There's not freaking way`]

const [options, setOptions] = useState(["Austin", "Sara", "Reginald"])
const [decisionMode, setDecisionMode] = useState(DecisionMode.Normal)
const [output, setCurrentOutput] = useState("")

const currentOptions = () => decisionMode === DecisionMode.Magic ? allMagicOptions : decisionMode === DecisionMode.YesNo ? allYeNoOptions : options

function onOptionDeleted(option: string) {
  setOptions( options => [...options].filter( opt => opt !== option))
}

function onDecisionModeChanged(newMode: DecisionMode) {
  setDecisionMode(newMode)
  setCurrentOutput("")
}

function onDecideButtonPressed() {
  const outputElement = currentOptions().length === 0 ? "" : getRandomElement(currentOptions()) as string
  setCurrentOutput(outputElement)
}

const optionListProps = () => {
  return {
    options: currentOptions(),
    onOptionDeleted: onOptionDeleted,
  }
}

const modeControlsProps = () => {
  return {
    currentMode: decisionMode,
    onDecisionModeChanged: onDecisionModeChanged
  }
}

const outputProps = () => {
  return {
    onDecideButtonPressed: onDecideButtonPressed,
    outputElement: output
  }
}

  return <>
    <ModeControls {...modeControlsProps()}/>
    {decisionMode === DecisionMode.Normal && <OptionsList {...optionListProps()}/>}
    <Output {...outputProps()}/>
  </>
}

export default App
