import css from './Button.module.css'

export const Button = ({ onClick }) => (
  <button type="button" className={css.button} onClick={onClick}>
    Load More
  </button>
);

