
import './styles/App.css';
import Carousel from './components/Carousel';
import Display from './components/Display';
import Navbar from './components/Navbar';
import Cart from './components/Cart';

function App() {
  return (
    <div className="App">
     
    <Navbar/>
     <Carousel />
     <Display />
     <Cart/>
     
    </div>
  );
}

export default App;
