import { Detail } from './detail';

export class Team {
  constructor (
    public name?: string,
    public player?: string,
    public difference?: number,
    public details?: Detail[]
  ){}
}
