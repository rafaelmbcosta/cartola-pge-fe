import { Player } from '../common/player';

export class League {
  constructor (
    public i?: number,
    public name?: string,
    public players?: Player[]
  ){}
}
