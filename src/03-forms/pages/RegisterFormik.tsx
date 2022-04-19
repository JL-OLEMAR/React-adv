import { Form, Formik } from 'formik'
import * as Yup from 'yup'

import { MyInput } from '../components'
import '../styles/styles.css'

interface FormData {
  name: string
  email: string
  password1: string
  password2: string
}

const initState: FormData = {
  name: '',
  email: '',
  password1: '',
  password2: ''
}

export function RegisterFormik() {
  return (
    <div>
      <h1>Register Formik</h1>
      <Formik
        initialValues={initState}
        validationSchema={Yup.object({
          name: Yup.string()
            .min(2, '* Must be at least 2 characters')
            .max(15, '* Must be 15 characters or less')
            .required('* Required'),
          email: Yup.string()
            .email('* Invalid email address')
            .required('* Required'),
          password1: Yup.string()
            .min(6, '* Must be at least 6 characters')
            .required('* Required'),
          password2: Yup.string()
            .min(6, '* Must be at least 6 characters')
            .oneOf([Yup.ref('password1')], '* Passwords must match')
            .required('* Required')
        })}
        onSubmit={(values) => console.log({ values })}
      >
        {({ handleReset, handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <MyInput
              label='First Name'
              name='name'
              placeholder='Name...'
              type='text'
            />
            <MyInput
              label='Email Address'
              name='email'
              placeholder='Email...'
              type='email'
            />
            <MyInput
              label='Password'
              name='password1'
              placeholder='Password...'
              type='password'
            />
            <MyInput
              label='Repeat Password'
              name='password2'
              placeholder='Repeat Password...'
              type='password'
            />

            <button
              className='btn btn-reset'
              type='button'
              onClick={handleReset}
            >
              Reset Form
            </button>

            <button className='btn btn-primary' type='submit'>
              Create
            </button>
          </Form>
        )}
      </Formik>
    </div>
  )
}
