import './OptionsList.css'
import Option from './Option'

interface OptionsListProps {
  options: string[]
  onOptionDeleted: (option: string) => void
}

function OptionsList(props: OptionsListProps) {

  return <div id="options-list">
    {props.options.map(option => <Option
      key={option}
      optionName={option}
      onOptionDeleted={() => props.onOptionDeleted(option)}/>)}
  </div>
}

export default OptionsList