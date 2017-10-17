import { Award } from '../award';

export class Month {
  constructor (
    public name?: string,
    public id?: number,
    public awards?: Award[]
  ){}
}
