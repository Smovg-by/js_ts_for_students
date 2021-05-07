import {mult, splitIntoWords, sum} from './01'

//Можно выносить переменные вне тестов, например

let a = 1;
let b = 2;
let c = 3;

//перед выподнением теста можно запускать call-back функцию

beforeEach(()=>
{
  a = 1;
  b =2;
  c =3
})



test('sum should be correct', () => {
  // starting data
  const a = 1;
  const b = 2;
  const c = 3;
  // action
  const result1 = sum(a, b);
  const result2 = sum(b, c);
  //expect result
  expect(result1).toBe(3);
  expect(result2).toBe(5);
})

test('Multiply should be correct', () => {
  //data
  const a = 1;
  const b = 2;
  const c = 3;
  //action
  const result3 = mult(a, b);
  const result4 = mult(b, c);
  //expect  result
  expect(result3).toBe(2);
  expect(result4).toBe(6);

})

test('splitting into words should be correct', () => {
  //data
  const sent1 = "hello my friend"
  const sent2 = "JS programming language"
  //action
  const result5 = splitIntoWords(sent1);
  const result6 = splitIntoWords(sent2);
  //expect result
  expect(result5.length).toBe(3);
  expect(result5[0]).toBe('hello')
  expect(result5[1]).toBe('my')
  expect(result5[2]).toBe('friend')

  expect(result6.length).toBe(3);
  expect(result6[0]).toBe('js')
  expect(result6[1]).toBe('programming')
  expect(result6[2]).toBe('language')

})