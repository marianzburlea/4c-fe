import { Form, Formik, Field } from 'formik'
import { Button, Flex, Input, Item } from '../../lib'
import * as T from './todo-list.type'
import * as F from './todo-list.form'
import { action, useSiteState } from '../context'

const TodoList = () => {
  const { state, dispatch } = useSiteState() as any

  const { list = [] } = state as T.TodoList

  const uncompleteList = list
    .filter(({ completed }) => !completed)
    .sort((a, b) => (a?.timestamp || 0) - (b?.timestamp || 0))
  const completeList = list
    .filter(({ completed }) => completed)
    .sort((a, b) => (a?.timestamp || 0) - (b?.timestamp || 0))

  const saveTodo = ({ title }: T.ToDo, { resetForm }: T.FormExtra) => {
    dispatch(action.addAction(title))
    resetForm()
  }

  const toggle = (timestamp: number) => {
    dispatch(action.toggleAction(timestamp))
  }

  return (
    <Flex direction="column" gap={64} padding={32} bgc="yellow">
      <Formik
        initialValues={F.initialValues}
        validationSchema={F.validationSchema}
        onSubmit={saveTodo}
        enableReinitialize
      >
        {({ isValid, errors, touched }) => (
          <Form>
            <Flex gap={16}>
              <Field
                type="text"
                as={Input}
                name="title"
                label="What are you planning to do?"
                error={errors.title}
                touched={touched.title}
                placeholder="Write a to-do"
              />
              <Button disabled={!isValid} type="submit" bgc="red">
                Add to-do
              </Button>
            </Flex>
          </Form>
        )}
      </Formik>

      <Flex direction="column" gap={8}>
        {uncompleteList.map(({ title, timestamp = 0 }, k) => (
          <Item key={k} itemId={timestamp} onClick={() => toggle(timestamp)}>
            {title}
          </Item>
        ))}
      </Flex>

      <Flex direction="column" gap={8}>
        {completeList.map(({ title, timestamp = 0, completed }, k) => (
          <Item
            key={k}
            itemId={timestamp}
            onClick={() => toggle(timestamp)}
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
