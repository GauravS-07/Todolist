import React from 'react'
import { faPenToSquare, faTrashAlt } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



export const Todo = ({task}) => {
  return (
    <div className='Todo'>
      <p>{task.task}</p>
      <div>
        <FontAwesomeIcon icon={faPenToSquare}/>
        <FontAwesomeIcon icon={faTrashAlt}/>
      </div>
    </div>
  )
}

