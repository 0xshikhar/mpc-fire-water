import CopyToClipboard from 'react-copy-to-clipboard';
import Ctx from './Ctx';
import { QRCodeCanvas } from 'qrcode.react';
import { useEffect } from 'react';
import './index.css';

export default function Host() {
  const ctx = Ctx.use();
  const key = ctx.key.use();

  const code = key.base58();

  useEffect(() => {
    ctx.host();
  }, [ctx]);

  return (
    <div className='host-container'>
      <h1>Host</h1>
      <p>
        Get your friend to scan:
      </p>
      <div className='qr-container'>
        <QRCodeCanvas
          bgColor='transparent'
          value={`${window.location.origin}${window.location.pathname}#${code}`}
        />
      </div>
      <p>
        Or <CopyToClipboard text={code}>
          <button className='action-button'>Copy Code</button>
        </CopyToClipboard> and send it to your friend.
      </p>
    </div>
  );
}
