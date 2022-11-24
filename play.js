const {connect} = require('./client');
const {setupInput} = require("./input");

console.log("Connecting ...");
let con = connect();
setupInput(con);