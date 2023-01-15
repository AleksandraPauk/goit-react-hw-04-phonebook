import { nanoid } from 'nanoid';
import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const contacts =
      JSON.parse(localStorage.getItem('contacts')) || this.state.contacts;
    this.setState({ contacts });
  }

  componentDidUpdate(_, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  handleAddContact = contactData => {
    const id = nanoid();
    const newContact = { id, ...contactData };
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  handleFilter = event => {
    this.setState({
      filter: event.target.value,
    });
  };

  handleFilteredContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(({ name }) => {
      return name.toLowerCase().includes(filter.toLowerCase());
    });
  };

  handleDelete = id => {
    this.setState(prevState => {
      const contactListAfterDelete = prevState.contacts.filter(
        contact => contact.id !== id
      );
      return { contacts: contactListAfterDelete };
    });
  };

  render() {
    const { filter, contacts } = this.state;
    const filteredContacts = this.handleFilteredContacts();
    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm
          handleAddContact={this.handleAddContact}
          contacts={contacts}
        />
        <h2>Contacts</h2>
        <Filter filter={filter} onChange={this.handleFilter} />
        <ContactList
          handleDelete={this.handleDelete}
          contacts={filteredContacts}
        />
      </>
    );
  }
}
