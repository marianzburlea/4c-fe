import { Form, Formik, Field } from 'formik'
import { Button, Flex, Input, Item } from '../../lib'
import * as T from './todo-list.type'
import * as F from './todo-list.form'
import { action, useSiteState } from '../context'

const TodoList = () => {
  const { state, dispatch } = useSiteState() as any

  const { list = [] } = state as T.TodoList

  const uncompleteList = list.filter(({ completed }) => !completed)
  const completeList = list.filter(({ completed }) => completed)

  const saveTodo = ({ title }: T.ToDo) => {
    dispatch(action.addAction(title))
  }

  const toggle = (id: number) => {
    console.log('toogle', id)
    dispatch(action.toggleAction(id))
  }

  return (
    <Flex direction="column" gap={32} padding={32}>
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

      <Flex direction="column" gap={12}>
        {uncompleteList.map(({ title, id = 0 }, k) => (
          <Item key={k} itemId={id} onClick={() => toggle(id)}>
            {title}
          </Item>
        ))}
      </Flex>

      <Flex direction="column" gap={12}>
        {completeList.map(({ title, id = 0, completed }, k) => (
          <Item
            key={k}
            itemId={id}
            onClick={() => toggle(id)}
            completed={completed}
          >
            {title}
          </Item>
        ))}
      </Flex>
    </Flex>
  )
}

export default TodoList
