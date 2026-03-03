import './App.css';
import Navbar from './component/Navbar';
import Home from './pages/Home';

function App() {
  return (
    <div className='app'>
      <Navbar />

      <div className='content'>
        <Home />
      </div>
      
    </div>
  );
}

export default App;
