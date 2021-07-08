// axios
//   .get('https://api.weatherstack.com/current')
//   .then(data => console.log(data))

// getNumber().then(num => console.log(num))
// getNumber().then(num => console.log(num))

//

// const repo = {
//   saveSync (data) {
//     try {
//       localStorage.setItem('some-key', JSON.stringify(data))
//     } catch (error) {
//       return false
//     }
//     return true
//   },
//   saveAsync (data) {
//     const promise = new Promise((resolve, reject) => {
//       try {
//         localStorage.setItem('some-key', JSON.stringify(data))
//         resolve()
//       } catch (error) {
//         return reject(error)
//       }
//     })
//     return promise
//   }
// }

// const promise = repo.saveAsync({ name: 'IT-KAMASUTRA' })
// promise
//   .then(() => {
//     console.log('async saved')
//   })
//   .catch(error => {
//     console.log('not saved' + error)
//   })

// const run = async data => {
//   await repo.saveAsync({ name: data })
//   console.log('saved async await')
// }

// run('IT-AWAIT!!!')

//

function waits (timer) {
  const promise = new Promise((res, rej) => {
    setTimeout(() => {
      res()
    }, timer)
  })
  return promise
}

async function count () {
  await waits(1000).then(() => {
    console.log('resolved')
  })
  console.log('1')
  await waits(1000).then(() => {
    console.log('resolved')
  })
  console.log('2')
  await waits(1000).then(() => {
    console.log('resolved')
  })
  console.log('3')
}

count()

// let promise1 = axios.get('https://api.weatherstack.com/current')

// let promise3 = axios.get(
//   'http://api.rottentomatoes.com/api/public/v1.0/lists/movies/box_office.json'
// )

// let promise2 = axios.get('https://api.weatherstack.com/current')

// promise1
//   .then(data => {
//     console.log(data)
//   })
//   .catch(error => {
//     console.log('error is...' + error)
//   })
//   .finally(() => {
//     console.log('finally')
//   })

// let anotherPromise1 = Promise.all([promise1, promise2])

// anotherPromise1
//   .then(result => console.log(result))
//   .catch(() => {
//     console.log('initialization failed')
//   })

// let anotherPromise2 = Promise.allSettled([promise1, promise2, promise3])

// anotherPromise2.then(results => {
//   console.log(results)
// })

// const resolvedPromise = Promise.resolve([1, 2, 3])

// resolvedPromise.then(data => {
//   console.log(data)
// })

// const rejectedPromise = Promise.reject({ message: 'some error' })

// rejectedPromise.catch(e => {
//   console.log(e)
// })
