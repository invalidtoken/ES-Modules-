import emptyFile from "./emptyFile";

// Importing from CommonJS Module
import buttonStyles, { green, red } from "./button-styles";
import * as buttonStyles2 from "./button-styles";

// Importing from ES Modules
import defaultImport, { nav, sideNav } from "./nav";
import * as navigation from "./nav";

import defaultName, { friendName, myName } from "./names";
import * as names from "./names";

console.log(emptyFile); // {}

// CommonJS Module Imports
console.log(buttonStyles); // { red: 'red', green: 'green' }
console.log(green); // "green"
console.log(red); // "red"
console.log(buttonStyles2); // { red: 'red', green: 'green' }
console.log(buttonStyles === buttonStyles2); // true

// ESM Imports
console.log(defaultImport); // undefined
console.log(nav); // "nav"
console.log(sideNav); // "sidenav"
console.log(navigation); // Object [Module] { nav: [Getter], sideNav: [Getter] }

console.log(defaultName); // [Function: greet]
console.log(friendName); // "arnav"
console.log(myName); // "sahil"
console.log(names); // Object [Module] { myName: [Getter], friendName: [Getter], default: [Function: greet] }
