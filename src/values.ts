export interface Value {
  name?: string;
  description?: string;
  type?: string;
  unit?: string;
  required?: boolean;
  minValue?: boolean;
  maxValue?: boolean;
  allowedValues?: any;
}

export interface Values {
  [valueName: string]: Value;
}
