import React from 'react';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';

import IncioPage from "./view/users/Inicio";
import './App.css';

import ViewModificar from './view/Admin/viewModificar';
import ViewRegistro from './view/Admin/viewRegistro';
import Admin from './view/Admin/admin';
import ViewEliminar from './view/Admin/viewEliminar';
import ViewConsultar from './view/Admin/viewConsultar';
import Login1 from './view/Super/Login1';


function App () {
  return(
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<IncioPage/>} />
          <Route exact path="/Super" element ={<Login1/>}/>
          <Route exact path="/admin" element={<Admin />} />
          <Route exact path="/admin/registro" element={<ViewRegistro />} />
          <Route exact path="/admin/modificar" element={<ViewModificar />} />
          <Route exact path="/admin/eliminar" element={<ViewEliminar />} />
          <Route exact path="/admin/consultar" element={<ViewConsultar />} />
        </Routes>
      </div>
      <div className='dashboard-container'> 
        
          <div className='dashboard-body'>
              <Routes>
                  
                  <Route exact path="/admin" element={<Admin/>} />
                  <Route exact path="/admin/registro" element={<ViewRegistro/>} />
                  <Route exact path="/admin/modificar" element={< ViewModificar/>} />
                  <Route exact path="/admin/eliminar" element={<ViewEliminar/>} />
                  <Route exact path="/admin/consultar" element={<ViewConsultar/>} />
                  
              </Routes>
          </div>
      </div>
    </Router>
  )
}

export default App;