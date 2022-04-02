import {
  BrowserRouter,
  Navigate,
  NavLink,
  Route,
  Routes
} from 'react-router-dom'

import { LazyPage1, LazyPage2, LazyPage3 } from '../01-lazyload/pages'
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
                to='/lazy1'
              >
                Lazy 1
              </NavLink>
            </li>

            <li>
              <NavLink
                className={({ isActive }) => (isActive ? 'nav-active' : '')}
                to='/lazy2'
              >
                Lazy 2
              </NavLink>
            </li>

            <li>
              <NavLink
                className={({ isActive }) => (isActive ? 'nav-active' : '')}
                to='/lazy3'
              >
                Lazy 3
              </NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route element={<LazyPage1 />} path='/lazy1' />
          <Route element={<LazyPage2 />} path='/lazy2' />
          <Route element={<LazyPage3 />} path='/lazy3' />
          <Route element={<Navigate replace to='/lazy1' />} path='/*' />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
