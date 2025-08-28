import Ctx from './Ctx';
import { QRCodeCanvas } from 'qrcode.react';
import './index.css';

export default function Host() {
  const ctx = Ctx.use();

  return (
    <div className='host-container'>
      <h1>Share</h1>
      <p>
        Send your friend this url:<br />
        <a href='https://0xshikhar.github.io/mpc-fire-water'>
          https://0xshikhar.github.io/mpc-fire-water
        </a>
      </p>
      <p>
        Or have them scan:
      </p>
      <div className='qr-container'>
        <QRCodeCanvas
          bgColor='transparent'
          value='https://0xshikhar.github.io/mpc-fire-water'
        />
      </div>
      <p>
        Once they have the app, return home and host a session.
      </p>
      <div style={{ textAlign: 'center', marginTop: '2rem' }}>
        <button className='action-button' onClick={() => ctx.page.set('Home')}>
          Return Home
        </button>
      </div>
    </div>
  );
}
