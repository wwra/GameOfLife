import {Life}  from './game';
import {InitFill, Paint} from './init';

const InitButton  = document.querySelector('#init');
const StepButton  = document.querySelector('#step');
const StartButton = document.querySelector('#start');
const StopButton  = document.querySelector('#stop');

// Init
StopButton.classList.add('hide');
StartButton.disabled = true;
StepButton.disabled  = true;

let interval;

let StopLife = function () {
    window.clearInterval(interval);
};

InitButton.onclick = function () {
    StartButton.disabled = false;
    StepButton.disabled  = false;
    StopLife();
    InitFill();
    Paint();
};

StepButton.onclick = function () {
    StopLife();
    Life();
    Paint();
};

StartButton.onclick = function () {
    InitButton.disabled = true;
    StepButton.disabled = true;
    StartButton.classList.add('hide');
    StopButton.classList.remove('hide');
    interval = setInterval(function () {
        Life();
        Paint();
    }, 300)
};

StopButton.onclick = function () {
    InitButton.disabled = false;
    StepButton.disabled = false;
    StopButton.classList.add('hide');
    StartButton.classList.remove('hide');
    StopLife();
};