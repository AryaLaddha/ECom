import './App.css';
import Navbar from './components/Navbar'
import BackgroundPage from './components/BackgroundPage'
import Bestsellers from './components/BestSellers/Bestsellers'
import Bestsellersgrid from './components/BestSellers/Bestsellersgrid'

function App() {
  return (
    <div className="App">
      <Navbar />
      <BackgroundPage />
      <Bestsellers />
      <Bestsellersgrid />
    </div>
  );
}

export default App;
