import { useFormik } from 'formik'
import * as Yup from 'yup' // library for validations
import '../styles/styles.css'

const initialValues = {
  firstName: '',
  lastName: '',
  email: ''
}

export function FormikYup() {
  // hook of Formik
  // getFieldProps: name, values, handleChange, handleBlur, of Formik
  const { errors, touched, handleSubmit, getFieldProps } = useFormik({
    initialValues,
    onSubmit: (values) => {
      console.log({ values })
    },
    // Yup is a library for validations
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
      lastName: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
      email: Yup.string().email('Invalid email address').required('Required')
    })
  })

  return (
    <div>
      <h1>Formik Yup</h1>

      <form noValidate onSubmit={handleSubmit}>
        <label htmlFor='firstName'>First Name</label>
        <input type='text' {...getFieldProps('firstName')} />{' '}
        {touched.firstName && errors.firstName && (
          <span>{errors.firstName}</span>
        )}
        <label htmlFor='lastName'>Last Name</label>
        <input type='text' {...getFieldProps('lastName')} />
        {touched.lastName && errors.lastName && <span>{errors.lastName}</span>}
        <label htmlFor='email'>Email Address</label>
        <input type='email' {...getFieldProps('email')} />
        {touched.email && errors.email && <span>{errors.email}</span>}
        <button className='btn btn-primary' type='submit'>
          Save
        </button>
      </form>
    </div>
  )
}
