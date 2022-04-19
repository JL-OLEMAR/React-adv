import { Form, Formik } from 'formik'
import * as Yup from 'yup' // Yup is a library for validations

import { MyInput, MySelect, MyCheckbox } from '../components' // output: Label, inputs, errors
import '../styles/styles.css'

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  terms: false,
  jobType: ''
}

export function FormikAbstraction() {
  return (
    <div>
      <h1>Formik Abstraction</h1>

      <Formik
        initialValues={initialValues}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, '* Must be 15 characters or less')
            .required('* Required'),
          lastName: Yup.string()
            .max(15, '* Must be 15 characters or less')
            .required('* Required'),
          email: Yup.string()
            .email('* Invalid email address')
            .required('* Required'),
          terms: Yup.boolean().oneOf([true], '* Must agree to terms'),
          jobType: Yup.string()
            .notOneOf(['it-jr'], '* This option is not available')
            .required('* Required')
        })}
        onSubmit={(values) => console.log({ values })}
      >
        {(_formik) => (
          <Form>
            <MyInput
              label='First Name'
              name='firstName'
              placeholder='First Name...'
              type='text'
            />
            <MyInput
              label='Last Name'
              name='lastName'
              placeholder='Last Name...'
              type='text'
            />
            <MyInput
              label='Email Address'
              name='email'
              placeholder='Email...'
              type='email'
            />
            <MySelect label='Job Type' name='jobType' type='select'>
              <option value=''>Pick something</option>
              <option value='developer'>Developer</option>
              <option value='designer'>Designer</option>
              <option value='it-senior'>IT Senior</option>
              <option value='it-jr'>IT Jr.</option>
            </MySelect>

            <MyCheckbox label='Terms and Conditions' name='terms' />
            <button className='btn btn-primary' type='submit'>
              Save
            </button>
          </Form>
        )}
      </Formik>
    </div>
  )
}
