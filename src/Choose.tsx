import { useState } from 'react';
import './Choose.css';
import Ctx, { GameOption } from './Ctx';
import capitalize from './capitalize';
import getEmoji from './getEmoji';

export default function Choose() {
  const ctx = Ctx.use();
  const [selection, setSelection] = useState<GameOption | undefined>();

  return (
    <div className='choose-page' style={{ WebkitTapHighlightColor: 'transparent' }}>
      <h1>Choose Your Move</h1>
      
      <div className='choices-grid'>
        <Choice selection={selection} setSelection={setSelection} type='rock' />
        <Choice selection={selection} setSelection={setSelection} type='paper' />
        <Choice selection={selection} setSelection={setSelection} type='scissors' />
        <Choice selection={selection} setSelection={setSelection} type='fire' />
        <Choice selection={selection} setSelection={setSelection} type='water' />
      </div>
      
      <div className='choice-actions'>
        {selection !== undefined && (
          <button
            className='secondary'
            onClick={() => setSelection(undefined)}
          >
            Back to Selection
          </button>
        )}
        <button
          disabled={selection === undefined}
          onClick={() => {
            if (selection === undefined) {
              return;
            }
            ctx.send(selection);
          }}
        >
          {buttonText(selection)}
        </button>
      </div>
    </div>
  );
}

function buttonText(selection: GameOption | undefined) {
  if (selection === undefined) {
    return '(Choose then Confirm)';
  }

  return `Send ${capitalize(selection)}`;
}

function Choice({ selection, setSelection, type }: {
  selection: GameOption | undefined;
  setSelection: (selection: GameOption | undefined) => void;
  type: GameOption;
}) {
  return (
    <div
      className={`choice ${selection === type ? 'selected' : ''} ${type}`}
      onClick={() => setSelection(selection === type ? undefined : type)}
      title={capitalize(type)}
    >
      {getEmoji(type)}
    </div>
  );
}
