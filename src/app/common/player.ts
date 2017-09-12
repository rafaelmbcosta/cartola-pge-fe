import { Detail } from './detail';

export class Player {
  constructor (
    public name?: string,
    public team?: string,
    public points?: number,
    public diff_points?: number,
    public team_symbol?: string,
    public details?: Detail[]
  ){}
}
