import { Form, Formik, Field } from 'formik'
import { Button, Input } from '../../lib'
import * as T from './todo-list.type'
import * as F from './todo-list.form'
import { useSiteState } from '../context'
import { useEffect } from 'react'

const TodoList = () => {
  const { state, dispatch } = useSiteState() as any

  const { list = [] } = state as T.TodoList

  useEffect(() => {
    dispatch({
      type: 'ADD',
      todo: { id: 22, title: 'This is going to be awesome', completed: false },
    })
    dispatch({
      type: 'REMOVE',
      todo: { id: 22 },
    })
    dispatch({
      type: 'TOGGLE',
      todo: { id: 2 },
    })
  }, [])

  // const list = Array.isArray(data) ? data : []
  const uncompleteList = list.filter(({ completed }) => !completed)
  const completeList = list.filter(({ completed }) => completed)

  const saveTodo = (values: T.ToDo) => {
    console.log('Saving a todo', values)
  }

  return (
    <div>
      <Formik
        initialValues={F.initialValues}
        validationSchema={F.validationSchema}
        onSubmit={saveTodo}
      >
        {({ isValid }) => (
          <Form>
            <Field type="text" as={Input} name="title" />

            <Button disabled={!isValid} type="submit">
              Add to-do
            </Button>
          </Form>
        )}
      </Formik>

      <div>
        {uncompleteList.map(({ title }, k) => (
          <h1 key={k}>{title}</h1>
        ))}
      </div>

      <div>
        {completeList.map(({ title }, k) => (
          <h1 key={k}>
            <s>{title}</s>
          </h1>
        ))}
      </div>
    </div>
  )
}

export default TodoList