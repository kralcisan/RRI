import { world } from "./world.js";

export function draw() {
  const { ctx, W, H, player } = world;

  // Prebarvamo celotno platno, da odstranimo prejšnjo sliko.
  ctx.fillStyle = "#1a1d23";
  ctx.fillRect(0, 0, W, H);

  // Narišemo igralca na trenutnem položaju.
  ctx.fillStyle = player.color;
  ctx.fillRect(player.x, player.y, player.w, player.h);

  // Narišemo še oči.
  ctx.fillStyle = "#93c5fd";
  ctx.fillRect(player.x + 8, player.y + 8, 6, 6);
  ctx.fillRect(player.x + 18, player.y + 8, 6, 6);
}