import PropTypes from 'prop-types';
import s from './Profile.module.css';

export const Profile = ({
  name,
  tag,
  location,
  avatar,
  likes,
  followers,
  views,
}) => {
  return (
    <div className={s.profile}>
      <div className={s.description}>
        <img src={avatar} alt="user avatar" className={s.avatar} />
        <p className={s.name}>{name}</p>
        <p className={s.tag}>@{tag}</p>
        <p className={s.location}>{location}</p>
      </div>

      <ul className={s.stats}>
        <li>
          <span className={s.label}>Followers</span>
          <span className={s.quantity}>{followers}</span>
        </li>
        <li>
          <span className={s.label}>Views</span>
          <span className={s.quantity}>{views}</span>
        </li>
        <li>
          <span className={s.label}>Likes</span>
          <span className={s.quantity}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  name: PropTypes.string,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
};
