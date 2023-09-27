import './App.css';
import Header from './Components/Header';
import Meme from './Components/Meme'
import Example from './Components/Example';
import SecondExample from './Components/SecondExampl'


function App() {
  return (
    <div className="App">
      <Header />
      <Meme />
      {/* <div><Example /></div> */}
      <div><SecondExample/></div>
    </div>
  );
}

export default App;
