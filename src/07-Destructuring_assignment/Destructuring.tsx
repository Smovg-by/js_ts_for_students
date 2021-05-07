import {ManType} from './07_Destructuring_assignment.test';
import React, {useState} from 'react';

type PropsType = {
  title: string
  man: ManType
}

// export const ManComponent: React.FC<PropsType> = ({title, man}) => {
//    return (
//     <div>
//       <h1>{title}</h1>
//       <hr/>
//       <div>
//         {man}
//       </div>
//
//     </div>
//   )
// }

// export const ManComponent: React.FC<PropsType> = (props) => {
//   const {title, man, ...resProps} = props
//   return (
//     <div>
//       <h1>{title}</h1>
//       <hr/>
//       <div>
//         {man}
//       </div>
//     </div>
//   )
// }

export const ManComponent: React.FC<PropsType> = (props) => {

  const [message, setMessage] = useState<string>('hello')

  return (
    <div>
      <h1>{message}</h1>
      <hr/>
      <div>

      </div>
    </div>
  )
}