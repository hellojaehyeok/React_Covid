import React, { useEffect } from 'react';
import styles from './covidData.module.css';

const CovidData = ({item, dailyDecide}) => {

    return(
        <li className={styles.itemList}>
            {dailyDecide && 
            <ul>
            <li>날짜 : {item.createDt}</li>
            <li>신규 확진자 : {dailyDecide}</li>
            {/* <li>누적 확진자 : {item.decideCnt}</li>
            <li>누적 사망자 : {item.deathCnt}</li>
            <li>누적 격리해제 : {item.clearCnt}</li>
            <li>누적 환진률 :{item.accDefRate} </li> */}
            <li></li>
            </ul>}
        </li>
    );
};

export default CovidData;