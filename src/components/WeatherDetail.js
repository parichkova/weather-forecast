import React from 'react';

const WeatherDetail = (props) => {
    // this.state = {
    //     wind: 12,
    // }

    return (
        <div>
            <div className="ui column two">{props.date}</div>
            <div className="ui column two">{props.wind}</div>
            <div className="ui column two">{props.weather}</div>
        </div>
    )
}

export default WeatherDetail;