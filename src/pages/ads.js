
import React from 'react'
import styles from './Tenday/styles.module.css';
function Aside() {
  return (
    <div className={styles.Aside}>
        <div className={styles.AdvertisementHeader}>Advertisement</div>
        <div className={styles.Ads}>
            <iframe src="https://www.youtube.com/embed/21gC1u6P2qg?si=tIncKtd0sOlONWRX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
    </div>
  );
}

export default Aside;
