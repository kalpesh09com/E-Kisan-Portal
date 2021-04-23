import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-weather-component',
  templateUrl: './weather-component.component.html',
  styleUrls: ['./weather-component.component.css']
})
export class WeatherComponentComponent implements OnInit {

  location: any = "pune";
  weatherform!: FormGroup
  WeatherData: any;

  constructor() { }

  checkWeather() {
    console.log(this.weatherform.value.city);

    this.location = this.weatherform.value.city;

    this.getWeatherData(this.location);
  }

  ngOnInit() {


    this.weatherform = new FormGroup({
      city: new FormControl(""),
    })

    this.WeatherData = {
      main: {},
      isDay: true,
      location: "pune"
    };
    //  this.getWeatherData();
    console.log(this.WeatherData);
  }

  getWeatherData(wdata: any) {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + wdata + '&appid=ff1bc4683fc7325e9c57e586c20cc03e')
      .then(response => response.json())
      .then(data => { this.setWeatherData(data); })
  }

  setWeatherData(data: any) {
    this.WeatherData = data;
    let sunsetTime = new Date(this.WeatherData.sys.sunset * 1000);
    this.WeatherData.sunset_time = sunsetTime.toLocaleTimeString();
    let currentDate = new Date();
    this.WeatherData.isDay = (currentDate.getTime() < sunsetTime.getTime());
    this.WeatherData.temp_celcius = (this.WeatherData.main.temp - 273.15).toFixed(0);
    this.WeatherData.temp_min = (this.WeatherData.main.temp_min - 273.15).toFixed(0);
    this.WeatherData.temp_max = (this.WeatherData.main.temp_max - 273.15).toFixed(0);
    this.WeatherData.temp_feels_like = (this.WeatherData.main.feels_like - 273.15).toFixed(0);
  }

}
