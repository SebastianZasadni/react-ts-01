import css from './FeedbackOptions.module.css';

export type Option = 'good' | 'neutral' | 'bad';
export type Options = ['good', 'neutral', 'bad'];

interface Props {
  options: Options;
  onLeaveFeedback: (option: Option) => void;
}

export const FeedbackOptions = ({ options, onLeaveFeedback }: Props) => {
  return (
    <ul className={css.optionsList}>
      {options.map((option: Option) => (
        <li key={option} className={css.optionsListItem}>
          <button
            className={css.button}
            type="button"
            onClick={() => onLeaveFeedback(option)}
          >
            {option}
          </button>
        </li>
      ))}
    </ul>
  );
};
