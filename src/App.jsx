import Profile from './components/Profile/Profile';
import userData from './components/userData.json';
import FriendList from './components/FriendList/FriendList';
import friends from './components/friends.json';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import transactions from './components/transactions.json';

function App() {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />

      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </>
  );
}

export default App;