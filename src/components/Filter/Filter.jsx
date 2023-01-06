import PropTypes from 'prop-types';

export const Filter = ({ filter, onChange }) => {
  return (
    <>
      <form>
        <label>
          Find contacts by name
          <input
            type="text"
            name="name"
            value={filter}
            onChange={onChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          />
        </label>
      </form>
    </>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}