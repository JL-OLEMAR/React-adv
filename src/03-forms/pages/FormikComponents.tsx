import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as Yup from 'yup' // Yup is a library for validations
import '../styles/styles.css'

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  terms: false,
  jobType: ''
}

export function FormikComponents() {
  return (
    <div>
      <h1>Formik Components</h1>

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
        onSubmit={(values) => {
          console.log({ values })
        }}
      >
        {(_formik) => (
          <Form>
            <label htmlFor='firstName'>First Name</label>
            <Field name='firstName' placeholder='First Name...' type='text' />
            <ErrorMessage component='span' name='firstName' />

            <label htmlFor='lastName'>Last Name</label>
            <Field name='lastName' placeholder='Last Name...' type='text' />
            <ErrorMessage component='span' name='lastName' />

            <label htmlFor='email'>Email Address</label>
            <Field name='email' placeholder='Email...' type='email' />
            <ErrorMessage component='span' name='email' />

            <label htmlFor='jobType'>Job Type</label>
            <Field as='select' name='jobType'>
              <option value=''>Pick something</option>
              <option value='developer'>Developer</option>
              <option value='designer'>Designer</option>
              <option value='it-senior'>IT Senior</option>
              <option value='it-jr'>IT Jr.</option>
            </Field>
            <ErrorMessage component='span' name='jobType' />

            <label>
              <Field name='terms' type='checkbox' />
              Terms and conditions
            </label>
            <ErrorMessage component='span' name='terms' />

            <button className='btn btn-primary' type='submit'>
              Save
            </button>
          </Form>
        )}
      </Formik>
    </div>
  )
}
