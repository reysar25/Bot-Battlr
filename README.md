# Bot Army Management App

This React application with Tailwind CSS allows users to:
- Browse a collection of bot profiles
- Enlist bots in their army
- Release bots from their army
- Discharge (delete) bots permanently

## Features

### Bot Collection
- Displays all available bots fetched from the backend
- Each bot is rendered as a card showing:
  - Name
  - Avatar image
  - Class
  - Stats (health, damage, armor)
  - Catchphrase
- Clicking on a bot in the collection adds it to your army (if not already enlisted)

### Your Bot Army
- Shows all bots currently enlisted in your army
- Clicking on a bot in your army releases it (removes it from the army but keeps it in the collection)
- Each bot card has a red "x" button that permanently discharges the bot (deletes it from both the backend and your army)

## Component Structure

### App.js
- Main application component
- Manages state for all bots and enlisted bots
- Handles bot enlistment, release, and discharge logic
- Makes API calls to the backend

### BotCollection.js
- Renders all available bots
- Passes the enlist function to individual bot cards

### YourBotArmy.js
- Renders all enlisted bots
- Passes the release and discharge functions to individual bot cards
- Shows a message when no bots are enlisted

### BotCard.js
- Renders individual bot information
- Handles click events for enlist/release actions
- Includes a discharge button when appropriate

## API Integration

The application integrates with a mock backend API:
- Fetches all available bots from http://localhost:3000/bots

## Implementation Details

### Enlistment Logic
- A bot can be enlisted only once
- The bot remains visible in the collection after being enlisted

### Release Logic
- Released bots are removed from the army but remain in the collection
- They can be re-enlisted later

### Discharge Logic
- Discharged bots are permanently deleted from both the backend and the frontend
- This action cannot be undone

## Styling

The application uses Tailwind CSS for styling:
- Card-based design for bot profiles
- Visual feedback on hover
- Clear visual distinction between the collection and army sections
- Stats displayed with intuitive icons

## Setup
1. Ensure you have all dependancies installed:

```bash
npm install
```

2. Configure your `tailwind.config.js` file to scan your template files:
```javascript
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

3. Include Tailwind directives in your CSS:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

4. Start your development server:
```bash
npm start
```

5. Ensure your backend server is running at http://localhost:3000