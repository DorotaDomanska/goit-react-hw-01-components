import { StatList } from './StatList';

export const Statistics = ({ title, children }) => {
  return (
    <section>
      <h2>{title}</h2>
      <StatList>{children}</StatList>
    </section>
  );
};
