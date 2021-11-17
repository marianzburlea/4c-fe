import { Form, Formik, Field } from 'formik'
import { Button, Flex, Input, Item, Title, Logo } from '../../lib'
import * as T from './todo-list.type'
import * as F from './todo-list.form'
import { action, useSiteState } from '../context'

const TodoList = ({ dataTestid }: T.TodoList) => {
  const { state, dispatch } = useSiteState() as any
  // console.log('######### state', state)

  const { list }: T.TodoList = state || {}

  const uncompleteList = (list || [])
    .filter(({ completed }) => !completed)
    .sort((a, b) => (a?.timestamp || 0) - (b?.timestamp || 0))
  const completeList = (list || [])
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
    <Flex
      direction="column"
      gap={64}
      padding={32}
      bgc="yellow"
      dataTestid={dataTestid}
    >
      <Flex gap={32}>
        <Logo height={48} width={48} src="/logo512.png" alt="ToDo List Logo" />

        <Title>
          Smart <b>To-Do</b> List
        </Title>
      </Flex>

      <Formik
        initialValues={F.initialValues}
        validationSchema={F.validationSchema}
        onSubmit={saveTodo}
        enableReinitialize
      >
        {({ isValid, errors, touched, dirty }) => (
          <Form>
            <Flex gap={16}>
              <Field
                type="text"
                as={Input}
                name="title"
                label="What are you planning to do?"
                error={errors.title}
                touched={touched.title}
                dirty={dirty}
                placeholder="Write a to-do"
              />

              <Button
                disabled={!isValid}
                type="submit"
                bgc="red"
                dataTestid={`${dataTestid}-submit`}
              >
                Add to-do
              </Button>
            </Flex>
          </Form>
        )}
      </Formik>

      <Flex direction="column" gap={8} grow={1}>
        {uncompleteList.map(({ title, timestamp = 0 }, k) => (
          <Item
            fullWidth
            key={k}
            itemId={timestamp}
            onClick={() => toggle(timestamp)}
          >
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
            fullWidth
          >
            {title}
          </Item>
        ))}
      </Flex>

      <footer>
        <Flex>
          <Logo
            width={48}
            height={48}
            src="/svg/wow-dop.svg"
            alt="WoW DoP - Deliver On Promise and Bring the WoW factor in!"
          />

          <Title tag="h4">
            WoW DoP - <b>Rocket-Boost</b> Projects Into the <b>Future</b>
          </Title>
        </Flex>
      </footer>
    </Flex>
  )
}

export default TodoList
