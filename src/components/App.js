import React from 'react';
import forecast from '../api/forecast';
import WeatherForecastList from './WeatherForecastList';
import Spinner from './Spinner';

class App extends React.Component {
  state = {
    lat: 0,
    lon: 0,
    errorMessage: '',
    isReady: false,
    weatherRegionInfo: '',
    weatherListInfo: []
  };

  getWeatherInfo = async () => {
    const FORECAST_API_KEY = process.env.REACT_APP_API_KEY;

    const response = await forecast.get('/forecast', {
      params: {
        APPID: `${FORECAST_API_KEY}`,
        lat: this.state.lat,
        lon: this.state.lon,
       },
    })

    this.setState({ isReady: true, weatherListInfo: response.data.list, weatherRegionInfo: response.data.city });
  }

  renderBody() {
    if (this.state.errorMessage && !this.state.lat && !this.state.lon) {
      return  <div>Error: {this.state.errorMessage}</div> 
    }

    if (this.state.isReady && this.state.lat && this.state.lon) {
      return <WeatherForecastList weatherList={this.state.weatherListInfo} weatherRegion={this.state.weatherRegionInfo}/>
    }

    return  <Spinner/>
  }

  render() {   
    return <div className="border red">
      {this.renderBody()}
    </div>
    
  }
  
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
     (position) => {
        this.setState({ lat: position.coords.latitude, lon: position.coords.longitude });

        this.getWeatherInfo();
      },

      (err) => this.setState({ errorMessage: err.message })
    );
  }
}

export default App;