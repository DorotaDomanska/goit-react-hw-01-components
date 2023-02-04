import { Description } from './Description';
// import { Stats } from './Stats';
import css from './Profile.module.css';

export const Profile = ({ children }) => {
  return (
    <div className={css.profile}>
      <Description>{children}</Description>
      {/* <Stats>{children}</Stats> */}
    </div>
  );
};
