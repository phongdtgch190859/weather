import React from 'react'
import styles from '../Tenday/styles.module.css';
import Aside from '../ads'
import ListWeather from './ListWeather';

const Weekend = () => {
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

export default Weekend