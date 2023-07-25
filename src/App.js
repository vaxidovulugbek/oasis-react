import { Route, Routes } from 'react-router-dom';
import './App.css';
import Chief from './pages/Chief';
import Events from './pages/Events';
import RoutesPath from './Routes';
function App() {
  const event = new Date();

console.log(event.toLocaleTimeString('en-US'));
  return (
    <div className="App">
      <main>
          <div className='container-box'>

              <Routes>
                <Route path={RoutesPath.home} element={<Chief />} />
                <Route path={RoutesPath.events} element={<Events />} />
                {/* {
                  RoutesPath.forEach((el) => {
                    return Route path={RoutesPath.events} element={<Events />} />
                  })
                } */}
             </Routes>


          </div>
      </main>
    </div>
  );
}

export default App;
