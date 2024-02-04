export default class Adapter {
  constructor(userData) {
    this.userData = userData;
  }

  adapt() {
    const adaptedData = {
      name: `${this.userData.name.first}  ${this.userData.name.last}`,
      img: this.userData.picture.large,
    };
    return adaptedData;
  }
}
