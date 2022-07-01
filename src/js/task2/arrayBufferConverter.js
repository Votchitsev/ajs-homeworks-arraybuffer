export default class ArrayBufferConverter {
  load(buffer) {
    return this.toString(new Uint16Array(buffer));
  }

  // eslint-disable-next-line class-methods-use-this
  toString(data) {
    return String.fromCharCode(...data);
  }
}
