import PropTypes from 'prop-types';

export const ContactItem = ({ id, name, number, onDelete }) => {
  const handleDelete = () => {
    onDelete(id);
  };
  return (
    <>
      <li key={id}>
        <p>
          {name}: {number}
        </p>
        <button onClick={handleDelete}>Delete</button>
      </li>
    </>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
}