import PropTypes from 'prop-types';
import React from 'react';
import css from '../FriendList.module.css';

export const TransactionHistory = ({ tables }) => {
  return (
    <div>
      {tables.map(tabl => (
        <table className={css.transaction_history} key={tabl.id}>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
          <tbody>
            <tr>
              <th>{tabl.type}</th>
              <th>{tabl.amount}</th>
              <th>{tabl.currency}</th>
            </tr>
          </tbody>
        </table>
      ))}
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
