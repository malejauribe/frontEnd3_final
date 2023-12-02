import React, { useReducer } from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Contact from "./Routes/Contact";
import Home from "./Routes/Home";
import Favs from "./Routes/Favs";
import Detail from "./Routes/Detail"
import { themeReducer, actionTypes, initialState } from './Components/utils/global.context'


function App() {
  const [state, dispatch] = useReducer(themeReducer, initialState);
  const { data, isDarkTheme } = state;
  return (
      <div className="App">
          <Navbar/>
          <Routes>
          <Route path="/home" element={ <Home /> } />
          <Route path="/favs" element={ <Favs  /> } />
          <Route path="/contact" element={ <Contact /> } />
          <Route path="/" element={ <Home theme={isDarkTheme} /> } />
          <Route path="dentista/:id" element={ <Detail /> } />
        </Routes>
          <Footer/>
      </div>
  );
}

export default App;
