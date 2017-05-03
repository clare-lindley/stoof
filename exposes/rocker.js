// What is the difference between exports and module.exports in Node.js?

// > module.exports is what you use to expose things to other files

// > module.exports is what is returned to the caller by require()

// > exports is module.exports little helper - whatever you add to exports
// also gets added to module.exports

// EXPORTS POINTS TO MODULE.EXPORTS

// there's no difference between writing
// module.exports.name = 'clare'
// exports.name = 'clare'
// at the start of your program, both exports and module.exports are {}

// HOWEVER....
// only module.exports gets returned from require.
// so while you can assign anything to module.exports directly like this:
/*
module.exports = () => {
  console.log('I am anonymouse function');
}
let mything = require('./athing.js');
mything()

// you can't do the same with exports, cause it's a reference to module.exports
so if you do this:
exports = () => {
  console.log('I am anonymouse function');
}
// you remove the link to module.exports and
when you require the module, you'll just get an empty object
Everything about JS is so bloody confusing!!!

*/


/**
Q. what's the double equals?
Q. what's export default?
Q. what's the import in the curly brackets?
Q. what's the import *?
*/
// exports is the recommended object unless you are planning to
// change the object type of your module from the traditional 'module instance' to something else

/*
> if you want your module to be of a specific type, use module.exports;
> if you want your module to be a typical module instance, use exports.
> module.exports overrides exports

module.exports WINS!
*/
// module.exports = 'Clare'; // this module exposes this value | object | function

// ex
exports = function(){
  console.log('hello');
}
