const ROCK = 1;
const PAPER = 2;
const SCISSORS = 3;
const FIRE = 4;
const WATER = 5;

const winConditions = [
  // Traditional Rock Paper Scissors
  [SCISSORS, /* cuts */ PAPER],
  [PAPER, /* covers */ ROCK],
  [ROCK, /* crushes */ SCISSORS],
  // Fire beats traditional choices
  [FIRE, /* burns */ ROCK],
  [FIRE, /* burns */ PAPER],
  [FIRE, /* burns */ SCISSORS],
  // Water beats fire
  [WATER, /* extinguishes */ FIRE],
  // Traditional choices beat water
  [ROCK, /* crushes */ WATER],
  [PAPER, /* absorbs */ WATER],
  [SCISSORS, /* cuts through */ WATER],
];

export default (io: Summon.IO) => {
  const player1 = io.input('player1', 'player1', summon.number());
  const player2 = io.input('player2', 'player2', summon.number());

  io.outputPublic('result', battle(player1, player2));
};

function battle(player1: number, player2: number) {
  const player1Invalid = player1 < 1 || player1 > 5;
  const player2Invalid = player2 < 1 || player2 > 5;

  if (player1Invalid && player2Invalid) {
    return 0;
  }

  if (player1Invalid) {
    return 2;
  }

  if (player2Invalid) {
    return 1;
  }

  for (const [winningChoice, losingChoice] of winConditions) {
    if (player1 === winningChoice && player2 === losingChoice) {
      return 1;
    }

    if (player2 === winningChoice && player1 === losingChoice) {
      return 2;
    }
  }

  return 0;
}
