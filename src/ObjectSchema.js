export default class ObjectSchema {
  constructor(shapes) {
    this.validators = shapes;
  }

  shape(obj) {
    return new ObjectSchema(obj);
  }

  isValid(value) {
    const keys1 = Object.keys(this.validators);
    const keys2 = Object.keys(value);
    if (keys2.length !== keys1.length) return false;
    return keys1.every((key) => this.validators[key].isValid(value[key]));
  }
}
