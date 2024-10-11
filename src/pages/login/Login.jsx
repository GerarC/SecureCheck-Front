import React from 'react';
import { Mail, Lock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import "./login.scss";

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
    // If login is successful, navigate to home
    navigate('/');
  };

  return (
    <div className="login-container">
      <div className="login-content">
        <div className="welcome-message">
          <h1>Bienvenido Señor(a) Auditor</h1>
          <p>Inicie sesión para acceder a la herramienta de auditoría ISO 27001</p>
        </div>
        <div className="login-form">
          <div className="title">Iniciar Sesión</div>
          <form onSubmit={handleSubmit}>
            <div className="input-boxes">
              <div className="input-box">
                <Mail size={20} />
                <input type="text" placeholder="Ingrese su email" required />
              </div>
              <div className="input-box">
                <Lock size={20} />
                <input type="password" placeholder="Ingrese su contraseña" required />
              </div>
              <div className="text"><a href="#">¿Olvidó su contraseña?</a></div>
              <div className="button input-box">
                <input type="submit" value="Iniciar Sesión" />
              </div>
              <div className="text sign-up-text">
                ¿Aun no tienes cuenta? <a onClick={() => navigate('/crearcuenta')}>Crear Cuenta</a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;