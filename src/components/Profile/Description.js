import css from './Description.module.css';

export const Description = ({ username, tag, location, avatar }) => {
  return (
    <div className={css.description}>
      <img
        className={css.avatar}
        src="https://cdn-icons-png.flaticon.com/512/2922/2922506.png"
        alt={username}
      />
      <p className={css.name}>{username}Jacques Gluke</p>
      <p className={css.tag}>@jgluke{tag}</p>
      <p className={css.location}>Ocho Rios, Jamaica{location}</p>
    </div>
  );
};
