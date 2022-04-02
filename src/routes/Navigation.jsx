import {
  BrowserRouter,
  Navigate,
  NavLink,
  Route,
  Routes
} from 'react-router-dom'

import logo from '../logo.svg'

export function Navigation() {
  return (
    <BrowserRouter>
      <div className='main-layout'>
        <nav>
          <img alt='React logo' src={logo} />

          <ul>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? 'nav-active' : '')}
                to='/home'
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                className={({ isActive }) => (isActive ? 'nav-active' : '')}
                to='/about'
              >
                About
              </NavLink>
            </li>

            <li>
              <NavLink
                className={({ isActive }) => (isActive ? 'nav-active' : '')}
                to='/users'
              >
                Users
              </NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route element={<h1>About Page</h1>} path='/about' />
          <Route element={<h1>Users Page</h1>} path='/users' />
          <Route element={<h1>Home Page</h1>} path='/home' />
          <Route element={<Navigate replace to='/home' />} path='/*' />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
