//import {PythonShell} from 'python-shell';
var PythonShell = require('python-Shell');
var express = require('express');
var app = express();
//let pyshell = new PythonShell('trasmisor.py');
//var pyshell = PythonShell();
PythonShell.run('trasmisor.py', function (err) {
    if (err) throw err;
    console.log('finished trasmisor');
  });

// Creates a server which runs on port 3000 and
// can be accessed through localhost:3000
app.listen(3000, function() {
    console.log('server running on port 3000');
} )

/*/ Function callName() is executed whenever
// the URL is of the form localhost:3000/name
app.get('/name', callName);

function callName(req, res) {

    // Use child_process.spawn method from
    // child_process module and assign it
    // to variable spawn
    var spawn = require("child_process").spawn;

    // Parameters passed in spawn -
    // 1. type_of_script
    // 2. List containing Path of the script
    //    and arguments for the script

    // E.g.: http://localhost:3000/name?firstname=Mike&lastname=Will
    // So, first name = Mike and last name = Will
    var process = spawn('python',["./hello.py",
                            req.query.firstname,
                            req.query.lastname] );

    // Takes stdout data from script which executed
    // with arguments and send this data to res object
    process.stdout.on('data', function(data) {
        res.send(data.toString());
    } )
}
*/

// sends a message to the Python script via stdin
pyshell.send('hello desde node');

pyshell.on('message', function (message) {
  // received a message sent from the Python script (a simple "print" statement)
  console.log(message);
});

// end the input stream and allow the process to exit
pyshell.end(function (err,code,signal) {
  if (err) throw err;
  console.log('The exit code was: ' + code);
  console.log('The exit signal was: ' + signal);
  console.log('finished');
});
