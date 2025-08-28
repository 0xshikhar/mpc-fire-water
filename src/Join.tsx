import { Scanner } from '@yudiel/react-qr-scanner';
import Ctx from './Ctx';
import { ChangeEvent } from 'react';
import isKey from './isKey';
import './index.css';

export default function Join() {
  const ctx = Ctx.use();

  const tryJoin = (text: string) => {
    let key;

    if (text.startsWith('https://')) {
      const url = new URL(text);
      key = url.hash.slice(1);
    } else {
      key = text;
    }

    if (isKey(key)) {
      ctx.join(key);
    }
  };

  return (
    <div className='join-container'>
      <h1>Join</h1>
      <p>Scan your friend's QR code:</p>
      <div className='scanner-container'>
        <Scanner
          onResult={(text, _result) => tryJoin(text)}
          onError={error => console.log(error?.message)}
          components={{
            audio: false,
          }}
          styles={{
            container: {
              width: '100%',
              height: '150%',
            },
            video: {
              width: '100%',
              height: '150%',
              objectFit: 'cover',
            },
          }}
        />
      </div>
      <p>
        Or paste the code here:
        <input
          type='text'
          className='code-input'
          placeholder='Enter the code from your friend'
          onInput={(ev: ChangeEvent<HTMLInputElement>) => {
            tryJoin(ev.target.value);
          }}
        />
      </p>
    </div>
  );
}
