import React from 'react';
import './WeatherForecastTile.css';

class WeatherForecastTile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            main: this.props.main,
            description: this.props.description,
            date: this.props.date,
        }
    }

    componentDidMount() {
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const d = new Date(this.state.date);
        const dayName = days[d.getDay()];

        this.setState({
            day: dayName
        })
    }

    render() {
        return(
            <div className="three wide column">
                <div className="text--bold">{this.state.day}</div>
                <div>{this.state.main}</div>
                <div>{this.state.description}</div>
            </div>
     );
    }
}

export default WeatherForecastTile;