import { useState, useEffect } from "react"
import { v4 } from "uuid"
import ContactsList from "./ContactsList"
import styles from "./Contacts.module.css"

function Contacts() {

    const [contacts, setContacts] = useState([])
    const [alert, setAlert] = useState("")
    const [deleteAlert, setDeleteAlert] = useState("")
    useEffect(() => {
        if (deleteAlert) {setTimeout (() => {setDeleteAlert("")}, 3000);}
    })

    const [contact, setContact] = useState({
        id: "",
        name: "",
        lastName: "",
        email: "",
        phone: "",
    })

    const changeHandler = event => {
        const name = event.target.name
        const value = event.target.value
        setContact((contact)=> ({...contact, [name]: value}))
    }

    const addHandler = () => {
        if (!contact.name || !contact.lastName || !contact.email || !contact.phone) {
            setAlert("Please enter valid data!");
            return;
        } else {setAlert("")}

        const newContact = {...contact, id: v4()}
        setContacts(contacts => [...contacts, newContact]);
        setContact(
            {
                name: "",
                lastName: "",
                email: "",
                phone: "",
            }
        )
    }

    const deleteHandler = id => {

        if (deleteHandler) {setDeleteAlert("Contact deleted successfuly!")} else {setDeleteAlert("")}

        const newContacts = contacts.filter((contact) => contact.id !== id);
        setContacts(newContacts);
    }

    const editHandler = () => {console.log("edit");}



  return (
    <div className={styles.container}>
        <div className={styles.form}>
            <input type="text" placeholder="Name" name="name" value={contact.name} onChange={changeHandler}/>
            <input type="text" placeholder="Last Name" name="lastName" value={contact.lastName} onChange={changeHandler}/>
            <input type="email" placeholder="Email" name="email" value={contact.email} onChange={changeHandler}/>
            <input type="number" placeholder="Phone" name="phone" value={contact.phone} onChange={changeHandler}/>
            <button onClick={addHandler}>Add Contact</button>
        </div>
        <div className={styles.alert}>
            {alert && <p>{alert}</p>}
            {/* age alert truthy bud yani matni dakhelesh bud bia ye tag p bzar va matne alert tush neshun bde
            age alert nadashte bashim yani age reshteye khali bashe falthy mishe dg hich etefaghi nmiofte */}
            {deleteAlert && <span>{deleteAlert}</span>}
        </div>
        <ContactsList contacts={contacts} editHandler={editHandler} deleteHandler={deleteHandler} contact={contact}/>
    </div>
  )
}

export default Contacts