import { Winner } from './winner';

export class Award {
  constructor (
    public type?: string,
    public winners?: Winner[]
  ){}
}
