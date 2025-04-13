// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

//console.log(module);

//const { nikhil, ankita } = require("./04-names");
const names = require("./04-names")
const setNamaskar = require("./05-utils");
const data = require("./06-alternative-flavor");
require("./07-mind-grenade")




// setNamaskar(nikhil)
// setNamaskar(ankita)

setNamaskar(names.nikhil)
setNamaskar(names.ankita)

//console.log(data);


