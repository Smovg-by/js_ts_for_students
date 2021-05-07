// type PropsType = {
//   name: string
//   age: number
//   lessons: Array<LessonsType>
//   address: StreetType
// }
//
// type LessonsType = {
//   title: string
// }
//
// type StreetTitleType = {
//   title: string
// }
//
// type StreetType = {
//   street: StreetTitleType
// }

// типы данных можно и так обозначить
export type ManType =
  {
    name: string
    age: number
    lessons: Array<{ title: string }>
    address: {
      street: {
        title: string
      }
    }
  }


let props: ManType

beforeEach(() => {
  props = {
    name: 'Dimych',
    age: 32,
    lessons: [
      {title: '1'}, {title: '2'}
    ],
    address: {
      street: {
        title: 'Nezavisimosti str'
      }
    }
  }
})


test('Should pass the test1', () => {


  // const age = man.age
  // const lessons = man.lessons

  let {age, lessons} = props

  expect(age).toBe(32)
  expect(lessons.length).toBe(2)

})

test('Should pass the test2', () => {


})

test('Should pass the test3', () => {

  const lesson1 = props.lessons[0]
  const lesson2 = props.lessons[1]

  expect(lesson1.title).toBe('1')
  expect(lesson2.title).toBe('2')

})

