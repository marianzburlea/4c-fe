import { action } from '..'
import { todoReducer } from '../reducer'
import { AppData } from '../type'

const list = [
  {
    timestamp: 1637092237826,
    title: 'Second default uncomplete to-do item',
    completed: false,
  },
  {
    timestamp: 1637092227826, // time is 10 seconds lesser than the previous item
    title: 'Frist default uncomplete to-do item',
    completed: false,
  },
  {
    timestamp: 1637092247826,
    title: 'First default to-do item',
    completed: true,
  },
]

describe('Render the to-do list component', () => {
  let state = {
    list,
  }

  beforeEach(() => {
    state = {
      list,
    }
  })
  it('should add', () => {
    const title = 'super start'
    const ac = action.addAction(title)
    let result

    result = todoReducer(state, ac)
    expect(result.list?.length).toBe(4)

    result = todoReducer(result, ac)
    expect(result.list?.length).toBe(5)
  })

  it('should do nothing', () => {
    const result = todoReducer(state, { type: 'other' })
    expect(result.list?.length).toBe(3)
  })

  it('should remove', () => {
    const rm = todoReducer(state, action.removeAction(state.list[0].timestamp))
    expect(rm.list?.length).toBe(2)
  })

  it('should update', () => {
    const title = 'once upon a time'
    const up = todoReducer(
      state,
      action.updateAction(state.list[0].timestamp, title)
    )
    expect(up.list[0].title).toEqual(title)
  })

  it('should default', () => {
    const up = todoReducer(undefined, {})
    expect(up.list.length).toEqual(3)
  })

  it('should toggle', () => {
    const title = 'once upon a time'
    const up = todoReducer(state, action.toggleAction(state.list[0].timestamp))

    expect(up.list[0].completed).toBeTruthy()
  })
})
