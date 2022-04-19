import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from 'react-router-dom'

import {
  Register,
  FormikBasic,
  FormikYup,
  FormikComponents,
  FormikAbstraction
} from '../03-forms/pages'
import logo from '../logo.svg'

export const Navigation = () => {
  return (
    <Router>
      <div className='main-layout'>
        <nav>
          <img alt='React Logo' src={logo} />
          <ul>
            <li>
              <NavLink exact activeClassName='nav-active' to='/register'>
                Register
              </NavLink>
            </li>
            <li>
              <NavLink exact activeClassName='nav-active' to='/formik-basic'>
                Formik Basic
              </NavLink>
            </li>
            <li>
              <NavLink exact activeClassName='nav-active' to='/formik-yup'>
                Formik Yup
              </NavLink>
            </li>
            <li>
              <NavLink
                exact
                activeClassName='nav-active'
                to='/formik-components'
              >
                Formik Components
              </NavLink>
            </li>
            <li>
              <NavLink
                exact
                activeClassName='nav-active'
                to='/formik-abstraction'
              >
                Formik Abstraction
              </NavLink>
            </li>
            <li>
              <NavLink exact activeClassName='nav-active' to='/users'>
                Users
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path='/register'>
            <Register />
          </Route>
          <Route path='/formik-basic'>
            <FormikBasic />
          </Route>
          <Route path='/formik-yup'>
            <FormikYup />
          </Route>
          <Route path='/formik-components'>
            <FormikComponents />
          </Route>
          <Route path='/formik-abstraction'>
            <FormikAbstraction />
          </Route>
          <Route path='/users'>
            <h1>Users</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  )
}
