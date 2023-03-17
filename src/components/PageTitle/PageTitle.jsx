import PropTypes from 'prop-types';
import React from 'react';
import css from './FriendList.module.css';

export const Profile = ({
  avatar,
  username,
  tag,
  location,
  followers,
  views,
  likes,
}) => {
  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img src={avatar} alt="User avatar" className={css.avatar} />
        <p className={css.name}>{username}</p>
        <p className={css.tag}>{tag}</p>
        <p className={css.location}>{location}</p>
      </div>

      <ul className={css.stats}>
        <li>
          <span className={css.label}>Followers</span>
          <span className={css.quantity}>{followers}</span>
        </li>
        <li>
          <span className={css.label}>Views</span>
          <span className={css.quantity}>{views}</span>
        </li>
        <li>
          <span className={css.label}>Likes</span>
          <span className={css.quantity}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.protoType = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};

export const Statistics = ({ stats }) => {
  return (
    <section className={css.statistics}>
      {stats.map(stat => (
        <div>
          <h2 className={css.title}>Upload {stat.id}</h2>

          <ul className={css.stat_list}>
            <li className={css.item}>
              <span className={css.label}>{stat.label}</span>
              <span className={css.percentage}>{stat.percentage}%</span>
            </li>
            <li className={css.item}>
              <span className={css.label}>{stat.label}</span>
              <span className={css.percentage}>{stat.percentage}%</span>
            </li>
            <li className={css.item}>
              <span className={css.label}>{stat.label}</span>
              <span className={css.percentage}>{stat.percentage}%</span>
            </li>
            <li className={css.item}>
              <span className={css.label}>{stat.label}</span>
              <span className={css.percentage}>{stat.percentage}%</span>
            </li>
          </ul>
        </div>
      ))}
    </section>
  );
};

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export const FriendListItem = ({ status }) => {
  return (
    <div>
      <ul className={css.friend_list}>
        {status.map(user => (
          <li key={user.id} className={css.items}>
            <span className={`${css.status} ${css[user.isOnline]}`}>
              {user.isOnline}
            </span>
            <img
              className="avatar"
              src={user.avatar}
              alt="User avatar"
              width="48"
            />
            <p className={css.name}>{user.name}</p>
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

export const TransactionHistory = ({ tables }) => {
  return (
    <div>
      {tables.map(tabl => (
        <table className={css.transaction_history} key={tabl.id}>
          <thead>
            <tr>
              <th>{tabl.type}</th>
              <th>{tabl.amount}</th>
              <th>{tabl.currency}</th>
            </tr>
          </thead>
        </table>
      ))}
    </div>
  );
};

TransactionHistory.protoTypes = {
  tables: PropTypes.arrayOf(
    PropTypes.exact({
      type: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      currency: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
};
