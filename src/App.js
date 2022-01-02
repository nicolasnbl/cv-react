
import Home from './pages/Home';
import { IconContext } from 'react-icons'


function App() {
  return (
    
    <div className="App">
      <IconContext.Provider value={{ style: {verticalAlign: 'middle' }}}>
      <Home />
      </IconContext.Provider>
    </div>
  );
}

export default App;
