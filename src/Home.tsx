import './Home.css';
import Ctx from './Ctx';
import gameDiagramSrc from './assets/GameDiagram.svg';

export default function Home() {
  const ctx = Ctx.use();

  return (
    <div className='home'>
      <div>
        <div className='home-container'>
          <div className='title'>MPC Fire Water</div>
          <div className='main-buttons'>
            <button onClick={() => ctx.page.set('Host')} className='p-4'>
              Host Game
            </button>
            <button onClick={() => ctx.page.set('Join')} className='action-button'>
              Join Game
            </button>
          </div>
          <div className='home-top-row'>
            <div className='card'>
              <div className='card-header'>
                <h2>Rules</h2>
              </div>
              <div className='card-body'>
                <p>This game is similar to rock paper scissors, but with two extra options:</p>
                <ul>
                  <li>Fire, which beats everything except water</li>
                  <li>Water, which is beaten by everything except fire</li>
                </ul>
                <div className='rules-diagram'>
                  <img src={gameDiagramSrc} alt='Game rules diagram' />
                </div>
              </div>
            </div>

            <div className='card'>
              <div className='card-header'>
                <h2>How it Works</h2>
              </div>
              <div className='card-body'>
                <ol className='instruction-list'>
                  <li>
                    <a href='#' onClick={e => {
                      e.preventDefault();
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
