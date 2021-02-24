import React, { useEffect, useState } from 'react';
import CovidData from './covidData/covidData';

const Covid = ({covid}) => {
    
    const [dailyDecide, setDailyDecide] = useState([]);
    

    useEffect(() => {
        const update = [];
        for(let i=0 ; i < covid.length-1 ; i++){
            update.push(covid[i+1].decideCnt - covid[i].decideCnt);
        }
        setDailyDecide(update);
    },[])   

    

    return(
        <div>
            <ul>
                { covid.map((item, index) => <CovidData key={item.seq} item={item} dailyDecide={dailyDecide[index]}/>) }
            </ul>
        </div>
    );
};

export default Covid;