import React from 'react'
import {BrowserRouter, Route, Routes, Link} from 'react-router-dom';
import {Home} from './pages/Home'
import {Projects} from './pages/Projects'


function App () {

    return(
        <BrowserRouter basename='/portafolio'> 
            <Routes>
                <Route path="" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
            </Routes>
        </BrowserRouter>
    );
}



export default App;