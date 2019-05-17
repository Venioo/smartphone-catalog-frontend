export class Parameter {
  code: string;
  name: string;
  valueMin: string;
  valueMax: string;
  checked: boolean;

  constructor(code: string, name: string, valueMin: string, valueMax: string, checked: boolean) {
    this.code = code;
    this.name = name;
    this.valueMin = valueMin;
    this.valueMax = valueMax;
    this.checked = checked;
  }
}
