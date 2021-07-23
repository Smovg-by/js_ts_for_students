//
// литерал объекта
//
const deleteUser = userId => {
  const action = {
    type: 'DELETE_USER',
    payload: {
      userId: userId
    }
  }
  return action
}
// объект с методом
const userFabric = name => {
  const user = {
    name: name,
    site: 'mail.ru',
    dateOfBirth: new Date(1986, 24, 4),
    hello () {
      console.log(`I am ${this.name} from ${this.site}`)
    }
  }
}

const user1 = userFabric('Kolya')
const user2 = userFabric('Vasya')

// также можно вынести функцию отделюно и вызывать ее от имени объекта

function commonHello () {
  console.log(`I am ${this.name} from ${this.site}`)
}

const userFabricWithCommonFunction = name => {
  const user = {
    name: name,
    site: 'mail.ru',
    dateOfBirth: new Date(),
    hello: commonHello
  }
  return user
}

const user3 = userFabricWithCommonFunction('John')
const user4 = userFabricWithCommonFunction('Stan')

user3.hello() // I am John from mail.ru
user4.hello() // I am Stan from mail.ru
