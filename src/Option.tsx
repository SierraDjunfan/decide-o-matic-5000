import './Option.css'

interface OptionProps {
    optionName: string
    onOptionDeleted: (option: string) => void
}

function Option(props: OptionProps) {

    return <div id="option-container">
        <button id="delete-button">X</button>
        <h2 id="option-name">{props.optionName}</h2>
    </div>
}

export default Option