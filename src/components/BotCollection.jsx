import React from 'react';
import BotCard from './BotCard';

function BotCollection({ bots, enlistBot }) {
  return (
    <div className="flex flex-wrap gap-5">
      {bots.map(bot => (
        <BotCard 
          key={bot.id} 
          bot={bot} 
          handleClick={enlistBot}
        />
      ))}
    </div>
  );
}

export default BotCollection;