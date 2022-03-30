import './App.css';
import Header from './Components/Header'
import Section1 from './Components/Section1'
import Section2 from './Components/Section2'
import Section3 from './Components/Section3';
import Footer from './Components/Footer';

function App() {
  return (
    <>
    <div className="App">
      <div className='container'>
      <Header/>
      <Section1/>
      <Section2/>
      <Section3/>
      <Footer/>
      </div>
    </div>
    </>
  );
}

export default App;
