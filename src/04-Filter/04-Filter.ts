const ages = [18, 20, 22, 1, 100, 98, 14];

const agePredicate = (age: number) => {
  return age > 90;
}

const oldAges = ages.filter(agePredicate);

type CourseType = {
  title: string
  price: number
}

const courses = [
  {title: 'CSS', price: 110},
  {title: 'JS', price: 200},
  {title: 'React', price: 150},
];

const cheapPredicate = (course: CourseType) => {
  return course.price < 160
};

const cheapCourses = courses.filter(cheapPredicate);