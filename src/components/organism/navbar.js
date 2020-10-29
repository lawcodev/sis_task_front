import React from "react";
import { NavLink } from "react-router-dom";
import { withRouter } from 'react-router-dom';

function Navbar(props) {
  const handleRedirect = (e, param) => {
    e.preventDefault();
    switch (param) {
      case "tasks":
        props.history.push({
          pathname: '/tasks',
          params: 'Octubre'
        });
        break;
        default:
          break;
      }
  }
      
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          <span className="font-weight-bold">SISTASK</span>
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <span style={{cursor: 'pointer'}} onClick={e => handleRedirect(e, 'tasks')} className="nav-link">
                Tareas
              </span>
            </li>
            {/* <li>
              <NavLink to="/projects" className="nav-link">
                Proyectos
              </NavLink>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default withRouter(Navbar);