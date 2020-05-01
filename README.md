# simple-auto-clicker
A cli based auto-clicker for your auto-clicking needs.

## Install
```shell script
npm i -g simple-auto-clicker
```

## Usage
Run the following command from your favorite terminal after installing. 
```shell script
clicker
```
By default `clicker` will click every ten seconds.  It will also give you ten seconds to put the mouse where you want 
it to click.  See the options section below to change this.

## Stopping the auto clicker
There currently isn't a graceful stop for the auto clicker, so that means running the kill command in the terminal 
where you're running it. (ctrl+c on a mac for example)  

## Options
```
--delay     | -d    Default: 10s    Sets the delay between clicks.  This also sets the inital delay for putting the cursor where it will click if not using the `freeMove` option. 
--freeMove  | -f    Default: false  Freely move the mouse wherever you'd like, the auto clicker will click wherever the cursor is at when the click happens.
--safe      | -s    Default: true   Prevents the user from setting the delay to less than 10s. Its highly recommended to not set this to false unless using the `--freeMove` option.
--verbose   | -v    Default: false  Prints out the coordinates each time the auto clicker clicks.
```
