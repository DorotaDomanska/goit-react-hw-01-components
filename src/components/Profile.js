import { Description } from './/Description';
import { Stats } from './/Stats';

export const Profile = ({ children }) => {
  return (
    <div>
      <Description>{children}</Description>
      <Stats>{children}</Stats>
    </div>
  );
};
