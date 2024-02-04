export default class Builder {
  constructor() {
    this.fields = [];
  }

  addTextField(name, label, placeholder) {
    const field = {
      type: "text",
      name,
      label,
      placeholder,
    };
    this.fields.push(field);
  }

  addCheckBox(name, label, initValue = false) {
    const field = {
      type: "checkbox",
      name,
      label,
      value: initValue,
    };
    this.fields.push(field);
  }

  build() {
    return this.fields;
  }
}
