import Navbar from './components/Navbar';
import GetTicket from './components/GetTicket';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className='content'>
        <GetTicket/>
        
      </div>
    </div>
  );
}

export default App;
