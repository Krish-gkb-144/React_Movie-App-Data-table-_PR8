import logo from './logo.svg';
import './App.css';
import Home from './component/Home';
import Data from './component/Data';
import 'bootstrap/dist/css/bootstrap.css'

function App() {
  return (
    <>
      <Home allrecord={Data}/>
    </>
  );
}

export default App;
