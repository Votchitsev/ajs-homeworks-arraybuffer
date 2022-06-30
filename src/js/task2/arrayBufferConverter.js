export default class ArrayBufferConverter {
  static load(buffer) {
    return this.toString(new Uint16Array(buffer));
  }

  static toString(data) {
    return data.reduce((result, character) => {
      result += String.fromCharCode(character);
      return result;
    }, '');
  }
}
