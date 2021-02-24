import styles from './app.module.css';
import Header from './components/header/header';
import Covid from './components/covid/covid';

function App({covid}) {
  

  return (
    <div className={styles.app}>
      <Header />
      <Covid covid={covid}/>
    </div>
  );
  
}

export default App;
