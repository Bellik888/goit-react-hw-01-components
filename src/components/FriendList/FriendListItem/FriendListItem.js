import PropTypes from 'prop-types';
import s from './FriendListItem.module.css';

export const FriendListItem = ({ isOnline, avatar, name }) => {
  return (
    <li className={s.item}>
      {isOnline ? (
        <span
          className={s.status}
          style={{ backgroundColor: 'rgba(26, 212, 35, 0.658)' }}
        ></span>
      ) : (
        <span className={s.status}></span>
      )}
      <img className={s.avatar} src={avatar} alt={name} width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
};
FriendListItem.propTypes = {
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
