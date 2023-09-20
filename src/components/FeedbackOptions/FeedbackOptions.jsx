import {ButtonList, ButtonItems, Button} from './FeedbackOptions.styled'
export const FeedbackOptions =({onLeavefeedback}) =>{
    return <ButtonList>
            <ButtonItems><Button name="good" type="button" onClick={onLeavefeedback}>Good</Button></ButtonItems>
            <ButtonItems><Button name="neutral" type="button" onClick={onLeavefeedback}>Neutral</Button></ButtonItems>
            <ButtonItems><Button name="bad" type="button" onClick={onLeavefeedback}>Bad</Button></ButtonItems>
            </ButtonList>

}