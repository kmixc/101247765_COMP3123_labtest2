import React, { Component } from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import axios from 'axios'
import '../App.css'

export default class WeatherAxios extends Component {
    constructor(props) {
        super(props)

        this.state = {
            weather: [],
            date: new Date().toLocaleString(),
        }
    }

    componentDidMount() {
        axios.get('https://api.openweathermap.org/data/2.5/onecall?lat=43.675&lon=-79.410&exclude=daily,hourly,minutely,hourly&units=metric&appid=33c38d19b9b1953f62d4483414050cd4')
            .then(res => {
                const currentDay = res.data;
                const currentWeather = res.data.current.weather
                this.setState({ currentDay: currentDay, weather: currentWeather })
            })
    }

    render() {
        return (
            <div>
                {
                    this.state.weather.map(w => (
                        <div className=" bg-dark text-light p-5">
                            <Container className="display p-5">
                                <div className="bg-secondary p-3 round text-center">
                                    <h6>{this.state.date}</h6>
                                    <h4>{this.state.currentDay.timezone}</h4>
                                    <img src={`http://openweathermap.org/img/wn/${w.icon}@2x.png`} />
                                    <h3>{w.description.toUpperCase()}</h3>
                                    <h1>{this.state.currentDay.current.temp}℃</h1>
                                </div>
                            </Container>

                            <div>
                                <Container className='bg-warning round-info pt-3 text-dark'>
                                    <h2>{w.main}</h2>
                                    <Row>
                                        <Col>
                                            <p>Wind: {this.state.currentDay.current.wind_speed} km/h</p>
                                            <p>Humidity: {this.state.currentDay.current.humidity}%</p>
                                            <p>Wind Deg: {this.state.currentDay.current.wind_deg}°</p>
                                            <p>lon: {this.state.currentDay.lon}</p>
                                        </Col>
                                        <Col>
                                            <p>Feels Like: {this.state.currentDay.current.feels_like}°C</p>
                                            <p>UV Index: {this.state.currentDay.current.uvi}</p>
                                            <p>Wind Gust: {this.state.currentDay.current.wind_gust}</p>
                                            <p>lat: {this.state.currentDay.lat}</p>
                                        </Col>
                                    </Row>
                                </Container>
                            </div>
                        </div>
                    ))
                }

                <div>
                    <Col className="p-5">
                        <h1>Studient Info:</h1>
                        <h4>Oliver Kmiec</h4>
                        <h4>101247765</h4>
                        <h5>Lab Test 2</h5>
                    </Col>
                </div>
            </div>
        )
    }
}
