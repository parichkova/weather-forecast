import React from 'react';
import forecast from '../api/forecast';
import WeatherForecast from './WeatherForecast';
import Spinner from './Spinner';

class App extends React.Component {
  state = {
    lat: 0,
    lon: 0,
    errorMessage: '',
    weatherInfo: []
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

    debugger;
    this.setState({ weatherInfo: response.data.results });
  }

  renderBody() {
    if (this.state.errorMessage && !this.state.lat && !this.state.lon) {
      return  <div>Error: {this.state.errorMessage}</div> 
    }

    if (!this.state.errorMessage && this.state.lat && this.state.lon) {
      return <WeatherForecast />
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