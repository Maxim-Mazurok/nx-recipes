import { isNumber } from '@myorg/is-even';

export function isEven(x: number): boolean {
  return isNumber(x) && x % 2 === 0;
}
