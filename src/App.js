
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';


import Login from './components/Auth/Login';
import Profile from './components/Profile/Profile';
import Feed from './components/Feed/Feed';

const App = () => {
  return (
    <Router>
      <div>
        <nav className="navbar">
          <Link to="/">Inicio</Link>
          <Link to="/login">Iniciar sesión</Link>
          <Link to="/profile">Perfil</Link>
          <Link to="/feed">Feed</Link>
        </nav>

        <div className="container">
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/profile" component={Profile} />
            <Route path="/feed" component={Feed} />
            <Route path="/" exact>
              <h2>Bienvenido a la Página de Inicio</h2>
              <p>Selecciona una opción del menú de navegación.</p>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
