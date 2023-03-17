import styles from '../FriendList.module.css';
import PropTypes from 'prop-types';

export const FriendListItem = ({ status }) => {
  return (
    <div>
      <ul className={styles.friend_list}>
        {status.map(user => (
          <li key={user.id} className={styles.items}>
            <span className={`${styles.status} ${styles[user.isOnline]}`}>
              {user.isOnline}
            </span>
            <img
              className="avatar"
              src={user.avatar}
              alt="User avatar"
              width="48"
            />
            <p className={styles.name}>{user.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

FriendListItem.propTypes = {
  status: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
