import { User, Mail, Lock, Calendar, CreditCard } from 'lucide-react';
import "./createaccount.scss";

const CreateAccount = () => {
  return (
    <div className="create-account-container">
      <div className="create-account-content">
        <div className="welcome-message">
          <h1>Crear Cuenta de Auditor</h1>
          <p>Regístrese para acceder a la herramienta de auditoría ISO 27001</p>
        </div>
        <div className="create-account-form">
          <div className="title">Registro</div>
          <form action="#">
            <div className="input-boxes">
              <div className="input-box">
                <User size={20} />
                <input type="text" placeholder="Nombre" required />
              </div>
              <div className="input-box">
                <User size={20} />
                <input type="text" placeholder="Apellido" required />
              </div>
              <div className="input-box">
                <CreditCard size={20} />
                <input type="text" placeholder="Cédula" required />
              </div>
              <div className="input-box">
                <Mail size={20} />
                <input type="email" placeholder="Correo electrónico" required />
              </div>
              <div className="input-box">
                <Calendar size={20} />
                <input type="date" placeholder="Fecha de nacimiento" required />
              </div>
              <div className="input-box">
                <Lock size={20} />
                <input type="password" placeholder="Contraseña" required />
              </div>
              <div className="input-box">
                <Lock size={20} />
                <input type="password" placeholder="Confirmar Contraseña" required />
              </div>
              <div className="button input-box">
                <input type="submit" value="Crear Cuenta" />
              </div>
              <div className="text sign-in-text">
                ¿Ya tienes una cuenta? <a href="/login">Iniciar Sesión</a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateAccount;
