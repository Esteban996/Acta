import React, { useState, useEffect } from "react";
import { Table, Form, Button } from "react-bootstrap";
import '../Modificar/modificar.css'

export default function Modificar() {
  const [usuarios, setUsuarios] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [editing, setEditing] = useState(null);
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [cedula, setCedula] = useState("");
  const [email, setEmail] = useState("");
  const [fecha, setFecha] = useState("");
  const [ciudad, setCiudad] = useState("");
  const [cargo, setCargo] = useState("");
  const [cin, setCin] = useState("");
  const [sede, setSede] = useState("");
  const [area, setArea] = useState("");
  const [centro_de_costo, setCentroDeCosto] = useState("");
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

  const handleEdit = (user) => {
    setEditing(user);
    setNombre(user.nombre);
    setApellido(user.apellido);
    setCedula(user.cedula);
    setEmail(user.email);
    setFecha(user.fecha);
    setCiudad(user.ciudad);
    setCargo(user.cargo);
    setCin(user.cin);
    setSede(user.sede);
    setArea(user.area);
    setCentroDeCosto(user.centro_de_costo);
  };

  const handleSave = async (event) => {
    event.preventDefault();
    const response = await fetch(
      `http://localhost:5000/user/${editing.id}`,
      {
        method: "PUT",
        body: JSON.stringify({
          id: editing.id,
          nombre: nombre,
          apellido: apellido,
          cedula: cedula,
          email: email,
          fecha: fecha,
          ciudad: ciudad,
          cargo: cargo,
          cin: cin,
          sede: sede,
          area: area,
          centro_de_costo: centro_de_costo,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    );
    await response.json();
    setEditing(null);
    fetchUsuarios();
  };



  return (
    <div className="modificar">
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
                {editing && editing.id === user.id ? (
                  <div>
                    <Form onSubmit={handleSave}>
                      <Form.Group controlId="nombre">
                        <Form.Control
                          type="text"
                          value={nombre}
                          onChange={(e) => setNombre(e.target.value)}
                        />
                      </Form.Group>
                      <Form.Group controlId="apellido">
                        <Form.Control
                          type="text"
                          value={apellido}
                          onChange={(e) => setApellido(e.target.value)}
                        />
                      </Form.Group>
                      <Form.Group controlId="cedula">
                        <Form.Control
                          type="text"
                          value={cedula}
                          onChange={(e) => setCedula(e.target.value)}
                        />
                      </Form.Group>
                      <Form.Group controlId="email">
                        <Form.Control
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </Form.Group>
                      <Form.Group controlId="fecha">
                        <Form.Control
                          type="date"
                          value={fecha}
                          onChange={(e) => setFecha(e.target.value)}
                        />
                      </Form.Group>
                      <Form.Group controlId="ciudad">
                        <Form.Control
                          type="text"
                          value={ciudad}
                          onChange={(e) => setCiudad(e.target.value)}
                        />
                      </Form.Group>
                      <Form.Group controlId="cargo">
                        <Form.Control
                          type="text"
                          value={cargo}
                          onChange={(e) => setCargo(e.target.value)}
                        />
                      </Form.Group>
                      <Form.Group controlId="cin">
                        <Form.Control
                          type="text"
                          value={cin}
                          onChange={(e) => setCin(e.target.value)}
                        />
                      </Form.Group>
                      <Form.Group controlId="sede">
                        <Form.Control
                          type="text"
                          value={sede}
                          onChange={(e) => setSede(e.target.value)}
                        />
                      </Form.Group>
                      <Form.Group controlId="area">
                        <Form.Control
                          type="text"
                          value={area}
                          onChange={(e) => setArea(e.target.value)}
                        />
                      </Form.Group>
                      <Form.Group controlId="centro_de_costo">
                        <Form.Control
                          type="text"
                          value={centro_de_costo}
                          onChange={(e) => setCentroDeCosto(e.target.value)}
                        />
                      </Form.Group>
                      <Button variant="primary" type="submit">
                        Guardar
                      </Button>
                    </Form>
                  </div>
                ) : (
                  <div>
                    <Button variant="warning" onClick={() => handleEdit(user)}>
                      Editar
                    </Button>{" "}
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
