import './App.css';
import Navbar from './components/Navbar'
import BackgroundPage from './components/BackgroundPage'
import Bestsellers from './components/BestSellers/Bestsellers'

function App() {
  return (
    <div className="App">
      <Navbar />
      <BackgroundPage />
      <Bestsellers />
    </div>
  );
}

export default App;
