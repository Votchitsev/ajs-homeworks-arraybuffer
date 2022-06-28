export default class Character {
  
  attack(distance) {
    const stoned = new Float64Array(5);
    for (let i = 0; i < stoned.length; i++) {
      stoned[i] = 1 - (i / 10);
    }
    return this.power * stoned[distance - 1];
  }

  stoned(distance) {
    const stoned = new Float64Array(5);
    for (let i = 0; i < stoned.length; i++) {
      stoned[i] = Math.log2(i + 1) * 5;
    }
    return this.attack(distance) - stoned[distance - 1];
  }
}
