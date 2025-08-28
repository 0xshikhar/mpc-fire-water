import { useEffect } from 'react';
import Calculating from './Calculating';
import Choose from './Choose';
import Cryptography from './Cryptography';
import Ctx from './Ctx';
import Error from './Error';
import Home from './Home';
import Host from './Host';
import Join from './Join';
import Result from './Result';
import Share from './Share';
import Waiting from './Waiting';
import isKey from './isKey';
import never from './never';

function App() {
  const ctx = Ctx.use();
  const page = ctx.page.use();

  useEffect(() => {
    const url = new URL(window.location.href);
    const code = url.hash.slice(1);

    if (isKey(code)) {
      window.location.hash = '';
      ctx.join(code);
    }
  }, [ctx]);

  let content;

  if (page === 'Home') {
    content = <Home />;
  } else if (page === 'Share') {
    content = <Share />;
  } else if (page === 'Host') {
    content = <Host />;
  } else if (page === 'Join') {
    content = <Join />;
  } else if (page === 'Connecting') {
    content = <div className="connecting">Connecting to opponent...</div>;
  } else if (page === 'Choose') {
    content = <Choose />;
  } else if (page === 'Waiting') {
    content = <Waiting />;
  } else if (page === 'Calculating') {
    content = <Calculating />;
  } else if (page === 'Result') {
    content = <Result />;
  } else if (page === 'Error') {
    content = <Error />;
  } else {
    never(page);
  }

  return (
    <div className="app-container" style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      padding: '1rem',
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      {/* Main content wrapper */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%',
          maxWidth: '1200px',
          gap: '2rem'
        }}>
        {/* Main game container */}
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            width: '100%', 
            maxWidth: '1100px',
            margin: '0 auto',
            minHeight: 'auto',
            boxSizing: 'border-box',
            overflow: 'visible',
            background: 'rgba(255, 255, 255, 0.95)',
            borderRadius: '16px',
            padding: '2rem',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15)'
          }}>
          {content}
        </div>
        
        {/* External cryptography box */}
          {page === 'Home' && (
            <div style={{
              width: '100%',
              maxWidth: '1100px',
              margin: '0 auto',
              padding: '0',
              boxSizing: 'border-box'
            }}>
            <Cryptography />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
