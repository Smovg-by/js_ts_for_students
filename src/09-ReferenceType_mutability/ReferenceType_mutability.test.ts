// Парадигма функционального программирования не допускает изменения исходных объектов.
// Изменение объектов и их передача происходит по ссылке объекта. Нельзя просто присвоить значение объекта1 = оъект2 (так мы передаем ссылку reference type, соответственно все свойства будут меняться).

test.skip('OBJECT reference type test', () => {
  type UserType = {
    name: string
    age: number
  }

  function increaseAge (u: UserType) {
    u.age++
  }

  let user = {
    name: 'Dimych',
    age: 32
  }

  increaseAge(user)

  expect(user.age).toBe(33)
})

// Изменение массивов происходит так же, передача  по ссылке. Чтобы не изменять исходный массив нужно его скопировать!

test.skip('ARRAY test', () => {
  type UserType = {
    name: string
    age: number
  }

  let usersArray: Array<UserType> = [
    {
      name: 'Dimych',
      age: 32
    },

    {
      name: 'Mike',
      age: 35
    }
  ]

  let admins = usersArray

  admins.push({
    name: 'John',
    age: 18
  })

  expect(usersArray.length).toBe(3)
})

//Примитивы НЕ передаются по ссылке!

test.skip('VALUE type test', () => {
  let usersCount = 10

  let adminsCount = usersCount

  adminsCount++

  expect(usersCount).toBe(10)
  expect(adminsCount).toBe(11)
})

test.skip('.sort() array test', () => {
  let letters = ['b', 'c', 'a']

  letters.sort()

  expect(letters).toEqual(['a', 'b', 'c'])
})
