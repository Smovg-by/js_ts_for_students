import {
  addBook,
  moveUserToAnotherHouse,
  removeBook,
  replaceBooks,
  user,
  addCompany,
  replaceCompany,
  companies,
  upadteCompany
} from './10_01'
import { makeHairStyle, moveUser, upgradeUserLaptop } from './10_01'
//
//
// ----------Поверхностная копия ОБЪЕКТА (shallow copy) в функции
//
//
test('01_reference type test', () => {
  const awesomeUser = makeHairStyle(user, 2)

  expect(user.hair).toBe(32)
  expect(awesomeUser.hair).toBe(16)
})
//
//
// ----------Изменение вложенных свойств ОЪЕКТА
//
//
test('02_change address', () => {
  const movedUser = moveUser(user, 'Kiev')

  expect(user).not.toBe(movedUser)
  expect(user.address).not.toBe(movedUser.address)
  expect(user.laptop).toBe(movedUser.laptop)
  expect(movedUser.address.city).toBe('Kiev')
})
//
//
// ----------Изменение вложенных свойств ОБЪЕКТА(ТЕНИРОВКА)
//
//
test('03_upgrade laptop to macbook', () => {
  const upgradedLaptopUser = upgradeUserLaptop(user, 'Macbook')

  expect(user).not.toBe(upgradedLaptopUser)
  expect(user.laptop).not.toBe(upgradedLaptopUser.laptop)
  expect(user.address).toBe(upgradedLaptopUser.address)
  expect(upgradedLaptopUser.laptop.title).toBe('Macbook')
  expect(user.laptop.title).toBe('Zenbook')
  expect(user.laptop.screen).toBe(17)
})

//
//
// ----------Изменение вложенных свойств ОБЪЕКТА(ТЕНИРОВКА)
//
//
test('04_move user to another house', () => {
  const changedUserHouse = moveUserToAnotherHouse(user, 15)

  expect(user).not.toBe(changedUserHouse)
  expect(user.laptop).toBe(changedUserHouse.laptop)
  expect(user.books).toBe(changedUserHouse.books)
  expect(user.address.house).toBe(12)
  expect(changedUserHouse.address.house).toBe(15)
  expect(user.address).not.toBe(changedUserHouse.address)
})
//
//
// ----------Изменение вложенных свойств МАССИВА(ДОБАВЛЕНИЕ)
//
//
test("05_add books to a user's book list", () => {
  const addedBookUser = addBook(user, ['Redux', 'Java', 'Alphabet'])

  expect(user).not.toBe(addedBookUser)
  expect(user.laptop).toBe(addedBookUser.laptop)
  expect(user.address).toBe(addedBookUser.address)
  expect(user.books).not.toBe(addedBookUser.books)
  expect(user.books.length).not.toBe(addedBookUser.books.length)
  expect(user.books.length).toBe(4)
  expect(addedBookUser.books.length).toBe(7)
})
//
//
// ----------Изменение вложенных свойств МАССИВА(ИЗМЕНЕНИЕ одного элемента массива)
//
//
test('06_replace books with another books array', () => {
  const replacedBookUser = replaceBooks(user, 'js', 'ts')

  expect(user).not.toBe(replacedBookUser)
  expect(user.laptop).toBe(replacedBookUser.laptop)
  expect(user.address).toBe(replacedBookUser.address)
  expect(user.books.length).toBe(replacedBookUser.books.length)
  expect(user.books.length).toBe(4)
  expect(replacedBookUser.books.length).toBe(4)
  expect(user.books).not.toBe(replacedBookUser.books)
})
//
//
// ----------Изменение вложенных свойств МАССИВА(ИЗМЕНЕНИЕ одного элемента массива)
//
//
test('07_remove one book from the array', () => {
  const removeBookUser = removeBook(user, 'js')

  expect(user).not.toBe(removeBookUser)
  expect(user.laptop).toBe(removeBookUser.laptop)
  expect(user.address).toBe(removeBookUser.address)
  expect(user.books.length).not.toBe(removeBookUser.books.length)
  expect(user.books.length).toBe(4)
  expect(removeBookUser.books.length).toBe(3)
  expect(user.books).not.toBe(removeBookUser.books)
})
//
//
// ----------Изменение вложенных свойств МАССИВА(добавление объекта в массив)
//
//
test('08_add an object to an array', () => {
  const addCompanyUser = addCompany(user, { id: 4, title: 'Peri' })

  expect(user).not.toBe(addCompanyUser)
  expect(user.laptop).toBe(addCompanyUser.laptop)
  expect(user.address).toBe(addCompanyUser.address)
  expect(user.books.length).toBe(addCompanyUser.books.length)
  expect(user.companies).not.toBe(addCompanyUser.companies)
  expect(user.companies.length).toBe(3)
  expect(addCompanyUser.companies.length).toBe(4)
})
//
//
// ----------Изменение вложенных свойств МАССИВА(добавление объекта в массив)
//
//
test('09_replace comany name', () => {
  const replaceCompanyUser = replaceCompany(user, 2, 'Peri')

  expect(user).not.toBe(replaceCompanyUser)
  expect(user.laptop).toBe(replaceCompanyUser.laptop)
  expect(user.address).toBe(replaceCompanyUser.address)
  expect(user.books.length).toBe(replaceCompanyUser.books.length)
  expect(user.companies).not.toBe(replaceCompanyUser.companies)
  expect(user.companies.length).toBe(3)
  expect(replaceCompanyUser.companies.length).toBe(3)
  expect(user.companies[0].title).toBe('Epam')
  expect(replaceCompanyUser.companies[0].title).toBe('Epam')
  expect(replaceCompanyUser.companies[1].title).toBe('Peri')
})
//
//
// ----------Изменение вложенных свойств АССОЦИАТИВНГО МАССИВА
//
//
test('10_associative array modifying', () => {
  const updatedCompanyList = upadteCompany(companies, 'Igor', 2, 'Kamaz')

  expect(updatedCompanyList['Igor'][1].title).toBe('Kamaz')
  expect(companies['Igor'][1].title).toBe('Mzkt')
})
