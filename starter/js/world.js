import { PLAYER_SPEED } from "./config.js";

const canvas = document.getElementById("game");

export const world = {
  canvas,
  ctx: canvas.getContext("2d"),
  W: canvas.width,
  H: canvas.height,

  player: {
    x: canvas.width / 2 - 16,
    y: canvas.height / 2 - 16,
    w: 32,
    h: 32,
    speed: PLAYER_SPEED,
    color: "#059669",
  },

  keys: {
    w: false,
    a: false,
    s: false,
    d: false,
    shift: false,
    arrowup: false,
    arrowdown: false,
    arrowleft: false,
    arrowright: false,
  },
};