import { createContext, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NavBar, Home, Projects, Button,About } from './constants';
export const Global = createContext()
function App() {
  const [color, setColor] = useState({
    backgroundColor: "rgb(8,8,25)",
    color: "white"
  })
  return (
    <>
      <Global.Provider value={{ color: color, setColor: setColor }}>
        <Router>
          <div className="app" style={color}>
            <NavBar />
            <div className='home'>
              <Button />
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/project' element={<Projects />} />
              </Routes>
            </div>
          </div>
        </Router>
      </Global.Provider>
    </>
  );
}

export default App;
