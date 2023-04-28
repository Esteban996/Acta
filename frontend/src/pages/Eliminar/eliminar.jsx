



import React, { useState, useEffect } from "react";
import { Table, Form, Button } from "react-bootstrap";

export default function Eliminar() {


  const [usuarios, setUsuarios] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
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

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };
  const handleDelete = async (id) => {
    try {
        await fetch(`http://localhost:5000/user/delete/${id}`, {
          method: "DELETE"
        });
        // Actualizamos la lista de usuarios después de eliminar uno
        setUsuarios(usuarios.filter((user) => user.id !== id));
      } catch (error) {
        console.error(error);
      }
      fetchUsuarios();
  };

  return (
    <div>
      <h1>Lista de usuarios</h1>
      <Form>
        <Form.Group controlId="search">
          <Form.Label>Buscar por cédula:</Form.Label>
          <Form.Control type="text" onChange={handleSearch} />
        </Form.Group>
      </Form>
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
            <th>Acciones</th>
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
              <td>
                  <div>
                    <Button
                      variant="danger"
                      onClick={() => handleDelete(user.id)}>
                      Eliminar
                    </Button>
                  </div> 
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
