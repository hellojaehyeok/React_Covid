import React from 'react';
import styles from './covidForm.module.css';

const CovidForm = ({item}) => {
    


    return(
        <li className={styles.itemList}>
            <ul>
                <li>날짜 : {item.createDt}</li>
                <li>누적 확진자 : {item.decideCnt}</li>
                <li>누적 사망자 : {item.deathCnt}</li>
                <li>누적 격리해제 : {item.clearCnt}</li>
                <li>누적 환진률 :{item.accDefRate} </li>
                <li></li>
            </ul>
        </li>
    );
};

export default CovidForm;