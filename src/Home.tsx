import './Home.css';
import Ctx from './Ctx';
import gameDiagramSrc from './assets/GameDiagram.svg';

export default function Home() {
  const ctx = Ctx.use();

  return (
    <div>
      <div className='title'>MPC Fire Water</div>
      
      <div className='home-section'>
        <h2>Rules</h2>
        <p>This game is similar to rock paper scissors, but with two extra options:</p>
        <ul>
          <li>Fire, which beats everything except water</li>
          <li>Water, which is beaten by everything except fire</li>
        </ul>
        
        <div className='rules-diagram'>
          <img src={gameDiagramSrc} alt="Game rules diagram" />
        </div>
      </div>

      <div className='home-section'>
        <h2>How it Works</h2>
        <ol className='instruction-list'>
          <li>
            <a href='#' onClick={() => {
              ctx.page.set('Share');
            }}>
              Share
            </a>
            {' '}this app with your friend.
          </li>
          <li>Host a session.</li>
          <li>Get your friend to join.</li>
          <li>Choose between rock, paper, scissors, fire, or water.</li>
          <li>Result will be calculated.</li>
        </ol>
      </div>

      <div className='home-section'>
        <h2>Cryptography</h2>
        <div className='cryptography-section'>
          <div>
            This{' '}
            <a href='https://github.com/0xshikhar/mpc-fire-water'>
              open source
            </a> app uses{' '}
            <a href='https://github.com/voltrevo/mpc-framework'>
              secure MPC
            </a> to calculate the result while keeping your input secret.
          </div>
          <div>
            Hopefully that sounds a little strange. That's because it is.
          </div>
          <div>
            The purpose of this app is to open your mind to the power of this
            counter-intuitive technology.
          </div>
        </div>
      </div>

      <div className='main-buttons'>
        <button onClick={() => ctx.page.set('Host')}>
          Host Game
        </button>
        <button onClick={() => ctx.page.set('Join')}>
          Join Game
        </button>
      </div>
    </div>
  );
}
