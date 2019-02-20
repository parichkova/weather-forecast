import React from 'react';
import WeatherDetail from './WeatherDetail';

class WeatherDetails extends React.Component {
    constructor(props) {
        super(props);

        debugger;
        this.state = {
            currentArray: props.arrayOfDays
        }
    }

    componentWillReceiveProps() {
        this.setState({
            currentArray: this.props.arrayOfDays
        });
    }

    render() {
        const days = this.state.currentArray;
        
        const mappedHours = days.map(day => {
            const firstDay = day;
            const dayWeather = firstDay.weather[0];
            
            return <WeatherDetail key={day.dt} date={day.dt_txt} wind={day.wind.speed} weather={day.weather[0].main}/>
        });

        return (
        <div className="more-info-holder"> 
            {mappedHours}
        </div>)
    }
}

export default WeatherDetails;