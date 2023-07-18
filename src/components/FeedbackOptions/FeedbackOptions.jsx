import { Component } from "react";
import PropTypes from 'prop-types'

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

FeedbackOptions.propTypes = {
    options: PropTypes.array.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
}