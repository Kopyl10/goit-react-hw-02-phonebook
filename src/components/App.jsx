import React, { useState } from 'react';
import { nanoid } from 'nanoid';

export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [name, setName] = useState('');

  const handleChange = e => {
    setName(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    const newContact = {
      id: nanoid(),
      name: name.trim(),
    };

    setContacts(prev => [...prev, newContact]);
    setName('');
  };

  return (
    <div style={{ padding: '30px' }}>
      <h1>Phonebook</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces."
          required
        />
        <button type="submit">Add Contact</button>
      </form>

      <h2>Contacts</h2>
      <ul>
        {contacts.map(contact => (
          <li key={contact.id}>{contact.name}</li>
        ))}
      </ul>
    </div>
  );
};
