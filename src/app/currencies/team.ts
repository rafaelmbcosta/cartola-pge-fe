import { Detail } from './detail';

export class Team {
  constructor (
    public name?: string,
    public player?: string,
    public difference?: number,
    public team_symbol?: string,
    public details?: Detail[]
  ){}
}
