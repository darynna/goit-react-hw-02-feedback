import {ButtonList, ButtonItems, Button} from './FeedbackOptions.styled'
export const FeedbackOptions =({options, onLeavefeedback}) =>{
    return <ButtonList>
        {options.map(option => {
            return <ButtonItems><Button name={option} type="button" onClick={() => onLeavefeedback(option)}>{option}</Button></ButtonItems>
        })}
            </ButtonList>

}