import Daemon from '../task1/daemon.js';
import Magician from '../task1/magician.js';

const daemon = new Daemon();
const magician = new Magician();

test('simple attack', () => {
  daemon.makeAttack(magician, 1, false);
  return expect(magician.health).toBe(500);
});

test('attack with stoned', () => {
  magician.makeAttack(daemon, 5, true);
  return expect(daemon.health).toBe(467);
});
