import './App.css';
import Home from './components/Home/Home';
import About from './components/About/About';
import More from './components/More/More';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
import More1 from './components/More/More1';
import More2 from './components/More/More2';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} >
          <Route path='about' element={<About/>} />
          <Route path="more" element={<More/>} >
            <Route path="1" element={<More1/>} >
            <Route path="test" element={<More2/>} />
            </Route>
            <Route path="2" element={<More2/>} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
