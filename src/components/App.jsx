import { TransactionHistory } from './PageTitle/Transactions/transactions';
import { FriendListItem } from './PageTitle/Friends/Friends';
import { Statistics } from './PageTitle/Data/Data';
import { Profile } from './PageTitle/Profile/Profile';

import data from './PageTitle/data.json';
import user from './PageTitle/user.json';
import friends from './PageTitle/friends.json';
import transactions from './PageTitle/transactions.json';

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <Statistics stats={data} title="Upload stats" />
      <FriendListItem status={friends} />
      <TransactionHistory tables={transactions} />
    </div>
  );
};
