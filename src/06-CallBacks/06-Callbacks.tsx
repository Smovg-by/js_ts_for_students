// const callback = () => {
//   alert('Hey')
// }
//
// window.setTimeout(callback, 1000)



export function User() {

  const deleteUser = () => {
    alert('deleteUser')
  }

  const saveUser = () => {
    alert('saveUser')
  }

  return (
    <div>
      <span>Dimych</span>
      <button onClick={deleteUser}>delete</button>
      <button onClick={saveUser}>save</button>
    </div>
  )
}

// import {
//   ChangeEvent,
//   MouseEvent
// } from 'react';
//
// export function User() {
//
//   const clicker = (event: MouseEvent<HTMLButtonElement>) => {
//     alert('mouse clicked  ' + event.currentTarget)
//   }
//
//   const inputData = (event: ChangeEvent<HTMLInputElement>) => {
//     alert('inputData changed  '  + event.currentTarget)
//   }
//
//   return (
//     <div>
//       <span>Dimych</span>
//       <button onClick={clicker}>delete</button>
//       <input type="number" onChange={inputData}>save</input>
//     </div>
//   )
// }
