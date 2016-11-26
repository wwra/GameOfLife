import Util  from './util';
import {lifeGeneration}  from './game';

export let InitFill = function () {
    document.querySelector(Util.LBL_COUNTER).innerHTML = '1';
    for (let x = 0; x < Util.LIFE_AMOUNT; ++x) {
        for (let y = 0; y < Util.LIFE_AMOUNT; ++y) {
            lifeGeneration[x][y] = Math.random() >= 0.5;
        }
    }
};

export let Paint = function () {
    const c   = document.querySelector(Util.CANVAS);
    const ctx = c.getContext('2d');
    ctx.clearRect(0, 0, c.width, c.height);
    ctx.beginPath();

    for (let x = 0; x < Util.LIFE_AMOUNT; ++x) {
        for (let y = 0; y < Util.LIFE_AMOUNT; ++y) {
            if (lifeGeneration[x][y]) {
                ctx.rect(x * Util.POINT_SIZE, y * Util.POINT_SIZE - 5, 10, 10);
                ctx.fill();
            }
        }
    }
};