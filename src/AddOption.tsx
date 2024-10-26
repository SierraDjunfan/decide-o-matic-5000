import './AddOption.css'

interface AddOptionProps {
    optionInput: string,
    onOptionInputChanged: (newText: string) => void
    onOptionInputSubmitted: () => void
}

function AddOption(props: AddOptionProps) {

    function handleKeyPress(key: string) {
        if (key === "Enter") {
            props.onOptionInputSubmitted()
        }
    }

    return <div id="add-option-container">
        <input type="text" value={props.optionInput} onChange={ e => props.onOptionInputChanged(e.target.value)} onKeyDown={ e => handleKeyPress(e.code)}/>
        <button onClick={() => props.onOptionInputSubmitted()}>ADD</button>
    </div>
}

export default AddOption