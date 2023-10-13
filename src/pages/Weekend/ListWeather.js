import React from 'react'
import WeatherItem from '../Tenday/WeatherItem'
import styles from '../Tenday/styles.module.css';
import { WeatherData } from '../Tenday/WeatherData' 

const ListWeather = () => {
  return (
    <div className={styles.DaybreakLargeScreen}>
        <div className={styles.DivHeader}>
            <h1><strong>Thời tiết 10 ngày</strong> <span>- Web, Or</span></h1>
        </div>
        <div className={styles.DivHeader}>Kể từ 16:47 EAT</div>

        <div className={styles.WeekDiv}>Cuối tuần này</div>
        {WeatherData.slice(3,6).map((item, index)=>(
            <WeatherItem 
            key={index}
            className={styles.CustomDiv}
            time={item.time}
            summary={item.summary}
            partly_Cloud={item.partly_Cloud}

            temperatureDay={item.day.temperature}
            rainDay={item.day.rain}
            windDay={item.day.wind}
            summaryDay={item.day.summary}
            humidityDay={item.day.humidity}
            UV_LeveLDay={item.day.UV_LeveL}
            sunRise={item.day.sun_Rise}
            sunSet={item.day.sun_Set}

            temperatureNight={item.night.temperature}
            rainNight={item.night.rain}
            windNight={item.night.wind}
            summaryNight={item.night.summary}
            humidityNight={item.night?.humidity}
            UV_LeveLNight={item.night?.UV_LeveL}
            moonRise={item.night?.moon_Rise}
            moonSet={item.night?.moon_Set}
            />
        ))}
        <div className={styles.WeekDiv}>Cuối tuần tới</div>
        {WeatherData.slice(11,14).map((item, index)=>(
            <WeatherItem 
            key={index}
            className={styles.CustomDiv}
            time={item.time}
            summary={item.summary}
            partly_Cloud={item.partly_Cloud}

            temperatureDay={item.day.temperature}
            rainDay={item.day.rain}
            windDay={item.day.wind}
            summaryDay={item.day.summary}
            humidityDay={item.day.humidity}
            UV_LeveLDay={item.day.UV_LeveL}
            sunRise={item.day.sun_Rise}
            sunSet={item.day.sun_Set}

            temperatureNight={item.night.temperature}
            rainNight={item.night.rain}
            windNight={item.night.wind}
            summaryNight={item.night.summary}
            humidityNight={item.night?.humidity}
            UV_LeveLNight={item.night?.UV_LeveL}
            moonRise={item.night?.moon_Rise}
            moonSet={item.night?.moon_Set}
            />
        ))}
        
    </div>
  )
}

export default ListWeather