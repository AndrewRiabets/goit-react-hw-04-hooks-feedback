import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.css';

export default function FeedbackOptions({ options, handleClick }) {
  return (
    <div>
      {options.map((option, index) => (
        <button
          key={index}
          type="button"
          name={option}
          onClick={handleClick}
          className={styles.button}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  handleClick: PropTypes.func.isRequired,
};
