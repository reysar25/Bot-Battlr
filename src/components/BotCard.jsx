import React from 'react';

function BotCard({ bot, handleClick, dischargeBot }) {
  const { name, health, damage, armor, bot_class, catchphrase, avatar_url, id } = bot;
  
 

  return (
    <div 
      className="w-64 border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-white cursor-pointer"
      onClick={() => handleClick(bot)}
    >
      <div className="relative">
        <img 
          src={avatar_url} 
          alt={name} 
          className="w-full h-48 object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 ">
          <h3 className="text-lg font-bold text-white">{name}</h3>
        </div>
        {dischargeBot && (
          <button 
            className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-7 h-7 flex items-center justify-center font-bold hover:bg-red-600 transition-colors shadow-md"
            onClick={(e) => {
              e.stopPropagation();
              dischargeBot(bot);
            }}
          >
            x
          </button>
        )}
      </div>
      
      <div className="p-4">
        <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3 `}>
          {bot_class}
        </span>
        
        <div className="flex justify-between mb-3 bg-gray-50 rounded-lg p-2">
          <div className="flex flex-col items-center">
            <span className="text-red-500 text-lg">Health</span>
            <span className="font-medium text-sm">{health}</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-yellow-500 text-lg">Damage</span>
            <span className="font-medium text-sm">{damage}</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-blue-500 text-lg">Armor</span>
            <span className="font-medium text-sm">{armor}</span>
          </div>
        </div>
        
        <div className="bg-gray-50 rounded p-2 mt-2">
          <p className="italic text-sm text-gray-600 line-clamp-2">"{catchphrase}"</p>
        </div>
      </div>
    </div>
  );
}

export default BotCard;