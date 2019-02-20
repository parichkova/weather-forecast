import React from 'react';
import WeatherForecastTile from './WeatherForecastTile';
import WeatherDetails from './WeatherDetails';
import './WeatherForecastList.css';

class WeatherForecastList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      weatherInfoList: this.props.weatherList,
      weatherRegionInformation: this.props.weatherRegion,
      singleDayForecast: [],
      days: [],
      clickedIndex: 0,
    };
  }

  getSingleDayInfo = () => {
    debugger;
    const chunkSize = 8;
    const rawArr = this.state.weatherInfoList;
    const { length } = rawArr;
    let tempArray = [];
    let index = 0;
    let myChunk;

    for (index; index < length; index += chunkSize) {
      myChunk = rawArr.slice(index, index + chunkSize);

      tempArray.push(myChunk);
    }

    return tempArray;
  }

  componentDidMount() {
    debugger;
    const days = this.getSingleDayInfo();

    this.setState({
      days
    });
  }

  onClickHanlder = (id) => {
    this.setState({ clickedIndex: id });
  }

  render() {
    const mappedDays = this.state.days.map((day, idx) => {
      const firstDay = day[0];
      const dayWeather = firstDay.weather[0];
      return <WeatherForecastTile onClick={this.onClickHanlder} id={idx} key={firstDay.dt} main={dayWeather.main} wind={firstDay.wind.speed} date={firstDay.dt_txt} />
    });

    debugger;
  
    return (
      <div className={`weather-forecast ui container`} style={{ marginTop: '20px' }}>
        <h1 className='ui header'> 5 Day Forecast</h1>
        <div>{this.state.weatherRegionInformation.name}</div>
        <div className="ui grid holder">
          {mappedDays}
        </div>
        <WeatherDetails arrayOfDays={this.getSingleDayInfo()[this.state.clickedIndex]} />
      </div>
    );
  }
}

export default WeatherForecastList;