import React from 'react'
import ListWeather from './ListWeather'
import Aside from '../ads'
import styles from './styles.module.css';

const TenDay = () => {
  return (
    <div className={styles.Tenday}>
        <div className={styles.Tenday_Ads}>
          <ListWeather></ListWeather>
          <Aside></Aside>
          <Aside></Aside>
        </div>
       
        <div className={styles.Tenday_Ads}>
          <Aside></Aside>
          <Aside></Aside>
          <Aside></Aside>
        </div>
    </div>
    
  )
}



export default TenDay



