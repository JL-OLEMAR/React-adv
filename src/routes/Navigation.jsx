import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from 'react-router-dom'

import {
  DynamicForm,
  FormikAbstraction,
  FormikBasic,
  FormikComponents,
  FormikYup,
  Register,
  RegisterFormik
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
              <NavLink exact activeClassName='nav-active' to='/formik-register'>
                Formik Register
              </NavLink>
            </li>
            <li>
              <NavLink exact activeClassName='nav-active' to='/dynamic-form'>
                Dynamic Form
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
          <Route path='/formik-register'>
            <RegisterFormik />
          </Route>
          <Route path='/dynamic-form'>
            <DynamicForm />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}
