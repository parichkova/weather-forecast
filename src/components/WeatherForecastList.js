import React from 'react';
import WeatherForecastTile from './WeatherForecastTile';


//since we do not use lifecycle methods could be functional component

const WeatherForecastList = (props) => {
  const weatherInfoList = props.weatherList;
  const weatherRegionInformation = props.weatherRegion;
  const singleDayForecast = [];
  
  const getSingleDayInfo = () => {
    const chunkSize = 8;
    const rawArr = weatherInfoList;
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

  const days = getSingleDayInfo();

  const mappedDays = days.map(day => {
    const firstDay = day[0];
    const dayWeather = firstDay.weather[0];
     return <WeatherForecastTile key={firstDay.dt} main={dayWeather.main} description={dayWeather.description} date={firstDay.dt_txt}/>
  })

  return (
    <div className={`weather-forecast ui container`} style={{marginTop: '20px'}}>
      <h1 className='ui header'> 5 Day Forecast</h1>
      <div className="ui container">{weatherRegionInformation.name}</div>
      <div className="ui grid">
        {mappedDays}
      </div>
    </div>
  );
};

export default WeatherForecastList;