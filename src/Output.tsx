import './Output.css'

interface OutputProps {
    onDecideButtonPressed: () => void
    outputElement: string
}

function Output(props: OutputProps) {

    return <div id="output-container">
        <button onClick={() => props.onDecideButtonPressed()}>DECIDE</button>
        {props.outputElement !== "" && <p>Decide-O-Matic has spoken and the answer is... {props.outputElement}!</p>}
    </div>
}

export default Output