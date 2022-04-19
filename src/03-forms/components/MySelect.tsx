import { ErrorMessage, useField } from 'formik'

interface Props {
  label: string
  name: string
  [x: string]: any
}

export function MySelect({ label, ...props }: Props) {
  // const [field, meta] = useField({ ...props, type: 'select' })
  const [field] = useField({ ...props, type: 'select' })

  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <select {...field} {...props} />
      <ErrorMessage component='span' name={props.name} />
      {/* {meta.touched && meta.error && (
        <span className='error'>{meta.error}</span>
      )} */}
    </>
  )
}
