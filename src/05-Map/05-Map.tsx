type peopleType = {
  name: string
  age: number
};

const people: Array<peopleType> = [
  {name: 'Andrew Ivanov', age: 33},
  {name: 'Alexandr Petrov', age: 24},
  {name: 'Dmitry Sidorov', age: 18},
];

const DimychTransformator = (man: peopleType) => {
  return {
    stack: ['css, html', 'js', 'tdd', 'react'],
    firstName: man.name.split(' ')[0],
    lastName: man.name.split(' ')[1]
  }
}

const devs = [
  {
    stack: ['css, html', 'js', 'tdd', 'react'],
    firstname: 'Andrew', lastName: 'Ivanov'
  },
  {
    stack: ['css, html', 'js', 'tdd', 'react'],
    firstname: 'Alexandr', lastName: 'Petrov'
  },
  {
    stack: ['css, html', 'js', 'tdd', 'react'],
    firstname: 'Dmitry', lastName: 'Sidorov'
  },
]

const devs2 = people.map(DimychTransformator);

const devs3 = people.map((man: peopleType) => {
  return {
    stack: ['css, html', 'js', 'tdd', 'react'],
    firstName: man.name.split(' ')[0],
    lastName: man.name.split(' ')[1]
  }
});

const messages = people.map((man: peopleType) =>
  `Hello ${man.name.split(' ')[0]}!`
)

// У нас есть массив строк, нужно вернуть массив <li>


export function Names() {

  const namesArray = ['Dimych', 'Sveta', 'Katya']

  const liArray = namesArray.map((item) => {
    return (<li>{namesArray}</li>)
  })

  return (
    <div>
      <ul>
        {liArray}
      </ul>
    </div>
  )
}

//Лучше вписывать в каждую <li> индекс, который приходит из map

type Names2Type = {
  id: number
  name: string
}

function Names2() {

  const namesArray2 = [
    {
      id: 1,
      name: 'Mike'
    },
    {
      id: 1,
      name: 'John'
    },
    {
      id: 1,
      name: 'Stan'
    }
  ]

  const liNamesArray2 = namesArray2.map((item: Names2Type, index: number) => {
    return <li key={item.id}>{index} --- {item.name}</li>
  })

  return (
    <div>
      <ul>
        {liNamesArray2}
      </ul>
    </div>
  )

}

