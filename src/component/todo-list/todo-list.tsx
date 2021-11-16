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

  const saveTodo = ({ title }: T.ToDo, { resetForm }: T.FormExtra) => {
    dispatch(action.addAction(title))
    resetForm()
  }

  const toggle = (id: number) => {
    console.log('toogle', id)
    dispatch(action.toggleAction(id))
  }

  return (
    <Flex direction="column" gap={32} padding={32} bgc="yellow">
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
                error={errors.title}
                touched={touched.title}
              />
              <Button disabled={!isValid} type="submit" bgc="red">
                Add to-do
              </Button>
            </Flex>
          </Form>
        )}
      </Formik>

      <Flex direction="column" gap={8}>
        {uncompleteList.map(({ title, id = 0 }, k) => (
          <Item key={k} itemId={id} onClick={() => toggle(id)}>
            {title}
          </Item>
        ))}
      </Flex>

      <Flex direction="column" gap={8}>
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
