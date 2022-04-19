import { Form, Formik } from 'formik'
import * as Yup from 'yup'

import { MyInput, MySelect } from '../components'
import formJson from '../data/custom-form.json'

const initialValues: { [key: string]: string } = {}
const requiredFields: { [key: string]: Yup.StringSchema } = {}

for (const fieldsData of formJson) {
  // Value initial for each field
  initialValues[fieldsData.name] = fieldsData.value

  // Validations ↓↓
  if (!fieldsData.validations) continue

  let schema = Yup.string()

  for (const rule of fieldsData.validations) {
    if (rule.type === 'required') {
      schema = schema.required('* Required')
    }

    if (rule.type === 'minLength') {
      schema = schema.min(
        (rule as any).value || 2,
        `* Must be at least ${(rule as any).value || 2} characters`
      )
    }

    if (rule.type === 'email') {
      schema = schema.email('* Invalid email address')
    }
  }

  requiredFields[fieldsData.name] = schema
}

const validationSchema = Yup.object({ ...requiredFields })

export function DynamicForm() {
  return (
    <div>
      <h1>DynamicForm</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => console.log({ values })}
      >
        {(_formik) => (
          <Form noValidate>
            {formJson.map(({ label, name, placeholder, type, options }) => {
              if (['text', 'email', 'password'].includes(type)) {
                return (
                  <MyInput
                    key={name}
                    label={label}
                    name={name}
                    placeholder={placeholder}
                    type={type as 'text' | 'email' | 'password'}
                  />
                )
              } else if (type === 'select') {
                return (
                  <MySelect
                    key={name}
                    label={label}
                    name={name}
                    type={type as 'select'}
                  >
                    <option value=''>Select an option</option>
                    {options?.map(({ id, label }) => (
                      <option key={id} value={id}>
                        {label}
                      </option>
                    ))}
                  </MySelect>
                )
              } else {
                return <span>Type: {type} is not supported</span>
              }
            })}
            <button className='btn btn-primary' type='submit'>
              Save
            </button>
          </Form>
        )}
      </Formik>
    </div>
  )
}
