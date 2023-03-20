import PropTypes from 'prop-types';
import React from 'react';
import css from '../FriendList.module.css';

export const TransactionHistory = ({ tables }) => {
  return (
    <div>
      <table className={css.transaction_history}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
        <tbody>
          {tables.map(tabl => (
            <tr>
              <th>{tabl.type}</th>
              <th>{tabl.amount}</th>
              <th>{tabl.currency}</th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

TransactionHistory.propTypes = {
  tables: PropTypes.arrayOf(
    PropTypes.exact({
      type: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      currency: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
};
