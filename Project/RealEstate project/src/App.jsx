import { ThemeProvider } from "@mui/material";
import Login from "./Components/Login/Login"
import  { lightTheme  } from './theme';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from "react";
import Upload from "./Components/Home/Upload";
import Home from "./Components/Home/Home";
import Admin from "./Components/Admin/Admin";




function App() {
  

  return (
    <>
    <ThemeProvider theme={lightTheme}>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/upload" element={ <Upload /> } />
          <Route path="/Home" element={ <Home /> } />
          <Route path="/admin" element={ <Admin /> } />
        </Routes>
      </Router>
     </ThemeProvider>
    </>
  )
}

export default App
