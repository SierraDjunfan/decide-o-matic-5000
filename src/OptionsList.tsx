import './OptionsList.css'
import Option from './Option'

interface OptionsListProps {
  options: string[]
  onOptionRemove: (option: string) => void
}

function OptionsList(props: OptionsListProps) {

  return <div id="options-list">
    {props.options.map( option => <Option optionName={option} onOptionDeleted={() => props.onOptionRemove(option)}/>)}
  </div>
}

export default OptionsList