import css from './FriendList.module.css';
// import { FriendListItem } from './FriendListItem';

export const FriendList = ({ children }) => {
  return (
    <ul className={css.friendList}>
      {/* <FriendListItem>{children}</FriendListItem> */}
    </ul>
  );
};
