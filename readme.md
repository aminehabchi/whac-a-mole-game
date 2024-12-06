# Whack-a-Mole Game

## Game Description
This is a fun, interactive browser-based game where players must click on Monty (the good character) while avoiding Piranha (the bad character). The game tests your reflexes and provides a scoring challenge.

## Game Mechanics
- Click on Monty (Monty image) to gain 5 points
- Clicking on Piranha (Piranha image) loses 5 points
- Clicking on an empty square loses 1 point
- Game ends when your score goes below 0
- You can restart the game at any time
- Difficulty levels can be adjusted

## Features
- Dynamic scoring system
- Multiple difficulty levels
- Restart functionality
- Visual feedback with opacity changes

## Game Elements
- **Score Display**: Shows current game score
- **Game Grid**: 9 squares where characters appear
- **Restart Button**: Resets the game
- **Level Button**: Adjusts game difficulty

## Difficulty Levels
The game has three difficulty levels, represented by stars:
- Level 1: Slowest (1500ms intervals)
- Level 2: Medium (1000ms intervals)
- Level 3: Fastest (500ms intervals)

## How to Play
1. Characters (Monty and Piranha) will randomly appear in the grid
2. Click on Monty to score points
3. Avoid clicking on Piranha
4. Try to maintain a positive score
5. Use the level button to increase/decrease difficulty
6. Use the restart button to start a new game

## Technical Details
- Vanilla JavaScript
- Dynamic DOM manipulation
- Interval-based character spawning
- Event-driven game logic

## Setup and Running
1. Clone the repository
2. Open `index.html` in a modern web browser
3. Ensure all image assets (`monty.png`, `piranha.png`) are in the same directory
4. Start playing!

## Required Assets
- `monty.png`: Image for the good character
- `piranha.png`: Image for the bad character

## TODO
- Add sound effects
- Implement high score tracking
- Create more complex spawning patterns
- Add more difficulty levels


