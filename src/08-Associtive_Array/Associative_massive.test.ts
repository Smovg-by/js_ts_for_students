type UsersType = {
  [key: string]: { id: number, name: string }
}
let users: UsersType = {}

beforeEach(() => {
  users = {
    '101': {id: 101, name: 'Dimych'},
    '1201': {id: 1201, name: 'Nat'},
    '1101': {id: 1101, name: 'Val'},
    '201': {id: 201, name: 'Kate'},
  }
})

test('Should update corresponding user', () => {
  users['201'].name = 'Ekaterina'
  expect(users['201'].name).toBe('Ekaterina')
})

test('Should be equal structure', () => {
    users['201'].name = 'Ekaterina'
    expect(users['201']).toEqual({
      id: 201,
      name: 'Ekaterina'
    })
  }
)

test('Should delete corresponding user', () => {
    delete users["201"]
    expect(users['201']).toBeUndefined()
  }
)