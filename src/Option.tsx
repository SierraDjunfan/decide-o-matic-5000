import './Option.css'

interface OptionProps {
    optionName: string
    onOptionDeleted: (option: string) => void
}

function Option(props: OptionProps) {

    return <div id="option-container">
        <h2 id="option-name"></h2>
        <button>X</button>
    </div>
}

export default Option