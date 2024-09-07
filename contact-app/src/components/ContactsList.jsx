import styles from "./ContactsList.module.css"
import ContactItem from "./ContactItem"
import SearchList from "./SearchList.jsx"
import {useState } from "react"

function ContactsList({contacts, deleteHandler, contact, editHandler}) {

  const [query, setQuery] = useState("")
  const clearHandler = (e) => {setQuery(""); e.preventDefault()}
  const filteredContacts = Object.values(contacts).filter((user) => ( (user.name.toLowerCase().includes(query)) || (user.lastName.toLowerCase().includes(query)) || (user.email.toLowerCase().includes(query)) ))

  return (
    <div className={styles.container}>

      <div className={styles.listHeader}>
          <h3>Contacts List</h3>
          <div>
           <input className="searchBox" type="text" placeholder="search contact ..." onChange={(e) => setQuery(e.target.value)}/>
           <button className="searchButton" onClick={clearHandler} >Clear</button>
          </div>
      </div>

      <div>
        {query !== "" ? (
          <ul className={styles.contacts}>
           {filteredContacts.map((contact) => ( <SearchList key={contact.id} data={contact} contacts={contacts} deleteHandler={deleteHandler} editHandler={editHandler} /> ))}
          </ul>
        ) : (
          contacts.length ? ( 
            <ul className={styles.contacts}>
              {contacts.map((contact) => ( <ContactItem key={contact.id} data={contact} deleteHandler={deleteHandler} editHandler={editHandler} /> ))}
            </ul> ) : (
            <p className={styles.message}>No Contacts Yet!</p> )
        )}
      </div>
    </div>
  )
}

export default ContactsList


