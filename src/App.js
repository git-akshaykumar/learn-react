
import './App.css';
import PrintNumber from './components/PrintNumber';
import PrintNumbers from './components/PrintNumbers';

function App() {


  const consoleNum = (num) =>{
      alert(num);
  }


  return (
    <div className="App">
      <PrintNumbers numsList={[1,2,3,4,5,6,7,8,9,10]}>
        <PrintNumber onClick={consoleNum}/>
      </PrintNumbers>
    </div>
  );
}

export default App;