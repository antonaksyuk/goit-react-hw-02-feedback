import { Component } from "react";

export default class Section extends Component {
    render() {
        const { children, title } = this.props;
        return (
            <>
                <h1>{title}</h1>
                {children}
            </>
        )
    };
}