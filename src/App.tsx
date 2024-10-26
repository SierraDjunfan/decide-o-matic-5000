import { useState } from 'react'
import './App.css'
import { DecisionMode } from './CustomTypes'
import OptionsList from './OptionsList'
import ModeControls from './ModeControls'
import Output from './Output'
import { getRandomElement } from './UtilityFunctions'
import AddOption from './AddOption'

function App() {

const allYeNoOptions = ["Yes", "No"]
const allMagicOptions = [`Absotootley`, `There's no freaking way`]

const [options, setOptions] = useState(["Austin", "Sara", "Reginald"])
const [decisionMode, setDecisionMode] = useState(DecisionMode.Normal)
const [output, setCurrentOutput] = useState("")
const [optionInput, setOptionInput] = useState("")

const currentOptions = () => decisionMode === DecisionMode.Magic ? allMagicOptions : decisionMode === DecisionMode.YesNo ? allYeNoOptions : options

function onOptionDeleted(option: string) {
  setOptions( options => [...options].filter( opt => opt !== option))
  setCurrentOutput("")
}

function onDecisionModeChanged(newMode: DecisionMode) {
  setDecisionMode(newMode)
  setCurrentOutput("")
}

function onDecideButtonPressed() {
  const outputElement = currentOptions().length === 0 ? "" : getRandomElement(currentOptions()) as string
  setCurrentOutput(outputElement)
}

function onOptionInputChanged(newInput: string) {
  setOptionInput(newInput)
}

function onClearButtonPressed() {
  setOptions([])
  setCurrentOutput("")
}

function onOptionInputSubmitted() {
  if (options.includes(optionInput)) {
    //Error Message
  } else {
    setOptions( oldOptions => [...oldOptions, optionInput])
    setOptionInput("")
  }
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

const addOptionProps = () => {
  return {
    optionInput: optionInput,
    onOptionInputChanged: onOptionInputChanged,
    onOptionInputSubmitted: onOptionInputSubmitted
  }
}

  return <>
    <ModeControls {...modeControlsProps()}/>
    {decisionMode === DecisionMode.Normal && <OptionsList {...optionListProps()}/>}
    {decisionMode === DecisionMode.Normal && <AddOption {...addOptionProps()}/>}
    {decisionMode === DecisionMode.Normal && <button onClick={() => onClearButtonPressed()}>CLEAR OPTIONS</button>}
    <Output {...outputProps()}/>
  </>
}

export default App
