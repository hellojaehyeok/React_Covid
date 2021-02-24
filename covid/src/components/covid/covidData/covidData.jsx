import React from 'react';
import styles from './covidData.module.css';

const CovidData = ({item, dailyDecide}) => {

    return(
        <li className={styles.itemList}>
            {dailyDecide && 
            <ul>
            <li>날짜 : {item.createDt.split('').splice(0,10).join('')}</li>
            <li>신규 확진자 : {dailyDecide}</li>
            </ul>}
        </li>
    );
};

export default CovidData;