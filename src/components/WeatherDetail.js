import React from 'react';
import moment from 'moment';

const WeatherDetail = (props) => {
    const {date} = props;
    const d = new Date(date);
    const dayName = moment(d).format('dddd');
    const dateFormatted = moment(d).format('DD MM YYYY');
    const time = moment(d).format('HH:mm')

    return (
        <div className="holder-info">
            <div className="column text--bold">{`${dayName}, ${time}`}</div>
            <div className="column text--bold">{dateFormatted}</div>
            <div className="column text--bold">{props.weather}</div>
            <div className="column text--bold">Wind: {props.wind} km/h</div>
        </div>
    )
}

export default WeatherDetail;