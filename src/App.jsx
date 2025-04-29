import React, { useState, useEffect } from 'react';
import BotCollection from './components/BotCollection';
import YourBotArmy from './components/YourBotArmy';

function App() {
  const [bots, setBots] = useState([]);
  const [myBotArmy, setMyBotArmy] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/bots')
      .then(response => response.json())
      .then(data => setBots(data))
  }, []);

  const enlistBot = (bot) => {
    if (!myBotArmy.find(armyBot => armyBot.id === bot.id)) {
      setMyBotArmy([...myBotArmy, bot]);
    }
  };

  const releaseBot = (bot) => {
    setMyBotArmy(myBotArmy.filter(armyBot => armyBot.id !== bot.id));
  };

  const dischargeBot = (bot) => {
    fetch(`http://localhost:3000/bots/${bot.id}`, {
      method: 'DELETE',
    })
      .then(response => {
        if (response.ok) {
          setBots(bots.filter(b => b.id !== bot.id));
          setMyBotArmy(myBotArmy.filter(b => b.id !== bot.id));
        }
      })
  };

  return (
    <div className="text-center">
      <header className="bg-gray-800 p-5 text-white">
        <h1 className="text-2xl font-bold">Bot Battlr</h1>
      </header>
      
      <main className="p-5">
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700 border-b-2 border-gray-200 pb-2 mb-4">Your Bot Army</h2>
          <YourBotArmy 
            bots={myBotArmy} 
            releaseBot={releaseBot} 
            dischargeBot={dischargeBot} 
          />
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-700 border-b-2 border-gray-200 pb-2 mb-4">Bot Collection</h2>
          <BotCollection 
            bots={bots} 
            enlistBot={enlistBot} 
          />
        </section>
      </main>
    </div>
  );
}

export default App;