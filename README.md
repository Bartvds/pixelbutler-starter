<img src="http://www.stephenwhitmore.com/pixelbutler.png">

# pixelbutler-starter

[![Build Status](https://secure.travis-ci.org/pixelbutler/pixelbutler-starter.svg?branch=master)](http://travis-ci.org/pixelbutler/pixelbutler-starter) [![NPM version](https://badge.fury.io/js/pixelbutler.svg)](http://badge.fury.io/js/pixelbutler) [![Dependency Status](https://david-dm.org/pixelbutler/pixelbutler-starter.svg)](https://david-dm.org/pixelbutler/pixelbutler-starter) [![devDependency Status](https://david-dm.org/pixelbutler/pixelbutler-starter/dev-status.svg)](https://david-dm.org/pixelbutler/pixelbutler-starter#info=devDependencies)

> [Pixelbutler](https://github.com/pixelbutler/pixelbutler/) starter kit.

 - [npm](https://www.npmjs.org/)
 - [Grunt](http://gruntjs.com)
 - [TypeScript](http://typescriptlang.org)
 - [Webpack](https://github.com/webpack/webpack)

:warning: Readme still under construction.


## Quick-start

Development tools run on [node.js](http://nodejs.org/) `>= v0.10`

Make sure you have thes global commands `grunt` & `tsd`:

````
npm install grunt-cli -g
npm install tsd@next -g
````

Create a new project & get the dependencies:

````
git clone https://github.com/pixelbutler/pixelbutler-starter.git my-project
cd my-project
npm install
````


## Grunt commands

Rebuild project:
````
grunt build
````

Rebuild project in debug mode:
````
grunt debug
````

Start watch in debug mode:
````
grunt dev
````

Start local server at [http://localhost:8888/](http://localhost:8888/):
````
grunt server
````

See the `Gruntfile.js` and `$ grunt --help` for additional commands.


## Contributions

..are very welcome. Try to stay consistent with existing style, and make sure
to run `grunt test` before sending a pull request.


## License

Copyright (c) 2014 [Stephen Whitmore][sww] & [Bart van der Schoor][bvds]

Licensed under the MIT license.


[sww]: https://github.com/noffle
[bvds]: https://github.com/Bartvds
