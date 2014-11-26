<img src="http://www.stephenwhitmore.com/pixelbutler.png">

# pixelbutler-starter

[![Build Status](https://secure.travis-ci.org/pixelbutler/pixelbutler-starter.svg?branch=master)](http://travis-ci.org/pixelbutler/pixelbutler-starter) [![NPM version](https://badge.fury.io/js/pixelbutler.svg)](http://badge.fury.io/js/pixelbutler) [![Dependency Status](https://david-dm.org/pixelbutler/pixelbutler-starter.svg)](https://david-dm.org/pixelbutler/pixelbutler-starter) [![devDependency Status](https://david-dm.org/pixelbutler/pixelbutler-starter/dev-status.svg)](https://david-dm.org/pixelbutler/pixelbutler-starter#info=devDependencies)

> [Pixelbutler](https://github.com/pixelbutler/pixelbutler/) starter kit.

 - Grunt
 - TypeScript
 - Webpack

## Development

The project is written in [TypeScript](http://typescriptlang.org), and built for browsers using [grunt](http://gruntjs.com) and [webpack](https://github.com/webpack/webpack). Development tools run on [node.js](http://nodejs.org/) and are pulled from [npm](https://www.npmjs.org/).

````
npm install grunt-cli -g
npm install tsd -g

git clone https://github.com/pixelbutler/pixelbutler-starter.git
npm install
tsd reinstall
tsd link
grunt build
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
