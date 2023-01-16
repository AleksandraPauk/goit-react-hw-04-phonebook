import { ContactItem } from './ContactItem';
import PropTypes from 'prop-types';

export const ContactList = ({ contacts, handleDelete }) => {
  return (
      <ul>
        {contacts.map(contact => {
          return (
            <ContactItem
              key={contact.id}
              id={contact.id}
              name={contact.name}
              number={contact.number}
              onDelete={handleDelete}
            />
          );
        })}
      </ul>
  );
};

ContactList.propTypes = {
  handleDelete: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }))
}