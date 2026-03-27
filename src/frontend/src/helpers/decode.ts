import { log } from './log';

/**
 * Decode HTML entities.
 *
 * @param text - Encoded string.
 * @returns - Decoded string.
 */
export function decode(text: string) {
  if (typeof text === 'string') {
    return text.replaceAll('&gt;', '>').replaceAll('&lt;', '<');
  }
  log.error(`Invalid string: ${String(text)}`);
  return text;
}
