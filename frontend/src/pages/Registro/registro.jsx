import React, { Component} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import axios from "axios";
import './registro.css'

export default class Registro extends Component {

  state ={
    data: [],
    form:{
    fecha: '',
    nombre: '',
    apellido: '',
    email: '',
    cedula: '',
    ciudad: '',
    cargo: '',
    cin: '',
    sede: '',
    area: '',
    centro_de_costo: '',
    }
  }

  handleChange = async e => {
    e.persist();
    this.setState({
        form: {
            //esta linea es para que no se borre lo que hay en los campos
            ...this.state.form,
            [e.target.name]: e.target.value
        }
    });
    console.log(this.state.form);
}

peticionPost = async () => {
    delete this.state.form.id
    await axios.post('http://localhost:5000/user/create', this.state.form)
    .then(response => {
        
    }).catch(error => {
        console.log(error.message);
    })
}

 
  render(){
    const {form} = this.state;
  return (
    <div className="row registrouser">
      <div className="col-md-9 mb-4">
        <div className="card mb-4">
          <div className="card-header py-3">
            <h5 className="mb-0">Registro</h5>
          </div>
          <div className="card-body">
            <form>
              <div className="row mb-4">
                <div className="col">
                  <div className="form-outline">
                    <label for="fecha">Fecha de asignación</label>
                    <input
                      type="date"
                      className="form-control"
                      id="fecha"
                      name="fecha"
                      required
                      value={form ? form.fecha : ''}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                <div className="col">
                  <div className="form-outline">
                    <label htmlFor="nombre">Nombre</label>
                    <input
                      type="text"
                      className="form-control"
                      id="nombre"
                      name="nombre"
                      required
                      value={form ? form.nombre : ''}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
              </div>
              <div className="row mb-4">
                <div className="col">
                  <div className="form-outline">
                    <label htmlFor="apellido">Apellido</label>
                    <input
                      type="text"
                      className="form-control"
                      id="apellido"
                      name="apellido"
                      required
                      value={form ? form.apellido : ''}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                <div className="col">
                  <div className="form-outline">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      required
                      value={form ? form.email : ''}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
              </div>
              <div className="row mb-4">
                <div className="col">
                  <div className="form-outline">
                    <label htmlFor="cedula">Cédula</label>
                    <input
                      type="text"
                      className="form-control"
                      id="cedula"
                      name="cedula"
                      required
                      value={form ? form.cedula : ''}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                <div className="col">
                  <div className="form-outline">
                    <label htmlFor="ciudad">Ciudad</label>
                    <input
                      type="text"
                      className="form-control"
                      id="ciudad"
                      name="ciudad"
                      required
                      value={form ? form.ciudad : ''}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
              </div>
              <div className="row mb-4">
                <div className="col">
                  <div className="form-outline">
                    <label htmlFor="cargo">Cargo</label>
                    <input
                      type="text"
                      className="form-control"
                      id="cargo"
                      name="cargo"
                      required
                      value={form ? form.cargo : ''}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                <div className="col">
                  <div className="form-outline">
                    <label htmlFor="cin">CIN</label>
                    <input
                      type="text"
                      className="form-control"
                      id="cin"
                      name="cin"
                      required
                      value={form ? form.cin : ''}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
              </div>
              <div className="row mb-4">
                <div className="col">
                  <div className="form-outline">
                    <label htmlFor="sede">Sede</label>
                    <input
                      type="text"
                      className="form-control"
                      id="sede"
                      name="sede"
                      required
                      value={form ? form.sede : ''}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                <div className="col">
                  <div className="form-outline">
                    <label htmlFor="area">Área</label>
                    <input
                      type="text"
                      className="form-control"
                      id="area"
                      name="area"
                      required
                      value={form ? form.area : ''}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
              </div>
              <div className="row mb-4">
                <div className="form-outline">
                  <label htmlFor="nombre">Centro de costo</label>
                  <input
                    type="text"
                    className="form-control"
                    id="centro_de_costo"
                    name="centro_de_costo"
                    required
                    value={form ? form.centro_de_costo : ''}
                    onChange={this.handleChange}
                  />
                </div>
              </div>

              <button
                type="submit"
                className="btn btn-primary btn-lg btn-block"
                onClick={() => this.peticionPost()}>
                Registrar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
  }}
