import { world } from "./world.js";
import { SPRINT_MULTIPLIER } from "./config.js";

export function updatePlayer(dt) {
  const { player, keys, W, H } = world;

  let dx = 0;
  let dy = 0;

  // Smer premikanja glede na pritisnjene tipke.
if (keys.w || keys.arrowup) dy -= 1;
if (keys.s || keys.arrowdown) dy += 1;
if (keys.a || keys.arrowleft) dx -= 1;
if (keys.d || keys.arrowright) dx += 1;

  // Normalizacija zagotovi enako hitrost tudi po diagonali.
  if (dx !== 0 || dy !== 0) {
    const len = Math.hypot(dx, dy);
    dx /= len;
    dy /= len;
  }

 // Ob držanju Shifta uporabimo večjo hitrost.
const speed = player.speed * (keys.shift ? SPRINT_MULTIPLIER : 1);

player.x += dx * speed * dt;
player.y += dy * speed * dt;

  // Celoten igralec mora ostati znotraj platna.
  player.x = Math.max(0, Math.min(W - player.w, player.x));
  player.y = Math.max(0, Math.min(H - player.h, player.y));
}