import { Component } from "react"
import Section from "./Section";
import FeedbackOptions from "./FeedbackOptions";
import Statistics from "./Statistics";

const initialValues = 0;

export class App extends Component{
  state = {
    good: initialValues,
    neutral: initialValues,
    bad: initialValues,
  }

  handleButtonClic = (evt) => {
    const { name } = evt.target.dataset;
    if (name) {
      this.setState(prevState => {
        return {[name]: prevState[name] + 1}
      })
    } 
  }

  countValue = () => {
        return Object.values(this.state).reduce((a, b) => a + b, 0)
  };

  countPositiveFeedback = () => {
    const { good } = this.state
    return (Math.floor(good / (this.countValue()) * 100))
  };

  render() {
    return (
      <>
        <Section title='Please leave feedback'>
          <FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback={this.handleButtonClic} />
        </Section>
        <Section title='Statistics'>
          {this.countValue() ? (
            <Statistics data={this.state} total={this.countValue} positivePercentage={this.countPositiveFeedback} />
          ) : (
            <p>There is no feedback</p>
          )
          } </Section>
      </>
    );
  }
  };
