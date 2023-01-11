
import './App.css';
import Home from './views/Home';
import Navbar from './component/Navbar';
import Footer from './component/Footer';

function App() {
  return (
    <div className="App">
      <section>
        <Navbar/>
      </section>
      <section> 
      <Home/>

      </section>
      <section>
        <Footer/>
      </section>
      
    </div>
  );
}

export default App;
