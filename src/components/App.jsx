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

      onLeavefeedback = (event) => {
        const name = event.target.name;
        this.setState((prevState)=> ({
            [name]: prevState[name] + 1
        }))
      }

  render(){
    const total = this.countTotalFeedback(this.state);
    const positivePercentage = this.countPositiveFeedbackPercentage(this.state.good);
  return (
    <MainWrap>
    <Section title={'Please leave feedback'}>
    <FeedbackOptions onLeavefeedback={this.onLeavefeedback}/>
    </Section>
    <Section title={'Statistic'}>
      {total === 0 ? <Notification message="There is no feedback"/> :
    <Statistic 
    total={total}
    positivePercentage={positivePercentage}
    data={this.state}/>}</Section>
    </MainWrap>
  );}
};


export default App