import {Parameter} from '../parameter/parameter';

export class Weight {
  firstParameter: Parameter;
  secondParameter: Parameter;
  weight: string;

  constructor(firstParameter: Parameter, secondParameter: Parameter, value: string) {
    this.firstParameter = firstParameter;
    this.secondParameter = secondParameter;
    this.weight = value;
  }
}
