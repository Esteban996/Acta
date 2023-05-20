import '../users/index.css'
import imgsupervisor from '../../assets/images/supervisor.png'
import imgadmin from '../../assets/images/administrador.png'
import imgColombina from '../../assets/images/logoColombina.png'

export default function Inicio() {
  return (
    <div className='inicio'>
      <section className="letrero">
        <label className="mensaje" />
          <h1 className='bienvenido'><center>Bienvenido.</center></h1>
        <p>
          <h4 className='contenido'><center>Elija el departamento al que desea ingresar.</center></h4>
        </p>
      </section>

      <div>
        <a href="/Super">
          <img
            id="administrador"
            src={imgadmin}
            className="administrador"
            alt="logo administrador"
          />
        </a>
      </div>

      <div>
        <a href='/Super'>
          {" "}
          <img
            id="supervisor"
            src={imgsupervisor}
            className="supervisor"
            alt="logo supervisor"
          />
        </a>
      </div>

      <div>
        <img
          src={imgColombina}
          className="colombina"
          alt="logoColombina"
        />
      </div>
    </div>
  );
}
