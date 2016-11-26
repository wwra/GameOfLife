import Util  from './util';

export let lifeGeneration = Util.GenerateArray(Util.LIFE_AMOUNT);
let nextGeneration        = Util.GenerateArray(Util.LIFE_AMOUNT);
let _GenerationCount      = 0;
const lblCount            = document.querySelector('#count');
lblCount.innerHTML        = _GenerationCount;

let NeighborsCount = function (x, y) {
    let count = 0;
    for (let deltaX = -1; deltaX < 2; deltaX++) {
        for (let deltaY = -1; deltaY < 2; deltaY++) {
            if (!((deltaX == 0) && (deltaY == 0))) {
                let neighborX = x + deltaX;
                let neighborY = y + deltaY;
                neighborX     = (neighborX < 0) ? Util.LIFE_AMOUNT - 1 : (neighborX > Util.LIFE_AMOUNT - 1) ? 0 : neighborX;
                neighborY     = (neighborY < 0) ? Util.LIFE_AMOUNT - 1 : (neighborY > Util.LIFE_AMOUNT - 1) ? 0 : neighborY;
                count += (lifeGeneration[neighborX][neighborY]) ? 1 : 0;
            }
        }
    }
    return count;
};

export let Life = function () {
    for (let x = 0; x < Util.LIFE_AMOUNT; ++x) {
        for (let y = 0; y < Util.LIFE_AMOUNT; ++y) {
            let count            = NeighborsCount(x, y);
            nextGeneration[x][y] = (count == 3) ? true : nextGeneration[x][y];
            nextGeneration[x][y] = ((count == 2) || (count == 3)) ? nextGeneration[x][y] : false;
        }
    }
    for (let x = 0; x < Util.LIFE_AMOUNT; x++) {
        for (let y = 0; y < Util.LIFE_AMOUNT; y++) {
            lifeGeneration[x][y] = nextGeneration[x][y];
        }
    }
    _GenerationCount++;
    lblCount.innerHTML = _GenerationCount;
};


