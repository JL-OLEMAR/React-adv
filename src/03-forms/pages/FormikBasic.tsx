import { FormikErrors, useFormik } from 'formik'
import '../styles/styles.css'

interface FormValues {
  firstName: string
  lastName: string
  email: string
}

const initialValues = {
  firstName: '',
  lastName: '',
  email: ''
}

export function FormikBasic() {
  const validate = ({ firstName, lastName, email }: FormValues) => {
    const errors: FormikErrors<FormValues> = {}

    // Validation of FirstName
    if (!firstName) {
      errors.firstName = 'Required'
    } else if (firstName.length >= 15) {
      errors.firstName = 'Must be 15 characters or less'
    }

    // Validation of LastName
    if (!lastName) {
      errors.lastName = 'Required'
    } else if (lastName.length >= 10) {
      errors.lastName = 'Must be 10 characters or less'
    }

    // Validation of Email
    if (!email) {
      errors.email = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      errors.email = 'Invalid email address'
    }

    return errors
  }

  // hook of Formik
  const { values, errors, touched, handleChange, handleSubmit, handleBlur } =
    useFormik({
      initialValues,
      onSubmit: (values) => {
        console.log({ values })
      },
      validate
    })

  return (
    <div>
      <h1>Formik Basic</h1>

      <form noValidate onSubmit={handleSubmit}>
        <label htmlFor='firstName'>First Name</label>
        <input
          name='firstName'
          type='text'
          value={values.firstName}
          onBlur={handleBlur} // Look at the focus change
          onChange={handleChange}
        />
        {touched.firstName && errors.firstName && (
          <span>{errors.firstName}</span>
        )}

        <label htmlFor='lastName'>Last Name</label>
        <input
          name='lastName'
          type='text'
          value={values.lastName}
          onBlur={handleBlur} // Look at the focus change
          onChange={handleChange}
        />
        {touched.lastName && errors.lastName && <span>{errors.lastName}</span>}

        <label htmlFor='email'>Email Address</label>
        <input
          name='email'
          type='email'
          value={values.email}
          onBlur={handleBlur} // Look at the focus change
          onChange={handleChange}
        />
        {touched.email && errors.email && <span>{errors.email}</span>}

        <button className='btn btn-primary' type='submit'>
          Save
        </button>
      </form>
    </div>
  )
}
