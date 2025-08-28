import capitalize from './capitalize';
import Ctx from './Ctx';
import getEmoji from './getEmoji';
import { useState } from 'react';
import './Result.css';

export default function Result() {
  const ctx = Ctx.use();
  const result = ctx.result.use();
  const choice = ctx.choice.use();

  const opponentMap = {
    win: {
      rock: 'scissors, water',
      paper: 'rock, water',
      scissors: 'paper, water',
      fire: 'rock, paper, scissors',
      water: 'fire',
    },
    lose: {
      rock: 'paper, fire',
      paper: 'scissors, fire',
      scissors: 'rock, fire',
      fire: 'water',
      water: 'rock, paper, scissors',
    },
    draw: {
      rock: 'rock',
      paper: 'paper',
      scissors: 'scissors',
      fire: 'fire',
      water: 'water',
    },
  };

  let opponentOptions = '';

  if (result !== undefined && choice !== undefined) {
    opponentOptions = opponentMap[result][choice];
  }

  const [loading, setLoading] = useState(false);

  const handlePlayAgain = async () => {
    setLoading(true);
    try {
      await ctx.playAgain();
    } catch (error) {
      console.error('Error playing again:', error);
      setLoading(false);
    }
  };

  return (
    <div className='result'>
      <div className={`result-title ${result ?? ''}`}>
        {capitalize(result ?? '')}
      </div>
      <div className='battle-display'>
        <table>
          <tbody>
            <tr>
              <td>You:</td>
              <td>{getEmoji(choice ?? '')}</td>
            </tr>
            <tr>
              <td>Them:</td>
              <td>{opponentOptions.split(', ').map(getEmoji).join(' or ')}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className='action-buttons'>
        <button
          className='secondary'
          onClick={() => ctx.endGame()}
          disabled={loading}
        >
          End Game
        </button>
        <button
          onClick={handlePlayAgain}
          disabled={loading}
        >
          {loading ? 'Setting up new game...' : 'Play Again'}
        </button>
      </div>
    </div>
  );
}
