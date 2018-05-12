var chalk = require('chalk');
var readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);

console.log(chalk.green('Example App state: Online'));
console.log(chalk.green('type "quit" to exit.'));

rl.setPrompt('console > ');
rl.prompt();

rl.on('line', function(line) {
    if (line === "quit") rl.close();
    rl.prompt();
}).on('close',function(){
	console.log(chalk.red('Exiting!'));
    process.exit(0);
});