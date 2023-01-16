import { useState } from 'react';
import PropTypes from 'prop-types';

export const ContactForm = ({ handleAddContact, contacts }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const changeHandler = event => {
    switch (event.target.name) {
      case 'name':
        setName(event.target.value);
        break;
      case 'number':
        setNumber(event.target.value);
        break;
    }
  };

  const submitHandler = event => {
    event.preventDefault();
    const newContact = {
      name: name,
      number: number,
    };
    contacts.some(contact => contact.name === name)
      ? alert(`${name} is already in contacts`)
      : handleAddContact({ ...newContact });

    setName('');
    setNumber('');
  };

  return (
      <form onSubmit={submitHandler}>
        <label>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={changeHandler}
          />
        </label>
        <label>
          Number
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={changeHandler}
          />
        </label>
        <button>Add contact</button>
      </form>
  );
};

ContactForm.propTypes = {
  handleAddContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
