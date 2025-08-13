export default function getEmoji(emoji: string): string {
  switch (emoji) {
  case 'rock':
    return '🪨';
  case 'scissors':
    return '✂️';
  case 'paper':
    return '📄';
  case 'fire':
    return '🔥';
  case 'water':
    return '💧';
  default:
    return '';
  }
}
