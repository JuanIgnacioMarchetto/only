
import React, { useState } from 'react';
import AuthService from '../../services/AuthService';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      await AuthService.login(email, password);
      // Manejar redirección o actualización del estado de la aplicación después del inicio de sesión
    } catch (error) {
      // Manejar errores de inicio de sesión
      console.error('Error al iniciar sesión:', error);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="button" onClick={handleLogin}>Iniciar sesión</button>
      </form>
    </div>
  );
};

export default Login;
