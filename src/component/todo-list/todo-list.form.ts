import * as yup from 'yup'

export const initialValues = {
  title: '',
}

export const validationSchema = yup.object().shape({
  title: yup
    .string()
    .min(5, 'A great to-do task deserves a great name, of minimum 5 characters')
    .required(),
})
