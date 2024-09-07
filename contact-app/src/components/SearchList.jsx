import styles from "./SearchList.module.css"
import { useState } from "react"


function SearchList({contacts, contactItem, deleteHandler, editHandler, data: {id, name, lastName, email, phone}}) {


  return (
  <>  
      <p className={styles.topic}>Search list</p>
      <li className={styles.item}>
            <p> <span>🆔</span> {name} {lastName} </p>
            <p>
              <span>📥</span>{email}
            </p>
            <p>
              <span>📞</span>
              {phone}
            </p>
            <button onClick={() => editHandler(id)} >✏️</button>
            <button onClick={() => deleteHandler(id)} >🗑️</button>
      </li>
  </>
  )
}

export default SearchList


