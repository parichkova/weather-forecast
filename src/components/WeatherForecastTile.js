import React from 'react';
import moment from 'moment'
import './WeatherForecastTile.css';

class WeatherForecastTile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            main: this.props.main,
            wind: this.props.wind,
            date: this.props.date,
            index: 0,
            dayName: '',
            dateOnly: '',
            currentHour: '',
        }
    }

    manageIconName() {
        const mainWeather = this.state.main;
        let iconName = '';

        debugger;
        switch(mainWeather) {
            case 'Clear sky': 
            case 'Clear':
                iconName = 'sun';
                break;
            case 'Rain':
                iconName = 'rain';
                break;
            case 'Snow':
                iconName = 'snow';
                break;
            case 'Cloud':
                iconName = 'cloud';
                break;
        }

      return iconName;
    }

    onClickHandle = () => {
        debugger;
        this.props.onClick(this.props.id);
    }

    componentDidMount() {
        const d = new Date(this.state.date);
        const dayName = moment(d).format('dddd');
        const date = moment(d).format('DD MM YYYY');
        const time = moment(d).format('HH:mm')
        const iconName = this.manageIconName();
        
        this.setState({
            day: dayName,
            dateOnly: date,
            currentHour: time,
            iconName
        })
    }

    render() {
        return(
            <div className="three wide column" id={this.state.index} onClick={this.onClickHandle}>
                <div className="text--bold">{this.state.day}</div>
                <div className="text--bold">{this.state.currentHour}</div>
                <div>{this.state.main}</div>
                <div className={`weather ${this.state.iconName}`}></div>
                <div>Wind: {this.state.wind} km/h</div>
            </div>
     );
    }
}

export default WeatherForecastTile;