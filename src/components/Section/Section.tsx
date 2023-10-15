import css from './Section.module.css';

interface Props {
  title: string;
  children: JSX.Element;
}

export const Section = ({ title, children }: Props) => {
  return (
    <div className={css.sectionfeedback}>
      <h2>{title}</h2>
      {children}
    </div>
  );
};
