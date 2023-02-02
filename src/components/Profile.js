import { Description } from './/Description';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats,
  children,
}) => {
  return (
    <div>
      <Description>{children}</Description>
      {/* <Stats>{children}</Stats> */}
    </div>
  );
};
