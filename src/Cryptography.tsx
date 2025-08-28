import './Home.css';

export default function Cryptography() {
  return (
    <div className='card cryptography-external'>
      <div className='card-header'>
        <h2>Cryptography</h2>
      </div>
      <div className='card-body'>
        <div className='cryptography-content'>
          <div>
            This{' '}
            <a href='https://github.com/0xshikhar/mpc-fire-water' target='_blank' rel='noopener noreferrer'>
              open source
            </a> app uses{' '}
            <a href='https://github.com/voltrevo/mpc-framework' target='_blank' rel='noopener noreferrer'>
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
    </div>
  );
}