import React, { useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = ({ onContact, contacts }) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const isDuplicateName = (contactName) => {
    return contacts.some((contact) => contact.name === contactName);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(contacts);

    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
    if (isDuplicateName(name)) {
      return alert("Already in Contacts!");
    }

    const newContact = { name, phone, email };

    onContact(newContact);

    setName("");
    setPhone("");
    setEmail("");
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */

  return (
    <div>
      <section>
        <h2>Add Contact</h2>{" "}
        <ContactForm
          name={name}
          setName={setName}
          email={email}
          setEmail={setEmail}
          phone={phone}
          setPhone={setPhone}
          handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
      </section>
    </div>
  );
};
