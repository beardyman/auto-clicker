#!/usr/bin/env node

const robo = require('robotjs');
const argv = require('minimist')(process.argv.slice(2),
  {
    alias: {
      delay: 'd',
      freeMove: 'f',
      safe: 's',
      verbose: 'v'
    },
    default: {
      delay: 10,
      freeMove: false,
      safe: true,
      verbose: false
    }
  });

let setPosition;

if(argv.safe && argv.delay < 10) {
  console.log('Safe mode enabled. Setting delay to minimum safe value of 10.')
}

setInterval(() => {
  let currentPosition;
  if (!argv.freeMove) {
    // give the user some time to put the mouse where they want the clicking to happen.
    if (!setPosition) {
      setPosition = robo.getMousePos();
    }
    // save off the current position of the mouse to put it back later
    currentPosition = robo.getMousePos()
    robo.moveMouse(setPosition.x, setPosition.y);
  }

  if (argv.verbose) {
    const nowPosition = robo.getMousePos();
    console.log(`Clicking at ${nowPosition.x}, ${nowPosition.y}`);
  }

  // do the click!
  robo.mouseClick();

  // move the mouse back!
  if(!argv.freeMove){
    robo.moveMouse(currentPosition.x, currentPosition.y);
  }
}, argv.delay * 1000);