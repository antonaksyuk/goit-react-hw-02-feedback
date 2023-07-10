import { Component } from "react";
import style from './FeedbackOptions.module.css'

export default class FeedbackOptions extends Component {
    render() {
        return (
            <div className={style.buttonsBlock}>
                {this.props.options.map(elm => {
                    return (
                        <button className={style.button} key={elm} type='button' onClick={this.props.onLeaveFeedback} data-name={elm}>{elm.toUpperCase()}</button>
                    )
                })}
            </div>
        );
    }
}