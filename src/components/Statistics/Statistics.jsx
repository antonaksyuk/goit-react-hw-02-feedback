import { Component } from "react";
import PropTypes from 'prop-types'

import style from './Statistics.module.css'


export default class Statistics extends Component {
    convertToArray = () => {
        const obj = this.props.data
        const result = Object.keys(obj).map((key) => ({ name: key, value: obj[key] }));
        return result;
    };
    
    render() {
        return (
            <div className={style.statisticsBlock}>
                {this.convertToArray().map(elm => {
                    return (
                        <p key={elm.name}>{elm.name.toUpperCase()}: {elm.value}</p>
                    )
                })}
                <p>Total: {this.props.total()}</p>
                <p>Positive feedback: {this.props.positivePercentage()}%</p>
            </div>
        );
}}

Statistics.propTypes = {
    data: PropTypes.object.isRequired,
    total: PropTypes.func.isRequired,
    positivePercentage: PropTypes.func.isRequired,
}