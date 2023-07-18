import { Component } from "react";
import propTypes from "prop-types";

import style from './Section.module.css';


export default class Section extends Component {
    render() {
        const { children, title } = this.props;
        return (
            <div className={style.section}>
                <h2 className={style.title}>{title}</h2>
                {children}
            </div>
        )
    };
}

Section.propTypes = {
    title: propTypes.string.isRequired,
}