import { Form, Formik, Field } from 'formik'
import { Button, Input } from '../../lib'
import { todoList } from './todo-list.data'
import * as T from './todo-list.type'
import * as F from './todo-list.form'

const TodoList = ({ data }: T.TodoList) => {
  const list = Array.isArray(data) ? data : todoList
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
        {uncompleteList.map((item, k) => (
          <h1 key={k}>To to list uncomplete item</h1>
        ))}
      </div>

      <div>
        {completeList.map((item, k) => (
          <h1 key={k}>
            <s>To to list complete item</s>
          </h1>
        ))}
      </div>
    </div>
  )
}

export default TodoList
