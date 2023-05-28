import { useState, useEffect } from "react";
import GoogleLogin from 'react-google-login';
import {gapi } from "gapi-script";
import logo from "../../assets/images/logoColombina.png";
import './login1.css';
import { Route, useNavigate } from "react-router-dom";

export default function Login1(){

    const clientID = "402750527956-0bdb5vadvibe9aplmqhs1hp184mss55u.apps.googleusercontent.com";
    const [user, setUser] = useState({});
    const [loggedIn, setLoggedIn] = useState(false); 
    const navigate = useNavigate ();
    

  const onSuccess = (response) => {
    setUser(response.profileObj);
    document.getElementsByClassName("btn").hidden = true;
    setLoggedIn(true);
  }
  const onFailure = (response) => {
    console.log("Something went wrong");
  }
  const handleLogout  = () => {
    setUser({}); 
  }
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientID,
      });
    }
    gapi.load("client:auth2", start);
  });

  useEffect(() => {
    if (loggedIn) {
      navigate("/admin");
    }
  }, [loggedIn, navigate]);


  return (
    <div className="App">
      <section className="form-login">
    <img className= "colombina-log" src={logo} alt="logo Colombina"/>
    <input className="controls" type="text" name="usuario" value="" placeholder="usuario"/>
    <input className="controls" type="password" name="contraseña" value="" placeholder="contraseña"/>
    <input className="buttons"  type="submit" name="" value="Ingresar"/>
    <p><a href="#">Olvide mi contraseña</a></p>
     </section>
     <section>
     <div className="center">
    
      <div className='btn1'>

        <GoogleLogin
          clientId={clientID}
          onSuccess={onSuccess}
          onFailure={onFailure}
          buttonText="Continue  with Google"
          cookiePolicy={"single_host_origin"}
          
        />
      
      </div>
      



    </div>
     </section>
    </div>
  );
};