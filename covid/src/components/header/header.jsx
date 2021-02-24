import React from 'react';
import styles from './header.module.css';

const Header = (props) => {
    
    return(
        <header className={styles.header}>
            <h1>2021년 2월 코로나 확진자 현황</h1>
        </header>
    )
};

export default Header;