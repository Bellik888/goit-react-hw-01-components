import PropTypes from 'prop-types';
import s from './FriendListItem.module.css';

export const FriendListItem = ({ id, isOnline, avatar, name }) => {
  return (
    <li className={s.item} key={id}>
      <span className={s.status}>{isOnline}</span>
      <img className={s.avatar} src={avatar} alt={name} width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
};
FriendListItem.propTypes = {
  id: PropTypes.number.isRequired,
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
