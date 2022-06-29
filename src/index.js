import Daemon from './js/daemon.js';
import Magician from './js/magician.js';

const daemon = new Daemon();
const magician = new Magician();

daemon.makeAttack(magician, 3, false);
