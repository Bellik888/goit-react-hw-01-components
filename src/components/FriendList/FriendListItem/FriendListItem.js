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
