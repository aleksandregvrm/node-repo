const names = require("./4-names");
const nameIt = require("./5-utils");
const data = require("./6-alternativeFlavour");
require("./7-mindGrenade");

const { items, randomPerson } = data;
console.log(items, randomPerson);
const { john, susan } = names;

nameIt(susan);
nameIt(john);
