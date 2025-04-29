import React from 'react';
import BotCard from './BotCard';

function YourBotArmy({ bots, releaseBot, dischargeBot }) {
  return (
    <div className="your-bot-army">
      {bots.length === 0 ? (
        <p className="empty-army">No bots in your army yet</p>
      ) : (
        bots.map(bot => (
          <BotCard 
            key={bot.id} 
            bot={bot} 
            handleClick={releaseBot}
            dischargeBot={dischargeBot}
          />
        ))
      )}
    </div>
  );
}

export default YourBotArmy;