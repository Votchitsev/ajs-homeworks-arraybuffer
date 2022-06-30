export default class Character {
  setAttack(distance) {
    const damage = new Float64Array(5);
    for (let i = 0; i < damage.length; i += 1) {
      damage[i] = 1 - (i / 10);
    }
    return this.power * damage[distance - 1];
  }

  setStoned(distance) {
    const damage = new Float64Array(5);
    for (let i = 0; i < damage.length; i += 1) {
      damage[i] = Math.log2(i + 1) * 5;
    }
    return this.setAttack(distance) - damage[distance - 1];
  }

  makeAttack(enemy, distance, stoned = false) {
    if (stoned) {
      enemy.health = Math.round(enemy.health - this.setStoned(distance));
    } else {
      enemy.health = Math.round(enemy.health - this.setAttack(distance));
    }
  }
}
