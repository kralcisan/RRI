import { world } from "./world.js";

// Ob pritisku zabeležimo, da je tipka pritisnjena.
window.addEventListener("keydown", (e) => {
  const k = e.key.toLowerCase();

  if (k in world.keys) {
    world.keys[k] = true;
    e.preventDefault();
  }
});

// Ob spustu zabeležimo, da tipka ni več pritisnjena.
window.addEventListener("keyup", (e) => {
  const k = e.key.toLowerCase();

  if (k in world.keys) {
    world.keys[k] = false;
  }
});