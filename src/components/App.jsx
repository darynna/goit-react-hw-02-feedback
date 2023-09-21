import { Section } from "./Section/Section";
import { Statistic } from "./Statistics/Statistics";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Notification } from "./Notification/Notification";
import { MainWrap } from "./App.styled";
import { Component } from "react";
class App extends Component{

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }

        countTotalFeedback({good, neutral, bad}){
       return good + neutral + bad
      }

      countPositiveFeedbackPercentage(goodOnes){
        const allFeedbacks = this.countTotalFeedback(this.state)
        const result = Math.round(goodOnes * 100 / allFeedbacks)
        return result 
      }

      onLeavefeedback = (option) => {
     
        this.setState((prevState)=> ({
            [option]: prevState[option] + 1
        }))
      }

  render(){
    const total = this.countTotalFeedback(this.state);
    const positivePercentage = this.countPositiveFeedbackPercentage(this.state.good);
  return (
    <MainWrap>
    <Section title={'Please leave feedback'}>
    <FeedbackOptions options={['good', 'neutral', 'bad']} onLeavefeedback={this.onLeavefeedback}/>
    </Section>
    <Section title={'Statistic'}>
      {total === 0 ? <Notification Textmessage="There is no feedback"/> :
    <Statistic 
    total={total}
    positivePercentage={positivePercentage}
    data={this.state}/>}</Section>
    </MainWrap>
  );}
};


export default App