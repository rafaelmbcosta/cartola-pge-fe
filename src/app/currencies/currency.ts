import { Team } from './team';

export class Currency {
  constructor (
    public id?: number,
    public name?: string,
    public teams?: Team[]
  ){}
}
