import { useState, useEffect } from "react";
import { Table, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import '../Consultar/consultar.css'



export default function Consultar(){

    const style = { 
        margin: '2.8em',
        paddingLeft: 0,
        listStyle: 'none',
        width: '250px',
    };

    const SignIn = ({ handleEvent }) => {
        return <div className="consulta" >
            <button className="btn btn-primary btn-lg btn-block " style= {style} onClick={e => handleEvent(true)}>Consultar</button>
        </div>
    };

    const Logout = () => {

        const [usuarios, setUsuarios] = useState([]);
        const [filtererdUsers, setFilteredUsers] = useState([]);

        const fetchUsuarios = async () => {
            const response = await fetch("http://localhost:5000/user");
            const data = await response.json();
            setUsuarios(data);
            setFilteredUsers(data);
          };
        
          useEffect(() => {
            fetchUsuarios();
          }, []);

        return(
            <div className="consultar">
              <h1 className="title">Lista de usuarios:</h1>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Cédula</th>
                    <th>Email</th>
                    <th>Fecha</th>
                    <th>Ciudad</th>
                    <th>Cargo</th>
                    <th>CIN</th>
                    <th>Sede</th>
                    <th>Área</th>
                    <th>Centro de Costo</th>
                  </tr>
                </thead>
                <tbody>
                  {filtererdUsers.map((user) => (
                    <tr key={user.id}>
                      <td>{user.nombre}</td>
                      <td>{user.apellido}</td>
                      <td>{user.cedula}</td>
                      <td>{user.email}</td>
                      <td>{user.fecha}</td>
                      <td>{user.ciudad}</td>
                      <td>{user.cargo}</td>
                      <td>{user.cin}</td>
                      <td>{user.sede}</td>
                      <td>{user.area}</td>
                      <td>{user.centro_de_costo}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          );
    };


    const [isLoggedIn, setIsLoggedIn] = useState(false);

    if (!isLoggedIn) 
    return(<SignIn handleEvent={setIsLoggedIn}/>) ;
  
    return <Logout handleEvent={true} />;
}