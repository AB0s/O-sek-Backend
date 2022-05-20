import React from 'react';
import Welcome from "./pages/Welcome";
import Login  from "./pages/Login";
import Reg from "./pages/Reg";
import {Routes, Route, Link} from "react-router-dom";
import {BrowserRouter} from "react-router-dom";
import { AuthContextProvider } from './context/AuthContext';
import Account from './components/Account';
import ProtectedRoute from './components/ProtectedRoute';

function App() {

    return(
      <div className="App">
          <BrowserRouter>
          <AuthContextProvider>
          <Routes>
                  <Route path="/" element={<Welcome/>}/>
                  <Route path="/login" element={<Login/>}/>
                  <Route path="/signup" element={<Reg/>}/>
                  <Route path='/account'element={<ProtectedRoute><Account /></ProtectedRoute>}/>
              </Routes>
          </AuthContextProvider>
          </BrowserRouter>
      </div>
    );
}

export default App;
