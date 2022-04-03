import { Suspense } from 'react'
import {
  BrowserRouter,
  Navigate,
  NavLink,
  Route,
  Routes
} from 'react-router-dom'

import logo from '../logo.svg'

import { routes } from './routes.ts'

export function Navigation() {
  return (
    <Suspense fallback={<span>Loading...</span>}>
      <BrowserRouter>
        <div className='main-layout'>
          <nav>
            <img alt='React logo' src={logo} />

            <ul>
              {routes.map(({ name, to }) => (
                <li key={name}>
                  <NavLink
                    className={({ isActive }) => (isActive ? 'nav-active' : '')}
                    to={to}
                  >
                    {name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <Routes>
            {routes.map(({ name, path, Component }) => (
              <Route key={name} element={<Component />} path={path} />
            ))}
            <Route element={<Navigate replace to={routes[0].to} />} path='/*' />
          </Routes>
        </div>
      </BrowserRouter>
    </Suspense>
  )
}
