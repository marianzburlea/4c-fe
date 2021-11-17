import { filterComplete } from '.'

describe('util list', () => {
  it('should filter lists', () => {
    const list = [
      {
        title: 'Second default uncomplete to-do item',
        completed: false,
      },
      {
        timestamp: 1637092227826, // time is 10 seconds lesser than the previous item
        title: 'Frist default uncomplete to-do item',
        completed: false,
      },
      {
        title: 'Third default uncomplete to-do item',
        completed: false,
      },
      {
        timestamp: 1637092247826,
        title: 'First default to-do item',
        completed: true,
      },
    ]

    const incomplete = filterComplete(list, false)

    expect(incomplete.length).toEqual(3)
    expect(incomplete[0].timestamp).toEqual(undefined)

    // @ts-ignore
    expect(filterComplete({}, false)).toEqual([])
  })
})
