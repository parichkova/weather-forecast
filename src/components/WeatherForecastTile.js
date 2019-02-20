import React from 'react';
import moment from 'moment'
import './WeatherForecastTile.css';

class WeatherForecastTile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            main: this.props.main,
            description: this.props.description,
            date: this.props.date,
            dayName: '',
            dateOnly: '',
            currentHour: '',
        }
    }

    componentDidMount() {
        const d = new Date(this.state.date);
        const dayName = moment(d).format('dddd');
        const date = moment(d).format('DD MM YYYY');
        const time = moment(d).format('HH:mm')

        console.log(time);
        this.setState({
            day: dayName,
            dateOnly: date,
            currentHour: time,
        })
    }

    render() {
        return(
            <div className="three wide column">
                <div className="text--bold">{this.state.day}</div>
                <div className="text--bold">{this.state.dateOnly}</div>
                <div className="text--bold">{this.state.currentHour}</div>
                <div>{this.state.main}</div>
                <div>{this.state.description}</div>
            </div>
     );
    }
}

export default WeatherForecastTile;