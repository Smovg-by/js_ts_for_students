//
// функция-конструктор
//
function DeleteUserAction (userId) {
  // создается(определяется) пустой this = {}
  this.type = 'DELETE_USER'
  this.payload = {
    userId: userId
  }
  // return писать не надо!!!
}

// объект с методом

function User (name, site, dob) {
  ;(this.name = name), (this.site = site), (this.dateOfBirth = dob)
}
// закинем функцию в прототип, чтобы она не создавалась
// каждый раз заново. Т.е. добавим ее к прототипу, а значит
// она появится у всех экземпляров прототипа
User.prototype.hello = function () {
  console.log(`I am ${this.name} from ${this.site}`)
}

const user1 = new User('John', 'yandex.ru', '24.04.1986')
const user2 = new User('Mike', 'cnn.com', '25.05.1990')

user1.hello() // I am John from yandex.ru
user2.hello() // I am Mike from cnn.com
