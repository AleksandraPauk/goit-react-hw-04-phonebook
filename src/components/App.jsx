import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export const App = () => {
  const [filter, setFilter] = useState('');
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem('contacts'));
  });

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleAddContact = contactData => {
    const id = nanoid();
    const newContact = { id, ...contactData };
    setContacts(prev => {
      return [...prev, newContact];
    });
  };

  const handleFilter = event => {
    setFilter(event.target.value);
  };

  const handleFilteredContacts = () => {
    return contacts.filter(({ name }) => {
      return name.toLowerCase().includes(filter.toLowerCase());
    });
  };

  const filteredContacts = handleFilteredContacts();

  const handleDelete = id => {
    setContacts(prev => {
      const contactListAfterDelete = prev.filter(contact => contact.id !== id);
      return contactListAfterDelete;
    });
  };

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm handleAddContact={handleAddContact} contacts={contacts} />
      <h2>Contacts</h2>
      <Filter filter={filter} onChange={handleFilter} />
      <ContactList handleDelete={handleDelete} contacts={filteredContacts} />
    </>
  );
};
