import React from 'react'
import { NavLink, Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <header>
        <nav className='menu-nav'>
          <NavLink to="/">
            <img
              className="logo"
              src="/img/logo2.jpg"
              alt="logo"
            />
          </NavLink>

          <ul className="lista-menu">
            <li>
              <NavLink to="/kitcarrera">KIT CARRERA</NavLink>
            </li>
            <li>
              <NavLink to="/formulario">FORMULARIO</NavLink>
            </li>
            <li>
             <NavLink to="/galeria"> GALERIA</NavLink>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
  <ul className="footer-nav">
    <li>
      <NavLink to="/kitcarrera">KIT CARRERA</NavLink>
    </li>

    <li>
      <NavLink to="/formulario">FORMULARIO</NavLink>
    </li>
  </ul>

  <p>@ Running Trail 2026. Todos los derechos reservados</p>
</footer>
    </>
  )
}


export default Layout;