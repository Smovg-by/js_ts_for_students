//
// класс
//
class DeleteUserActionClass {
  constructor (userId) {
    this.type = 'DELETE_USER'
    this.payload = {
      userId: userId
    }
  }
}

const action4 = new DeleteUserActionClass('654')
const action5 = new DeleteUserActionClass('325')

// объект с методом

class User {
  constructor (name, site, dob) {
    this.name = name
    this.site = site
    this.dateOfBirth = dob
  }
  // методы выносятся из конструктора,
  // чтобы они не создавались каждый раз заново
  hello () {
    console.log(`I am ${this.name} from ${this.site}`)
  }
}

const user1 = new User('John', 'yandex.ru', '24.04.1986')
const user2 = new User('Mike', 'cnn.com', '25.05.1990')

user1.hello() // I am John from yandex.ru
user2.hello() // I am Mike from cnn.com

// создадим объект с counter

class UserWithCounter {
  #name = ''

  constructor (name, site, dob) {
    this.#name = name
    this.site = site
    this.dateOfBirth = dob
    this.counter = 0
  }

  _incapsulatedValue = 10

  hello () {
    this.counter++
    console.log('Counter is...' + this.counter)
    console.log(`I am ${this.#name} from ${this.site}`)
  }
}

const UserWithCounter1 = new UserWithCounter('John', 'yandex.ru', '24.04.1986')
const UserWithCounter2 = new UserWithCounter('Mike', 'cnn.com', '25.05.1990')

// наследование

class CoderUser extends UserWithCounter {
  constructor (name, site, dob, tech) {
    super(name, site, dob) // берем все поля родительского класса
    this.tech = tech
  }

  code () {
    console.log(`I am ${this.#name}, here is my ${this.tech} code: code... `)
  }

  hello () {
    super.hello()
    console.log('Go away!')
  }
}

const coder1 = new CoderUser('Mi', 'cnn1.com', '11.11.1990', 'JS')

// ПОЛИМОРФИЗМ

const users = [UserWithCounter1, coder1]

users.forEach(item => item.hello())
//
// REACT
//

class ProfilePage extends React.Component {
  constructor (props) {
    super(props) // наследуем свойства родительского класса
  }
  render () {
    return 'IT kamasutra subscribe!'
  }
}

// <ProfilePage/> react создает объект const obj = new ProfilePage
// obj.render() реакт вызываем метод render()
