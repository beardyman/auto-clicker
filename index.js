#!/usr/bin/env node

const robo = require('robotjs');
const argv = require('minimist')(process.argv.slice(2),
  {
    alias: {
      delay: 'd',
      freeMove: 'f',
      safe: 's'
    },
    default: {
      delay: 10,
      freeMove: false,
      safe: true
    }
  });

let setPosition;

if(argv.safe && argv.delay < 10) {
  console.log('Safe mode enabled. Setting delay to minimum safe value of 10.')
}

setInterval(() => {
  if (!argv.freeMove) {
    if (!setPosition) {
      setPosition = robo.getMousePos();
    }
    const currentPosition = robo.getMousePos();
    if (argv.verbose) {
      console.log(`clicking at ${setPosition.x}, ${setPosition.y}`);
    }
    robo.moveMouse(setPosition.x, setPosition.y);
  }

  // do the click!
  robo.mouseClick();

  // move the mouse back!
  if(!argv.freeMove){
    robo.moveMouse(currentPosition.x, currentPosition.y);
  }
}, argv.delay * 1000);