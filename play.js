const {connect} = require('./client');
const {setupInput} = require("./client");
const {handleUserInput} = require("./client");

console.log("Connecting ...");
connect();
setupInput();