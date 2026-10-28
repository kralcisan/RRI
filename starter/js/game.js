// Uporabljam delta time v sekundah.
// Največji dovoljeni dt = 0.05 s (50 ms).
// Omejitev preprečuje velike preskoke po premoru.


import "./input.js";
import { updatePlayer } from "./player.js";
import { draw } from "./render.js";

let lastTime = null;

// Posodabljanje logike igre.
function update(dt) {
 updatePlayer(dt);
}

function loop(timestamp) {
  // Ob prvi sličici začnemo brez časovnega preskoka.
  if (lastTime === null) {
    lastTime = timestamp;
  }

  // Milisekunde pretvorimo v sekunde.
  let dt = (timestamp - lastTime) / 1000;
  lastTime = timestamp;

  // Omejimo premik ob daljšem premoru med sličicami.
  dt = Math.min(dt, 0.05);

  update(dt);
  draw();

  requestAnimationFrame(loop);
}

// Zaženemo glavno zanko.
requestAnimationFrame(loop);