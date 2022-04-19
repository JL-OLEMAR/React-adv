import { FormEvent } from 'react'

import { useForm } from '../hooks/useForm'
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

export function Register() {
  const { formData, isValidEmail, onChange, resetForm } =
    useForm<FormData>(initState)

  const { name, email, password1, password2 } = formData

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <div>
      <h1>Register</h1>
      <form noValidate onSubmit={handleSubmit}>
        <input
          className={`${name.trim().length <= 0 && 'has-error'}`}
          name='name'
          placeholder='Name...'
          type='text'
          value={name}
          onChange={onChange}
        />
        {name.trim().length <= 0 && <span>This field is required</span>}

        <input
          className={`${!isValidEmail(email) && 'has-error'}`}
          name='email'
          placeholder='Email...'
          type='email'
          value={email}
          onChange={onChange}
        />
        {!isValidEmail(email) && <span>Email is not valid</span>}

        <input
          name='password1'
          placeholder='Password...'
          type='password'
          value={password1}
          onChange={onChange}
        />
        {password1.trim().length <= 0 && <span>This field is required</span>}
        {password1.trim().length < 6 && password1.trim().length > 0 && (
          <span>The password must have 6 letters</span>
        )}

        <input
          name='password2'
          placeholder='Repeat Password...'
          type='password'
          value={password2}
          onChange={onChange}
        />
        {password2.trim().length <= 0 && <span>This field is required</span>}
        {password2.trim().length > 0 && password1 !== password2 && (
          <span>Passwords must be the same</span>
        )}

        <button className='btn btn-primary' type='submit'>
          Create
        </button>

        <button className='btn btn-reset' type='button' onClick={resetForm}>
          Reset Form
        </button>
      </form>
    </div>
  )
}
