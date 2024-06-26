import TotalBalanceBox from '@/components/TotalBalanceBox';
import HeaderBox from '@/components/HeaderBox';
import React from 'react';
import RightSidebar from '@/components/RightSidebar';

function Home() {
  const loggedIn = {
    firstName: 'Judah',
    lastName: 'Purcell',
    email: 'judah.purcell@gmail.com',
  };
  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-content'>
          <HeaderBox
            type='greeting'
            title='Welcome'
            user={loggedIn?.firstName || 'Guest'}
            subtext='Access and manage your account and transactions efficiently.'
          />
          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.35}
          />
          RECENT TRANSACTIONS
        </header>
      </div>
      <RightSidebar
        user={loggedIn}
        transactions={[]}
        banks={[{ currentBalance: 123.5 }, { currentBalance: 345.89 }]}
      />
    </section>
  );
}

export default Home;
