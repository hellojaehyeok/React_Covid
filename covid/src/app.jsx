import styles from './app.module.css';
import CovidForm from './components/covidForm/covidForm';

function App({covid}) {


  
  return (
    <div className="App">
      <ul>
        {covid.map(item => <CovidForm key={item.seq} item={item} />)}
      </ul>
    </div>
  );
}

export default App;
