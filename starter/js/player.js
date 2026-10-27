import { world } from "./world.js";

export function updatePlayer(dt) {
  const { player, keys, W, H } = world;

  let dx = 0;
  let dy = 0;

  // Smer premikanja glede na pritisnjene tipke.
  if (keys.w) dy -= 1;
  if (keys.s) dy += 1;
  if (keys.a) dx -= 1;
  if (keys.d) dx += 1;

  // Normalizacija zagotovi enako hitrost tudi po diagonali.
  if (dx !== 0 || dy !== 0) {
    const len = Math.hypot(dx, dy);
    dx /= len;
    dy /= len;
  }

  // Premik glede na hitrost in pretečeni čas v sekundah.
  player.x += dx * player.speed * dt;
  player.y += dy * player.speed * dt;

  // Celoten igralec mora ostati znotraj platna.
  player.x = Math.max(0, Math.min(W - player.w, player.x));
  player.y = Math.max(0, Math.min(H - player.h, player.y));
}