import { Component } from "react";

export default class FeedbackOptions extends Component {
    render() {
        return (
            <>
                {this.props.options.map(elm => {
                    return (
                        <button key={elm} type='button' onClick={this.props.onLeaveFeedback} data-name={elm}>{elm.toUpperCase()}</button>
                    )
                })}
            </>
        );
    }
}