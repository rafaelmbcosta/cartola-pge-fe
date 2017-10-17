import { Winner } from '../winner';

export class Championship {
  constructor (
    public first_turn?: Winner[],
    public second_turn?: Winner[],
    public championship?: Winner[]
  ){}
}
