import React from 'react'

function List() {
  return (
    <div>
      <ul>
        {useer.map((item, index) =>(
            <li key ={index} >
                firstname: {item.firstName} lastname: {item.lastName}

            </li>
        ))}
      </ul>
    </div>
  )
}

export default List
