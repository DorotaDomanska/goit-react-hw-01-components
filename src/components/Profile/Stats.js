export const Stats = ({ stats }) => {
  return (
    <ul>
      <li>
        <span>Followers</span>
        <span>{stats}</span>
      </li>
      <li>
        <span>Views</span>
        <span>{stats}</span>
      </li>
      <li>
        <span>Likes</span>
        <span>{stats}</span>
      </li>
    </ul>
  );
};
