import styles from "./ContactItem.module.css"


function ContactItem({data: {id, name, lastName, email, phone}, deleteHandler, editHandler}) {
  
 
  return (
    <>

      <li className={styles.item}>
            <p> <span>🆔</span> {name} {lastName}</p>
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

export default ContactItem