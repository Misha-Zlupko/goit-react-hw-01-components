import PropTypes from 'prop-types';
import React from 'react';

export const Profile = (
  avatar,
  username,
  tag,
  location,
  followers,
  views,
  likes
) => {
  return (
    <div className="profile">
      <div className="description">
        <img src={avatar} alt="User avatar" className="avatar" />
        <p className="name">{username}</p>
        <p className="tag">{tag}</p>
        <p className="location">{location}</p>
      </div>

      <ul className="stats">
        <li>
          <span className="label">Followers</span>
          <span className="quantity">{followers}</span>
        </li>
        <li>
          <span className="label">Views</span>
          <span className="quantity">{views}</span>
        </li>
        <li>
          <span className="label">Likes</span>
          <span className="quantity">{likes}</span>
        </li>
      </ul>
    </div>
  );
};

export const Statistics = ({ stats }) => {
  return (
    <section className="statistics">
      {stats.map(stat => (
        <div>
          <h2 className="title">Upload {stat.id}</h2>

          <ul className="stat-list">
            <li className="item">
              <span className="label">{stat.label}</span>
              <span className="percentage">{stat.percentage}%</span>
            </li>
            <li className="item">
              <span className="label">{stat.label}</span>
              <span className="percentage">{stat.percentage}%</span>
            </li>
            <li className="item">
              <span className="label">{stat.label}</span>
              <span className="percentage">{stat.percentage}%</span>
            </li>
            <li className="item">
              <span className="label">{stat.label}</span>
              <span className="percentage">{stat.percentage}%</span>
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
      <ul class="friend-list">
        {status.map(user => (
          <li key={user.id} className="item">
            <span className="status">{user.online}</span>
            <img
              className="avatar"
              src={user.avatar}
              alt="User avatar"
              width="48"
            />
            <p className="name">{user.name}</p>
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
        <table className="transaction-history" key={tabl.id}>
          <thead>
            <tr>
              <th>Type</th>
              <th>Amount</th>
              <th>Currency</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>{tabl.type}</td>
              <td>{tabl.amount}</td>
              <td>{tabl.currency}</td>
            </tr>
          </tbody>
        </table>
      ))}
    </div>
  );
};

TransactionHistory.prototype = {
  tables: PropTypes.arrayOf(
    PropTypes.exact({
      type: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      currency: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
};
