import { DecisionMode } from './CustomTypes'
import './ModeControls.css'

interface ModeControlsProps {
    currentMode: DecisionMode,
    onDecisionModeChanged: (newMode: DecisionMode) => void
}

function ModeControls(props: ModeControlsProps) {

    return <div id="mode-controls-container">
        <button onClick={() => props.onDecisionModeChanged(DecisionMode.Normal)}>Normal</button>
        <button onClick={() => props.onDecisionModeChanged(DecisionMode.YesNo)}>Yes/No</button>
        <button onClick={() => props.onDecisionModeChanged(DecisionMode.Magic)}>Magic</button>
    </div>
}

export default ModeControls