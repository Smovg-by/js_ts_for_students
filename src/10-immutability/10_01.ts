export type UserType = {
  name: string
  hair: number
  address: { city: string; house?: number }
  laptop: LaptopType
  books: Array<string>
  companies: Array<CompanyType>
}

export type LaptopType = {
  title: string
  screen?: number
}

export type CompanyType = {
  id: number
  title: string
}

///
///TEST OBJECT №1
///
export let user: UserType = {
  name: 'Dimych',
  hair: 32,
  address: {
    city: 'Minsk',
    house: 12
  },
  laptop: {
    title: 'Zenbook',
    screen: 17
  },
  books: ['css', 'html', 'js', 'react'],
  companies: [
    { id: 1, title: 'Epam' },
    { id: 2, title: 'Itransition' },
    { id: 3, title: 'ITincubator' }
  ]
}

///
///TEST OBJECT №2
///

type companiesPropsType = {
  [key: string]: Array<CompanyType>
}

export const companies: companiesPropsType = {
  Dimych: [
    { id: 1, title: 'Epam' },
    { id: 2, title: 'Peri' },
    { id: 3, title: 'Itransition' }
  ],
  Igor: [
    { id: 1, title: 'Maz' },
    { id: 2, title: 'Mzkt' },
    { id: 3, title: 'Doka' }
  ],
  Migel: [
    { id: 1, title: 'ISoft' },
    { id: 2, title: 'Science' },
    { id: 3, title: 'Incubator' }
  ]
}

//01_reference type test
export function makeHairStyle (item: UserType, power: number) {
  const copy = {
    ...item,
    hair: item.hair / 2
  }

  return copy
}

//02_change address
export function moveUser (user: UserType, city: string) {
  return {
    ...user,
    address: { ...user.address, city: city }
    // laptop свойтсва не добавяем, т.к. мы его не меняем
    // на него автоматически создастся ссылка
    // и React не будет рендерить эту часть
  }
}
// 03_upgrade laptop to macbook
export function upgradeUserLaptop (user: UserType, model: string) {
  return {
    ...user,
    laptop: { ...user.laptop, title: model }
  }
}

//04_move user to another house
export function moveUserToAnotherHouse (user: UserType, house: number) {
  return {
    ...user,
    address: { ...user.address, house: house }
  }
}

//'05_add book to a user's book list'
export function addBook (user: UserType, books: Array<string>) {
  return { ...user, books: [...user.books, ...books] }
}

//06_replace books with another books array
export function replaceBooks (
  user: UserType,
  toReplace: string,
  replacer: string
) {
  return {
    ...user,
    books: [
      ...user.books.map(item => {
        item === toReplace ? (item = replacer) : item
      })
    ]
  }
}
//07_remove one book from the array
export function removeBook (user: UserType, toRemove: string) {
  return {
    ...user,
    books: user.books.filter(i => i !== toRemove)
  }
}

//08_add an object to an array
export function addCompany (user: UserType, company: CompanyType) {
  return {
    ...user,
    companies: [...user.companies, company]
  }
}
//09_replace comany name
export function replaceCompany (
  user: UserType,
  toReplaceId: number,
  replaceComp: string
) {
  return {
    ...user,
    companies: [
      ...user.companies.map(i =>
        i.id === toReplaceId ? (i = { ...i, title: replaceComp }) : i
      )
    ]
  }
}
//10_associative array modifying
export function upadteCompany (
  companyList: companiesPropsType,
  guy: string,
  companyId: number,
  company: string
) {
  // Важно создать копию, иначе перезатрется исходный объект
  let companyCopy = { ...companyList }

  return {
    ...companyCopy,
    [guy]: companyCopy[guy] = companyCopy[guy].map(i =>
      i.id === companyId ? (i = { ...i, title: company }) : i
    )
  }
}
